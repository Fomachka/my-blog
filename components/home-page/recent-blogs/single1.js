import Image from "next/image";
import image from "../../../public/images/posts/server-side-and-static-site-rendering-in-nextjs/server-side.png";
import styles from "./single1.module.css";
import Link from "next/link";

const RecentSingleBlog1 = ({ postInfo }) => {
  const { title, short, slug, image } = postInfo;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <Link href={`blog/${slug}`}>
      <div className={styles.recent__blog}>
        <h3 className={styles.recent__h3}>{title}</h3>
        <p className={styles.recent__p}>{short}</p>
        <Image
          src={imagePath}
          alt="next js"
          className={styles.recent__img}
          width={500}
          height={500}
        />
      </div>
    </Link>
  );
};

export default RecentSingleBlog1;
