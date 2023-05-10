import github from "../../public/images/github.svg";
import linkedin from "../../public/images/linkedin.svg";
import Image from "next/image";
import styles from "./home-page.module.css";
import Link from "next/link";
import profilePic from "../../public/images/profile2-blog-scaled.png";
import Arrow from "../../public/images/arrow.svg";
import RecentBlog from "./recent-blog";

const MainPage = ({ featuredPosts }) => {
  return (
    <section className={styles.mainpage}>
      <article>
        <h1 className={styles.mainpage__h1}>
          Welcome to my website <span>👋</span>
        </h1>
        <hr className={styles.mainpage__hr} />
        <p className={styles.mainpage__p}>
          I&apos;m{" "}
          <span>
            <Link href="/about">MAN KHI</Link>
          </span>
          , a front-end developer and coding enthusiast. Welcome to my portfolio/blog where I share
          my passion for coding and all things tech.
        </p>
        <hr className={styles.mainpage__hr} />
        <Link href="/about">
          <div className={styles.mainpage__container}>
            <Image
              src={profilePic}
              alt="kim posing on the pier"
              className={styles.mainpage__img}
              priority
              width={967}
              height={1053}
            />
            <div className={styles.mainpage__link}>
              <p>Learn more </p>
              <Arrow className={styles.mainpage__link_img} />
            </div>
          </div>
        </Link>
      </article>
      <article className={styles.article}>
        <h2 className={styles.mainpage__h2}>Recent Blogs</h2>
        <RecentBlog featuredPosts={featuredPosts} />
        <Link href="/blog" className={styles.mainpage__btn}>
          More Articles
        </Link>
      </article>
    </section>
  );
};

export default MainPage;
