import Image from "next/image";
import styles from "./single3.module.css";
import Link from "next/link";

const RecentSingleBlog2 = ({ postInfo }) => {
  const { title, short, slug, image } = postInfo;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <Link href={`blog/${slug}`} className={styles.recent__blog}>
      <div className={styles.recent__contaner}>
        <Image
          src={imagePath}
          alt="next js"
          className={styles.recent__img}
          width={500}
          height={500}
        />
        <div className={styles.recent__info}>
          <h3 className={styles.recent__h3}>{title}</h3>
          <p className={styles.recent__p}>{short}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecentSingleBlog2;
