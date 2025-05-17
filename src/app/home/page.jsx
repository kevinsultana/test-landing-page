import NavBar from "@/components/Navbar/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import AirlineLogo from "./sections/AirlineLogo/AirlineLogo";
import MainSection from "./sections/MainSection/MainSection";
import SearchboxList from "./sections/SearchBoxList/SearchboxList";
import WhyUs from "./sections/WhyUs/WhyUs";
import Testimonial from "./sections/Testimonial/Testimonial";
import AboutUs from "./sections/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Currency from "./sections/Currency/Currency";
import style from "./style.module.css";
import dynamic from "next/dynamic";

const Testimonial = dynamic(
  () => import("./sections/Testimonial/Testimonial"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <div className={style.container}>
        <NavBar />
        <HeroSection />
        <AirlineLogo />
        <MainSection />
        <SearchboxList />
        <Currency />
      </div>
      <WhyUs />
      <div className={style.container}>
        <Testimonial />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}
