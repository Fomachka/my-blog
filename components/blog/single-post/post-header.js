import styles from "./post-header.module.css";
import Image from "next/image";

const PostHeader = ({ heading, image, slug, date }) => {
  const imagePath = `/images/posts/${slug}/${image}`;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className={styles.post__header}>
      <time>Published {formattedDate}</time>
      <h1>{heading}</h1>
      <div className={styles.post__hr}></div>
    </header>
  );
};

export default PostHeader;
