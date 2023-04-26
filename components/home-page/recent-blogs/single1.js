import Image from "next/image";
import image from "../../../public/images/posts/getting-started-with-nextjs/getting-started-nextjs.png";
import styles from "./single1.module.css";
import Link from "next/link";

const RecentSingleBlog1 = () => {
  return (
    <Link href="about">
      <div className={styles.recent__blog}>
        <h3 className={styles.recent__h3}>How to use storage session in react using hooks</h3>
        <p className={styles.recent__p}>
          I started using React professionally back in 2015, and I&apos;ve been working with it ever
          since.
        </p>
        <Image src={image} alt="next js" className={styles.recent__img} />
      </div>
    </Link>
  );
};

export default RecentSingleBlog1;
