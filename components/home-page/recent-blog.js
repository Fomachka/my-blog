import React from "react";
import RecentSingleBlog1 from "./recent-blogs/single1";
import styles from "./recent-blog.module.css";
import RecentSingleBlog2 from "./recent-blogs/single2";
import RecentSingleBlog3 from "./recent-blogs/single3";
import { motion } from "framer-motion";

const RecentBlog = ({ featuredPosts }) => {
  const divAnimate = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };
  {
    return featuredPosts ? (
      <motion.div className={styles.recent} initial="hidden" whileInView="visible">
        <RecentSingleBlog1 postInfo={featuredPosts[0]} animation={divAnimate} />
        <RecentSingleBlog2 postInfo={featuredPosts[1]} animation={divAnimate} />
        <RecentSingleBlog3 postInfo={featuredPosts[2]} animation={divAnimate} />
      </motion.div>
    ) : (
      <h3>Error</h3>
    );
  }
};

export default RecentBlog;
