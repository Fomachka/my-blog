import styles from "./post-header.module.css";
import Image from "next/image";

const PostHeader = ({ heading, image, slug }) => {
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <header className={styles.post__header}>
      <h1>{heading}</h1>
      <p>29 September 2021</p>
    </header>
  );
};

export default PostHeader;
