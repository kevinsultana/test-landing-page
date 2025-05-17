"use client";

import style from "./style.module.css";
import {
  FaCalendarAlt,
  FaMoneyBillAlt,
  FaPlaneDeparture,
} from "react-icons/fa";
import React, { useState } from "react";
import imageUmroh from "../../../../assets/imgUmroh.png";
import Image from "next/image";
import ClientOnlySelect from "@/components/ClientOnlySelect/ClientOnlySelect";
import ActionButton from "@/components/ActionButton/ActionButton";

const kotaOptions = [
  { value: "jakarta", label: "Jakarta" },
  { value: "bandung", label: "Bandung" },
];

const periodeOptions = [
  { value: "maret", label: "Maret 2024" },
  { value: "april", label: "April 2024" },
];

const tarifOptions = [
  { value: "20jt", label: "< Rp 20 jt" },
  { value: "50jt", label: "< Rp 50 jt" },
];

const allUmrohData = [
  {
    id: 1,
    image: imageUmroh,
    title: "Umroh Februari 2025",
    subTitle: "Bintang 3",
    tanggal: "20 - Februari - 2025",
    harga: 20000000,
    durasi: "9 Hari",
    kota: "jakarta",
    periode: "maret",
  },
  {
    id: 2,
    image: imageUmroh,
    title: "Umroh Februari 2025",
    subTitle: "Bintang 4",
    tanggal: "20 - Februari - 2025",
    harga: 24000000,
    durasi: "9 Hari",
    kota: "bandung",
    periode: "april",
  },
  {
    id: 3,
    image: imageUmroh,
    title: "Umroh Februari 2025",
    subTitle: "Bintang 5+",
    tanggal: "20 - Februari - 2025",
    harga: 30000000,
    durasi: "9 Hari",
    kota: "jakarta",
    periode: "april",
  },
];

export default function SearchboxList() {
  const [selectedKota, setSelectedKota] = useState(kotaOptions[0]);
  const [selectedPeriode, setSelectedPeriode] = useState(periodeOptions[0]);
  const [selectedTarif, setSelectedTarif] = useState(tarifOptions[0]);
  const [filteredData, setFilteredData] = useState(allUmrohData);

  const handleSearch = () => {
    const tarifLimit = selectedTarif.value === "20jt" ? 20000000 : 50000000;

    const filtered = allUmrohData.filter(
      (item) =>
        item.kota === selectedKota.value &&
        item.periode === selectedPeriode.value &&
        item.harga <= tarifLimit
    );

    setFilteredData(filtered);
  };

  return (
    <div className={style.wrapper}>
      <h1>Pilihan Umroh Terbaik</h1>
      <div className={style.container}>
        <div className={style.field}>
          <label className={style.label}>
            <FaPlaneDeparture className={style.labelIcon} />
            Keberangkatan dari
          </label>
          <ClientOnlySelect
            isSearchable={false}
            options={kotaOptions}
            defaultValue={selectedKota}
            onChange={(option) => setSelectedKota(option)}
            classNamePrefix="rs"
          />
        </div>

        <div className={style.field}>
          <label className={style.label}>
            <FaCalendarAlt className={style.labelIcon} />
            Periode
          </label>
          <ClientOnlySelect
            isSearchable={false}
            options={periodeOptions}
            defaultValue={selectedPeriode}
            onChange={(option) => setSelectedPeriode(option)}
            classNamePrefix="rs"
          />
        </div>

        <div className={style.field}>
          <label className={style.label}>
            <FaMoneyBillAlt
              className={style.labelIcon}
              style={{ color: "green" }}
            />
            Tarif Perjalanan
          </label>
          <ClientOnlySelect
            options={tarifOptions}
            defaultValue={selectedTarif}
            onChange={(option) => setSelectedTarif(option)}
            classNamePrefix="rs"
            isSearchable={false}
          />
        </div>

        <button className={style.button} onClick={handleSearch}>
          Cari
        </button>
      </div>

      <h2>Umroh Reguler</h2>
      <div className={style.cardContainer}>
        {filteredData.map((item) => (
          <div key={item.id} className={style.card}>
            <div className={style.cardImage}>
              <Image src={item.image} alt="image" />
            </div>
            <div className={style.cardContent}>
              <p>{item.tanggal}</p>
              <h4>{item.title}</h4>
              <h4>{item.subTitle}</h4>
              <h5>{`Rp ${item.harga.toLocaleString("id-ID")}`}</h5>
              <p>{item.durasi}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.buttonContainer}>
        <ActionButton>
          <p>Lihat Semua</p>
        </ActionButton>
      </div>
    </div>
  );
}
