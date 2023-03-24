import Link from "next/link";
import styles from "./main-header.module.css";
import Image from "next/image";
import logo from "../../public/images/logo-blog.svg";
import menu from "../../public/images/menu.svg";
import Navigation from "./navigation";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="website logo" />
        </Link>
      </div>
      <div className={styles.menu}>
        <Image src={menu} alt="hamburger menu" />
      </div>
      <Navigation />
    </header>
  );
};

export default MainHeader;
