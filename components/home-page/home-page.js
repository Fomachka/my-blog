import Image from "next/image";
import styles from "./home-page.module.css";
import Link from "next/link";
import profilePic from "../../public/images/profile2-blog-scaled.png";
import Arrow from "../../public/images/arrow.svg";
import RecentBlog from "./recent-blog";
import { motion } from "framer-motion";

const MainPage = ({ featuredPosts }) => {
  return (
    <motion.section className={styles.mainpage}>
      <motion.article
        transition={{ staggerChildren: 1 }}
        viewport={{ once: false, amount: 1 }}
        initial={"initial"}
        animate={"animate"}
      >
        <motion.h1 className={styles.mainpage__h1}>
          Welcome to my website{" "}
          <motion.span
            animate={{ rotate: [0, 25, 30, 35, 40, 35, 30, 25, 0] }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            👋
          </motion.span>
        </motion.h1>
        <motion.hr
          className={styles.mainpage__hr}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.p className={styles.mainpage__p}>
          I&apos;m{" "}
          <span>
            <Link href="/about">MAN KHI</Link>
          </span>
          , a front-end developer and coding enthusiast. Welcome to my portfolio/blog
          where I share my passion for coding and all things tech.
        </motion.p>
        <motion.hr
          className={styles.mainpage__hr}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <Link href="/about">
          <motion.div
            className={styles.mainpage__container}
            transition={{ staggerChildren: 0.5 }}
            initial={"off"}
            animate={"on"}
          >
            <motion.div>
              <Image
                src={profilePic}
                alt="kim posing on the pier"
                className={styles.mainpage__img}
                priority={true}
                sizes={"(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 100vw"}
                width={725}
                height={790}
              />
            </motion.div>
            <motion.div className={styles.mainpage__link}>
              <motion.p>Learn more </motion.p>
              <Arrow className={styles.mainpage__link_img} />
            </motion.div>
          </motion.div>
        </Link>
      </motion.article>
      <article className={styles.article}>
        <h2 className={styles.mainpage__h2}>Recent Blogs</h2>
        <RecentBlog featuredPosts={featuredPosts} />
        <Link href="/blog" className={styles.mainpage__btn}>
          More Articles
        </Link>
      </article>
    </motion.section>
  );
};

export default MainPage;
