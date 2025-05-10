import Image from "next/image";
import style from "./style.module.css";
import WhyUs1 from "../../../../assets/whyus1.png";
import WhyUs2 from "../../../../assets/whyus2.png";
import WhyUs3 from "../../../../assets/whyus3.png";
import WhyUs4 from "../../../../assets/whyus4.png";

export default function WhyUs() {
  const bullet = [1, 2, 3, 4, 5, 6, 7];
  const bullet2 = [1, 2, 3];
  const data = [
    {
      image: WhyUs1,
      title: "Harga Paket Ekonomis Setara dengan Fasilitas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum  neque ut metus dictum,  vehicula. Nullam sit amet orci nec liberobulum nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum",
    },
    {
      image: WhyUs2,
      title: "Pelayanan Berkelas Bintang 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum  neque ut metus dictum,  vehicula. Nullam sit amet orci nec liberobulum nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum",
    },
    {
      image: WhyUs3,
      title: "Harga Paket Ekonomis Setara dengan Fasilitas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum  neque ut metus dictum,  vehicula. Nullam sit amet orci nec liberobulum nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum",
    },
    {
      image: WhyUs4,
      title: "Free Manasik Umroh dan Kajian ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum  neque ut metus dictum,  vehicula. Nullam sit amet orci nec liberobulum nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum",
    },
  ];
  return (
    <div className={style.background}>
      <div className={style.bulletWrapper}>
        {bullet2.map((item, index) => (
          <div key={index} className={style.bulletContainer}>
            <div className={style.bullet} />
            <div className={style.bullet} />
            <div className={style.bullet} />
            <div className={style.bullet} />
            <div className={style.bullet} />
            <div className={style.bullet} />
            <div className={style.bullet} />
            <div className={style.bullet} />
          </div>
        ))}
      </div>
      <div className={style.bulletWrapper1}>
        {bullet.map((item, index) => (
          <div key={index} className={style.bulletContainer1}>
            <div className={style.bullet1} />
            <div className={style.bullet1} />
            <div className={style.bullet1} />
          </div>
        ))}
      </div>
      <div className={style.headerText}>
        <h1>Mengapa Harus Dian Cahaya Tour And Travel</h1>
      </div>
      <div className={style.whyUsContainer}>
        {data.map((item, index) => (
          <div key={index} className={style.whyUsCard}>
            <Image src={item.image} alt="whyus" className={style.whyUsImage} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
