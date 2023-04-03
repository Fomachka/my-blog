import { useState } from "react";
import Link from "next/link";
import styles from "./main-header.module.css";
import Image from "next/image";
import logo from "../../public/images/logo-blog.svg";
import menu from "../../public/images/menu.svg";
import Navigation from "./navigation";
import xmenu from "../../public/images/x-menu.svg";

const MainHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`${styles.logo} ${styles.logo__sidemenu}`}>
        <Link href="/">
          <Image src={logo} alt="website logo" />
        </Link>
      </div>
      <div
        className={`${styles.menu} ${styles.menu__sidemenu}`}
        onClick={() => setToggle((prev) => !prev)}
      >
        {!toggle && <Image src={menu} alt="hamburger menu" className={styles.menu__ham} />}
        {toggle && <Image src={xmenu} alt="closing menu" className={styles.menu__x} />}
      </div>
      <Navigation active={toggle} setActive={setToggle} />
    </header>
  );
};

export default MainHeader;
