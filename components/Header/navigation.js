import Link from "next/link";
import styles from "./navigation.module.css";

const Navigation = ({ active, setActive }) => {
  return (
    <nav className={`${styles.navigation} ${active && styles.navigation__page}`}>
      <ul className={`${styles.navigation__ul} ${active && styles.navigation__active}`}>
        <li onClick={() => setActive(false)}>
          <Link href="/">PORTFOLIO</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/about">ABOUT ME</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/blog">BLOG</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/projects">PROJECTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
