"use client";
import React, { useEffect, useState } from "react";

export default function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const tabletSize = 768;
  const mobileSize = 400;
  const mediumSize = 1200;
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isTabletSize: width <= tabletSize,
    isMobileSize: width <= mobileSize,
    isMediumSize: width <= mediumSize,
    width,
    height,
  };
}
