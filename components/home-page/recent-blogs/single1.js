import Image from "next/image";

import styles from "./single1.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const RecentSingleBlog1 = ({ postInfo, animation }) => {
  const { title, short, slug, image } = postInfo;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <Link href={`blog/${slug}`}>
      <motion.div
        className={styles.blog__container}
        variants={animation}
        viewport={{ once: true, amount: 1 }}
      >
        <div className={styles.blog__img_container}>
          <Image
            src={imagePath}
            alt="next js"
            className={styles.blog__img}
            width={500}
            height={500}
          />
        </div>
        <p className={styles.blog__title}>{title}</p>
        <p className={styles.blog__p}>{short}</p>
      </motion.div>
    </Link>
  );
};

export default RecentSingleBlog1;
