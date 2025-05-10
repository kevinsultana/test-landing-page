import ActionButton from "@/components/ActionButton/ActionButton";
import style from "./style.module.css";
import Image from "next/image";
import hajiKhusus from "../../../../assets/hajiKhusus.png";
import umroh from "../../../../assets/umroh.png";

export default function MainSection() {
  const data = [
    {
      image: hajiKhusus,
      title: "Haji Khusus",
      description: "Layanan Haji Khusus",
    },
    {
      image: umroh,
      title: "Umroh",
      description: "Layanan Umroh",
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1>Layanan Berkelas, Teruji dan Terjangkau</h1>
        <h2>
          Menyediakan beragam paket perjalanan yang disesuaikan untuk memenuhi
          kebutuhan dan preferensi berbagai jenis pelanggan, mulai dari paket
          keluarga hingga perjalanan kelompok atau perorangan.
        </h2>
        <div className={style.buttonContainer}>
          <button className={style.buttonCek}>Cek Paket Harga</button>
          <ActionButton>
            <p className={style.buttonContact}>Konsultasikan dengan kami</p>
          </ActionButton>
        </div>
      </div>
      <div className={style.imageContainer}>
        {data.map((item, index) => (
          <div key={index} className={style.card}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={style.cardImage}
            />
            <div className={style.overlay} />
            <div className={style.textContainer}>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              <p className={style.link}>Selengkapnya &gt;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
