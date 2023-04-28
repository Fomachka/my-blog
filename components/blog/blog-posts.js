import styles from "./blog-post.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogPosts = ({ date, image, slug, content, title, short }) => {
  // Dont forget to include date in JSX below or pass it to a component
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/blog/${slug}`;

  return (
    <article className={styles.blogpost}>
      <Link href={linkPath}>
        <div className={styles.blogpost__info}>
          <time className={styles.blogpost__date}>{formattedDate}</time>
          <h3 className={styles.blogpost__h3}>{title}</h3>
          <p className={styles.blogpost__p}>{short}</p>
          <div></div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPosts;
