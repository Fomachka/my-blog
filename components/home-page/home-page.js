import { useState } from "react";
import Image from "next/image";
import styles from "./home-page.module.css";
import Link from "next/link";
import profilePic from "../../public/images/profile2-blog-scaled.png";
import Facebook from "../../public/images/facebook.svg";
import LinkedIn from "../../public/images/linkedin.svg";
import Instagram from "../../public/images/instagram.svg";
import Github from "../../public/images/github.svg";
import Arrow from "../../public/images/arrow-link.svg";
import EyeIcon from "../../public/images/eye.svg";
import DownloadIcon from "../../public/images/download.svg";
import RecentBlog from "./recent-blog";

const MainPage = ({ featuredPosts }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className={styles.mainpage}>
      <article className={styles.mainpage__article}>
        <div className={styles.mainpage__article_half}>
          <Image
            src={profilePic}
            alt="kim man khi profile"
            className={styles.mainpage__img}
            priority={true}
            width={844}
            height={844}
            quality={95}
            sizes="(min-width: 1440px) 160px, 126px"
          />
          <p className={styles.mainpage__h2}>Front-end Developer</p>
          <p className={styles.mainpage__p}>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
          <div className={styles.mainpage__svg}>
            <Link
              href="https://github.com/Fomachka"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="A link to see the github page"
              className={styles.mainpage__svg_icon}
            >
              <Github className={styles.mainpage__facebook} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/man-khi-kim-311172188/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="A link to see the linkedin page"
              className={styles.mainpage__svg_icon}
            >
              <LinkedIn className={styles.mainpage__facebook} />
            </Link>
            <Link
              href="https://www.instagram.com/manee.roma"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="A link to see the instagram page"
              className={styles.mainpage__svg_icon}
            >
              <Instagram className={styles.mainpage__facebook} />
            </Link>
            <Link
              href="https://www.facebook.com/manee.kim.3"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="A link to see the facebook page"
              className={styles.mainpage__svg_icon}
            >
              <Facebook className={styles.mainpage__facebook} />
            </Link>
          </div>
        </div>
        <div className={styles.mainpage__article_half}>
          <hr className={styles.mainpage__hr} />
          <div className={styles.mainpage__description}>
            <p className={styles.mainpage__description_p}>
              I’m{" "}
              <span
                className={styles.mainpage__description_span}
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              >
                MAN KHI{" "}
                <span
                  className={`${styles.mainpage__description_spanpop} ${
                    showPopup ? styles.isVisible : ""
                  }`}
                >
                  It’s pronounced just like Manee!
                </span>
              </span>
              , a front-end developer and coding enthusiast. Welcome to a portfolio/blog
              where I share my passion for coding and all things tech.{" "}
            </p>
            <p className={styles.mainpage__description_p}>
              Here, you&apos;ll find some of my favorite projects, technical articles, and
              lessons learned along the way.
            </p>
            <p className={styles.mainpage__description_p}>
              I’m a front-end developer who loves building smooth, responsive interfaces
              that look good and feel even better to use. I’m all about clean code,
              thoughtful design, and adding those little touches that make a site feel
              special. Whether I’m experimenting with a new framework or just polishing up
              some UI details, I’m always trying to make the web a nicer place.
            </p>
            <p className={styles.mainpage__description_p}>
              When I’m not wrestling with code, I’m probably hanging out with friends,
              catching up on games, or planning my next weekend escape.
            </p>
            <div className={styles.mainpage__btn_container}>
              <div className={styles.mainpage__btn}>
                <p className={styles.mainpage__btn_p}>My Resume</p>
                <div className={styles.mainpage__linksicon}>
                  <Link
                    href="https://drive.google.com/file/d/1kb1Ad_Eb6ZIUjkJ8sxfMF5TeWJVit7qo/view"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="A link to see the resume online"
                    className={styles.mainpage__links_a}
                  >
                    <EyeIcon className={styles.link1} />
                  </Link>
                  <Link
                    href="/documents/resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="A link to download the resume"
                    download="resume"
                    className={styles.mainpage__links_a}
                  >
                    <DownloadIcon className={styles.link2} />
                  </Link>
                </div>
              </div>
              <Link
                className={`${styles.mainpage__btn} ${styles.mainpage__btn_small}`}
                href="mailto:fomachka93@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="A link to see the resume online"
              >
                <p className={styles.mainpage__btn_p}>Contact me</p>
                <Arrow className={styles.mainpage__link_img} />
              </Link>
            </div>
          </div>
        </div>
      </article>
      {featuredPosts && (
        <article>
          <h3 className={styles.mainpage__h3}>Recent Blogs</h3>
          <RecentBlog featuredPosts={featuredPosts} />
          <Link
            href="/blog"
            className={`${styles.mainpage__btn} ${styles.mainpage__btn_articles}`}
          >
            More Articles
          </Link>
        </article>
      )}
    </section>
  );
};

export default MainPage;
