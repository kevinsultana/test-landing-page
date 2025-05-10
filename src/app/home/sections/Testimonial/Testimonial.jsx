import ActionButton from "@/components/ActionButton/ActionButton";
import style from "./style.module.css";
import Image from "next/image";
import testi1 from "../../../../assets/testi1.png";
import testi2 from "../../../../assets/testi2.png";
import testi3 from "../../../../assets/testi3.png";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Testimonial() {
  const data = [testi1, testi2, testi3];
  return (
    <div className={style.wrapper}>
      <div className={style.headerTitle}>
        <div className={style.headerText}>
          <h1>Apa Yang Mereka Katakan ?</h1>
          <h2>
            Beberapa testimonial dari mereka yang telah mempercayakan Kami
            sebagai teman Perjalanan Anda
          </h2>
        </div>
        <ActionButton>
          <p className={style.buttonText}>Lihat Semua</p>
        </ActionButton>
      </div>
      <div className={style.testiContainer}>
        {data.map((item, index) => (
          <div key={index} className={style.testiCard}>
            <Image src={item} alt="testi" className={style.testiImg} />
          </div>
        ))}
      </div>
      <div className={style.buttonContainer}>
        <FaArrowCircleLeft className={style.arrow} />
        <FaArrowCircleRight className={style.arrow} />
      </div>
    </div>
  );
}
