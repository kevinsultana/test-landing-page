"use client";

import { Currencies } from "@/data/Currencies";
import style from "./style.module.css";
import { useState } from "react";
import axios from "axios";

export default function Currency() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("IDR");
  const [amount, setAmount] = useState("");

  const [result, setResult] = useState(null);

  const i = Currencies;
  const mataUang = i.map((item) => {
    return {
      code: item.code,
      name: item.name,
      symbol: item.symbol_native,
      decimalDigits: item.decimal_digits,
    };
  });

  const handleSubmitConvert = async () => {
    if (result !== null) {
      return;
    }

    console.log("triggered");
    try {
      const response = await axios.get(
        `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0GePyzD1Ozvm6a0QCSwpWBAZXBjSamkLNTZcYhRB&currencies=&base_currency=${fromCurrency}`
      );
      const data = response.data.data;
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  let resultAmount = "";

  if (result && result[fromCurrency] && result[toCurrency] && amount) {
    const rawResult =
      Number(amount) *
      (Number(result[toCurrency]) / Number(result[fromCurrency]));

    resultAmount = rawResult.toLocaleString("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>Currency Converter</h1>

        <div className={style.field}>
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>

        <div className={style.row}>
          <div className={style.field}>
            <label>From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {mataUang.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleSwitch} className={style.button}>
            Switch
          </button>

          <div className={style.field}>
            <label>To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {mataUang.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={style.buttonConvertWrapper}>
          <button onClick={handleSubmitConvert} className={style.buttonConvert}>
            Convert
          </button>
        </div>

        <div className={style.result}>
          Result: {toCurrency} {resultAmount ?? 0}
        </div>
      </div>
    </div>
  );
}
