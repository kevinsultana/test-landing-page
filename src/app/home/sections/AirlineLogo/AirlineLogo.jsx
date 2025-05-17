import style from "./style.module.css";
import logo1 from "../../../../assets/logo1.png";
import logo2 from "../../../../assets/logo2.png";
import logo3 from "../../../../assets/logo3.png";
import logo4 from "../../../../assets/logo4.png";
import logo5 from "../../../../assets/logo5.png";
import logo6 from "../../../../assets/logo6.png";
import logo7 from "../../../../assets/logo7.png";
import Image from "next/image";

export default function AirlineLogo() {
  const dataImg = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Our Partners</h3>
      <div className={style.container}>
        {dataImg.map((item, index) => (
          <Image key={index} src={item} alt="logo" className={style.logo} />
        ))}
      </div>
    </div>
  );
}
