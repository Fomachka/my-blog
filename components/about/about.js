import styles from "./about.module.css";
import Image from "next/image";
import EyeIcon from "../../public/images/eye.svg";
import DownloadIcon from "../../public/images/download.svg";
import profilePic1 from "../../public/images/personal/prof1.png";
import profilePic2 from "../../public/images/personal/prof2.png";
import profilePic3 from "../../public/images/personal/prof3.png";
import ArrowDownIcon from "../../public/images/arrow-down.svg";
import Link from "next/link";

const About = () => {
  return (
    <section className={styles.aboutpage}>
      <div className={styles.aboutpage__header}>
        <h2 className={styles.aboutpage__h2}>About me</h2>
        <p>Take a minute to know me.</p>
      </div>
      <div className={styles.about__imgs}>
        <Image
          src={profilePic2}
          unoptimized
          alt="author of a blog posing with a view"
          className={`${styles.about__profile} ${styles.about__img1}`}
        />
        <Image
          src={profilePic3}
          alt="author of a blog looking at the sun"
          className={`${styles.about__profile} ${styles.about__img2}`}
        />
        <Image
          src={profilePic1}
          alt="author of a blog posing on the pier"
          className={`${styles.about__profile} ${styles.about__img3}`}
        />
      </div>
      <p className={styles.about__p}>
        Hey, my name is <span>Man Khi</span>, but you can call me Manee. A Front-end web developer
        from around the world.
      </p>
      <div className={styles.about__links}>
        <p className={styles.about__link_p}>My Resume</p>
        <div className={styles.about__linksicon}>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.about__links_a}
          >
            <EyeIcon className={styles.link1} />
          </a>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.about__links_a}
          >
            <DownloadIcon className={styles.link2} />
          </a>
        </div>
      </div>
      <p className={styles.about__p}>
        I&apos;m a front-end wizard who occasionally dabbles in back-end shenanigans. I prefer to
        focus on creating visually stunning websites that are joy to use and making them
        user-friendly.
      </p>
      <div className={styles.about__contact}>
        <p className={styles.about__p_magic}>Let&apos;s make some magic!</p>
        <ArrowDownIcon className={styles.arrowdown} />
        <a
          className={styles.about__btn}
          href="mailto:fomachka93@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
