import styles from "./blog-post.module.css";
import Link from "next/link";

const BlogPosts = ({ date, slug, title, short, categories }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkPath = `/blog/${slug}`;

  return (
    <article className={styles.blogpost}>
      <Link href={linkPath}>
        <div className={styles.blogpost__info}>
          <time className={styles.blogpost__date}>{formattedDate}</time>
          <h3 className={styles.blogpost__h3}>{title}</h3>
          <p className={styles.blogpost__p}>{short}</p>
          <div className={styles.blogpost__categories}>
            {categories &&
              categories.map((category, index) => (
                <button key={index} className={styles.blogpost__category}>
                  {category}
                </button>
              ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPosts;
