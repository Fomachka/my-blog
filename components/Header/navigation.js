import Link from "next/link";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/">PORTFOLIO</Link>
        </li>
        <li>
          <Link href="/about">ABOUT ME</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
