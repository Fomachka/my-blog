import React from "react";
import RecentSingleBlog1 from "./recent-blogs/single1";
import styles from "./recent-blog.module.css";
import RecentSingleBlog2 from "./recent-blogs/single2";
import RecentSingleBlog3 from "./recent-blogs/single3";

const RecentBlog = ({ featuredPosts }) => {
  {
    return featuredPosts ? (
      <div className={styles.recent}>
        <RecentSingleBlog1 postInfo={featuredPosts[0]} />
        <RecentSingleBlog2 postInfo={featuredPosts[1]} />
        <RecentSingleBlog3 postInfo={featuredPosts[2]} />
      </div>
    ) : (
      <h3>Error</h3>
    );
  }
};

export default RecentBlog;
