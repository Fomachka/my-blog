"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./main-header.module.css";
import menustyles from "./menu-icon.module.css";

import SunIcon from "../../public/images/sun.svg";
import MoonIcon from "../../public/images/moon.svg";
import { useRouter } from "next/router";
import { useRef } from "react";
import MenuIcon from "./menu-icon";

const MainHeader = () => {
  // const storage =  typeof window !== "undefined" ? window.localStorage.theme : "light"
  const [themeMode, setThemeMode] = useState(() =>
    typeof window !== "undefined" ? document.body.dataset.theme || "dark" : "dark"
  );
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
    let initialTheme;
    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme) {
      initialTheme = storedTheme;
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        initialTheme = "dark";
      } else {
        initialTheme = "light";
      }
    }
    setThemeMode(initialTheme);
    setClientLoaded(true);
  }, []);

  useEffect(() => {
    if (clientLoaded && themeMode) {
      document.body.dataset.theme = themeMode;
      window.localStorage.setItem("theme", themeMode);
    }
  }, [themeMode, clientLoaded]);

  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <div className={styles.header__menu}>
          <Link href="/">
            <h1 className={styles.header__logo}>
              <span>M</span>
              <span>a</span>
              <span>n</span>
              <span>&nbsp;</span>
              <span>K</span>
              <span>h</span>
              <span>i</span>
              <span>&nbsp;</span>
              <span>K</span>
              <span>i</span>
              <span>m</span>
            </h1>
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
            <button className={styles.navigation__modalicons} onClick={themeModeHandle}>
              {clientLoaded && themeMode === "light" ? (
                <div ref={sunIconRef}>
                  <SunIcon className={`${styles.navigation__sun} ${styles.sun} `} />
                </div>
              ) : (
                <div ref={sunIconRef}>
                  <MoonIcon className={`${styles.navigation__sun} ${styles.moon} `} />
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
          {clientLoaded && themeMode === "light" ? (
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
