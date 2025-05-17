"use client";
import { useEffect, useState } from "react";
import ActionButton from "@/components/ActionButton/ActionButton";
import style from "./style.module.css";
import Image from "next/image";
import testi1 from "../../../../assets/testi1.png";
import testi2 from "../../../../assets/testi2.png";
import testi3 from "../../../../assets/testi3.png";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Testimonial() {
  const data = [testi1, testi2, testi3, testi1, testi2, testi3];
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1440) setSlidesPerPage(4);
        else if (width >= 1024) setSlidesPerPage(3);
        else if (width >= 600) setSlidesPerPage(2);
        else setSlidesPerPage(1);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleNext = () => {
    const nextIndex = currentIndex + slidesPerPage;
    if (nextIndex >= data.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - slidesPerPage;
    if (prevIndex < 0) {
      const totalGroups = Math.ceil(data.length / slidesPerPage);
      setCurrentIndex((totalGroups - 1) * slidesPerPage);
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  const visibleSlides = data.slice(currentIndex, currentIndex + slidesPerPage);

  if (visibleSlides.length < slidesPerPage) {
    const remaining = slidesPerPage - visibleSlides.length;
    visibleSlides.push(...data.slice(0, remaining));
  }

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
        <div className={style.buttonContainer}>
          <ActionButton>
            <p className={style.buttonText}>Lihat Semua</p>
          </ActionButton>
        </div>
      </div>

      <div className={style.testiContainer}>
        {visibleSlides.map((item, index) => (
          <div key={index} className={style.testiCard}>
            <Image src={item} alt="testimonial" className={style.testiImg} />
          </div>
        ))}
      </div>

      <div className={style.buttonContainer}>
        <FaArrowCircleLeft className={style.arrow} onClick={handlePrev} />
        <FaArrowCircleRight className={style.arrow} onClick={handleNext} />
      </div>
    </div>
  );
}
