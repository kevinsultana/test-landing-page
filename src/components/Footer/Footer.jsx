import Image from "next/image";
import style from "./style.module.css";
import LogoDC from "../../assets/logoDC.png";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const data = [
    {
      title: "Layanan",
      items: [
        "Paket Umroh Bintang 3",
        "Paket Umrah Bintang 5",
        "Paket Haji Backpacker",
        "Paket Wisata Lainnya",
      ],
    },
    {
      title: "Informasi",
      items: [
        "Metode Pembayaran",
        "Syarat dan Ketentuan",
        "Kebijakan Privasi",
        "Blog",
      ],
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contentLeft}>
          <Image src={LogoDC} alt="Logo DC" />
          <h1>
            Ruko Novo Citra Grand Blok MR No. 19 Jatikarsa, Jatisampurna, Kota
            Bekasi
          </h1>
        </div>
        <div className={style.contentRight}>
          {data.map((item, index) => (
            <div key={index} className={style.item}>
              <h2>{item.title}</h2>
              {item.items.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          ))}
          <div className={style.item}>
            <h2>Follow Us</h2>
            <div className={style.social}>
              <FaInstagram />
              <FaFacebook />
              <FaWhatsapp />
            </div>
            <p>+62 812 3456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
}
