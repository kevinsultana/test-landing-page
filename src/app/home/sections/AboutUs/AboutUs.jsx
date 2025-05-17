import Image from "next/image";
import style from "./style.module.css";
import AboutUsHero from "../../../../assets/aboutUs.png";
import logo1 from "../../../../assets/logoAbout1.png";
import logo2 from "../../../../assets/logoAbout2.png";
import logo3 from "../../../../assets/logoAbout3.png";
import logo4 from "../../../../assets/logoAbout4.png";

export default function AboutUs() {
  const data = [logo1, logo2, logo3, logo4];
  return (
    <div className={style.wrapper}>
      <Image src={AboutUsHero} alt="aboutus" />
      <div className={style.content}>
        <h1>Sekilas Tentang PT. Dian Cahaya Tour and Travel</h1>
        <h2>
          PT. Dian Cahaya Tour and Travel merupakan sebuah Agen pariwisata yang
          bergerak di bidang konvensional pada awal tahun 2011, Dan mulai fokus
          di bidang Pariwisata Halal sejak tahun 2014. Dian Cahaya Tour and
          Travel Telah mendapatkan izin operasional resmi dari Kementrian Agama
          RI sebagai PPIU (Perusahaan Penyelenggara Ibadah Umroh) No. 6506 THN
          2023 (PT DIAN CAHAYA).
        </h2>
        <div className={style.logos}>
          {data.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="aboutus1"
              className={style.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
