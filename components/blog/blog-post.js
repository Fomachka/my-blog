import styles from "./blog-post.module.css";
import Image from "next/image";
import coding from "../../public/images/coding.jpg";

const BlogPosts = () => {
  return (
    <article className={styles.blogpost}>
      <Image src={coding} alt="coding image" className={styles.blogpost__img} />
      <div className={styles.blogpost__info}>
        <h1>Using the Strava API with Next.js</h1>
        <p className={styles.blogpost__p}>
          I started using React professionally back in 2015, and I&apos;ve been working with it ever
          since.
        </p>
        <p className={styles.blogpost__more}>Read more</p>
      </div>
    </article>
  );
};

export default BlogPosts;
