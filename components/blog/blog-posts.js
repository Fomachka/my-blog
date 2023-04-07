import styles from "./blog-post.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogPosts = ({ date, image, slug, content, title }) => {
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
      <Image
        src={imagePath}
        alt="coding image"
        className={styles.blogpost__img}
        width={250}
        height={250}
      />
      <div className={styles.blogpost__info}>
        <h1>{title}</h1>
        <p className={styles.blogpost__p}>{content}</p>
        <Link href={linkPath}>
          <p className={styles.blogpost__more}>Read more</p>
        </Link>
      </div>
    </article>
  );
};

export default BlogPosts;
