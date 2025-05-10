import style from "./style.module.css";
import HeroImg from "../../../../assets/heroimg.png";
import Image from "next/image";
import ActionButton from "@/components/ActionButton/ActionButton";
import { FaUser, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.text}>
          <h1>
            Pintu Menuju Keberkahan: Temukan Perjalanan Umrah dan Haji Anda
            Bersama Kami
          </h1>
          <h2>
            Dipersiapkan dengan Baik, Dilayani dengan Cinta Perjalanan Umrah
            yang Tidak Terlupakan
          </h2>
          <ActionButton>
            <div className={style.button}>
              <FaWhatsapp className={style.buttonIcon} />
              <p className={style.buttonText}>Daftar Sekarang</p>
            </div>
          </ActionButton>
        </div>
        <div className={style.heroImg}>
          <Image src={HeroImg} height={460} alt="heroimage" />
        </div>
      </div>
    </div>
  );
}
