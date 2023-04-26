import React from "react";
import RecentSingleBlog1 from "./recent-blogs/single1";
import styles from "./recent-blog.module.css";
import RecentSingleBlog2 from "./recent-blogs/single2";
import RecentSingleBlog3 from "./recent-blogs/single3";

const RecentBlog = () => {
  return (
    <div className={styles.recent}>
      <RecentSingleBlog1 />
      <RecentSingleBlog2 />
      <RecentSingleBlog3 />
    </div>
  );
};

export default RecentBlog;
