"use client";

import NavBar from "@/components/Navbar/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import AirlineLogo from "./sections/AirlineLogo/AirlineLogo";
import MainSection from "./sections/MainSection/MainSection";
import SearchboxList from "./sections/SearchBoxList/SearchboxList";
import WhyUs from "./sections/WhyUs/WhyUs";
import AboutUs from "./sections/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Currency from "./sections/Currency/Currency";
import style from "./style.module.css";
import TestimonialClientWrapper from "./sections/Testimonial/TestimonialClientWrapper";

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
        <TestimonialClientWrapper />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}
