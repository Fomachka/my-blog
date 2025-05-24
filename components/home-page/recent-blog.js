import React from "react";
import RecentSingleBlog1 from "./recent-blogs/single1";
import styles from "./recent-blog.module.css";

const RecentBlog = ({ featuredPosts }) => {
  {
    return (
      <div className={styles.recent}>
        {featuredPosts.map((post, index) => {
          return <RecentSingleBlog1 key={post.content} postInfo={featuredPosts[index]} />;
        })}
      </div>
    );
  }
};

export default RecentBlog;
