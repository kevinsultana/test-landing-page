import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Jalankan sekali saat mount, di client pasti ada window
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
