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

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AirlineLogo />
      <MainSection />
      <SearchboxList />
      <Currency />
      <WhyUs />
      <Testimonial />
      <AboutUs />
      <Footer />
    </div>
  );
}
