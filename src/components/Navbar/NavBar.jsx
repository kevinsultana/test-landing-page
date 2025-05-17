"use client";
import Image from "next/image";
import LogoDC from "../../assets/logoDC.png";
import Styles from "./style.module.css";
import useScreenSize from "@/app/hooks/useScreenSize";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const { width } = useScreenSize();
  console.log(width);
  return (
    <div className={Styles.navbar}>
      <div className={Styles.image}>
        <Image src={LogoDC} alt="Logo DC" />
      </div>
      {width < 600 ? (
        <nav>
          <FaBars />
        </nav>
      ) : (
        <nav className={Styles.navmenu}>
          <ul className={Styles.menu}>
            <li>Produk</li>
            <li>Tentang Kami</li>
            <li>Berita</li>
            <li>Galeri</li>
          </ul>
          <ul className={Styles.menuuser}>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      )}
    </div>
  );
}
