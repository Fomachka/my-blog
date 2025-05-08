import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./main-header.module.css";
import menustyles from "./menu-icon.module.css";
import Image from "next/image";
import logo from "../../public/images/my-logo.png";
import logoDark from "../../public/images/my-logo-dark.png";
import SunIcon from "../../public/images/sun.svg";
import MoonIcon from "../../public/images/moon.svg";
import { useRouter } from "next/router";
import { useRef } from "react";
import MenuIcon from "./menu-icon";

const MainHeader = () => {
  const storage = typeof window !== "undefined" ? window.localStorage.theme : "light";
  const [themeMode, setThemeMode] = useState(storage);
  const [clientLoaded, setClientLoaded] = useState(false);

  const themeModeHandle = (e) => {
    e.preventDefault();
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navRef = useRef();
  const iconRef = useRef();
  const sunIconRef = useRef();

  const router = useRouter();

  const handleAnimation = () => {
    iconRef.current.classList.toggle(`${menustyles.openmenu}`);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle(`${styles.responsive__nav}`);
    if (!sunIconRef.current.classList.contains(`${styles.responsive__icon}`)) {
      sunIconRef.current.classList.add(styles.responsive__icon);
    }
  };

  const closeNavbar = () => {
    navRef.current.classList.remove(`${styles.responsive__nav}`);
    if (iconRef.current.classList.contains(`${menustyles.openmenu}`)) {
      handleAnimation();
    }
    if (!sunIconRef.current.classList.contains(`${styles.responsive__icon}`)) {
      sunIconRef.current.classList.add(styles.responsive__icon);
    } else {
      sunIconRef.current.classList.remove(styles.responsive__icon);
    }
  };

  useEffect(() => {
    document.body.dataset.theme = themeMode;
    window.localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <div className={styles.header__menu}>
          <Link href="/">
            {themeMode && themeMode === "light" && clientLoaded ? (
              <Image
                src={logo}
                alt="website logo"
                className={styles.header__logo}
                priority={true}
              />
            ) : (
              <Image
                src={logoDark}
                alt="website logo"
                className={styles.header__logo}
                priority={true}
              />
            )}
          </Link>
          <nav className={styles.navigation} ref={navRef}>
            <ul className={styles.navigation__ul}>
              <li
                onClick={closeNavbar}
                className={router.asPath === "/" ? `${styles.li__active}` : ""}
              >
                <Link href="/">Portfolio</Link>
              </li>
              <li
                onClick={closeNavbar}
                className={router.asPath === "/about" ? `${styles.li__active}` : ""}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={closeNavbar}
                className={router.asPath === "/blog" ? `${styles.li__active}` : ""}
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                onClick={closeNavbar}
                className={router.asPath === "/projects" ? `${styles.li__active}` : ""}
              >
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
            <button className={styles.navigation__modalicons}>
              {themeMode && themeMode === "light" && clientLoaded ? (
                <div ref={sunIconRef}>
                  <SunIcon
                    onClick={themeModeHandle}
                    className={`${styles.navigation__sun} ${styles.sun} `}
                  />
                </div>
              ) : (
                <div ref={sunIconRef}>
                  <MoonIcon
                    onClick={themeModeHandle}
                    className={`${styles.navigation__sun} ${styles.moon} `}
                  />
                </div>
              )}
            </button>
          </nav>
          <button
            className={styles.navigation__btn}
            onClick={showNavbar}
            aria-label="Button menu icon"
          >
            <MenuIcon animation={handleAnimation} ref={iconRef} />
          </button>
        </div>
        <button
          className={styles.navigation__icons}
          aria-label="Icon to change a theme of a website"
        >
          {themeMode && themeMode === "light" && clientLoaded ? (
            <SunIcon
              onClick={themeModeHandle}
              className={`${styles.header__sun} ${styles.sun}`}
            />
          ) : (
            <MoonIcon
              onClick={themeModeHandle}
              className={`${styles.header__sun} ${styles.moon}`}
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
