import Image from "next/image";
import styles from "./single3.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const RecentSingleBlog3 = ({ postInfo, animation }) => {
  const { title, short, slug, image } = postInfo;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <Link href={`blog/${slug}`} className={styles.recent__blog}>
      <motion.div className={styles.recent__contaner} variants={animation}>
        <div className={styles.recent__img_container}>
          <Image
            src={imagePath}
            alt="next js"
            className={styles.recent__img}
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className={styles.recent__info}>
          <h3 className={styles.recent__h3}>{title}</h3>
          <p className={styles.recent__p}>{short}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default RecentSingleBlog3;
