import styles from "./post-header.module.css";

const PostHeader = ({ heading }) => {
  return (
    <header className={styles.post__header}>
      {/* <div className={styles.post__bg}></div>
      <div className={styles.post__address}>
        <span>HOME &gt; BLOG</span>
      </div> */}
      <h1>{heading}</h1>
    </header>
  );
};

export default PostHeader;
