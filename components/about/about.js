import styles from "./about.module.css";
import Image from "next/image";
import eye from "../../public/images/eye.svg";
import download from "../../public/images/download.svg";
import profilePic2 from "../../public/images/profile2-blog.png";
import Link from "next/link";

const About = () => {
  return (
    <section className={styles.aboutpage}>
      <h2>ABOUT ME</h2>
      <hr />
      <p>
        Hey, my name is <span>Man Khi</span>, You can call me <span>Manee</span>. I’m a Front-end
        web developer from around the world.
      </p>
      <div className={styles.about}>
        <p className={styles.about__p}>MY RESUME</p>
        <div className={styles.links}>
          <Link href="https://google.com" rel="noopener noreferrer" target="_blank">
            <Image src={eye} alt="web link to view a resume" className={styles.link1} />
          </Link>
          <Link href="https://google.com" rel="noopener noreferrer" target="_blank">
            <Image src={download} alt="download link to resume" className={styles.link2} />
          </Link>
        </div>
      </div>
      <p className={styles.description}>
        I’m a front-end wizard who occasionally dabbles in back-end shenanigans. I prefer to focus
        on creating visually stunning websites that are joy to use and making them user-friendly.
      </p>
      <p className={styles.description}>Let&apos;s make some magic!</p>
      <Image src={profilePic2} alt="kim posing on the pier" className={styles.profile__img} />
    </section>
  );
};

export default About;
