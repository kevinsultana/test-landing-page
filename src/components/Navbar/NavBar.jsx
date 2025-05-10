import Image from "next/image";
import LogoDC from "../../assets/logoDC.png";
import Styles from "./style.module.css";

export default function NavBar() {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.image}>
        <Image src={LogoDC} width={277} alt="Logo DC" />
      </div>
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
    </div>
  );
}
