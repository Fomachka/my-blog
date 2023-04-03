import github from "../../public/images/github.svg";
import linkedin from "../../public/images/linkedin.svg";
import Image from "next/image";
import styles from "./home-page.module.css";
import Link from "next/link";
import profilePic from "../../public/images/profile-blog.png";

const MainPage = () => {
  return (
    <section className={styles.mainpage}>
      <div className={styles.name}>
        <h1 className={styles.name__h1}>MAN KHI KIM</h1>
        <div className={styles.links}>
          <Image src={github} alt="github link" className={styles.link} />
          <Image src={linkedin} alt="github link" className={styles.link} />
        </div>
      </div>
      <p className={styles.paragraph}>
        I&apos;m a passionate software developer with a love for design and a strong desire to
        continually learn and improve.
      </p>
      <Link href="/about">
        <p className={`${styles.paragraph} ${styles.paragraph__link}`}>Learn more about me</p>
      </Link>
      <Image src={profilePic} alt="kim standing on the pier" className={styles.profile__img} />
    </section>
  );
};

export default MainPage;
