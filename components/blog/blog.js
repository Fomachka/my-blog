import styles from "./blog.module.css";
import search from "../../public/images/search-blog.svg";
import Image from "next/image";
import BlogPost from "./blog-posts";
import Pagination from "./pagination";
import { useState } from "react";
import useSWR from "swr";
import SearchIcon from "../../public/images/search-icon.svg";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogPage = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  return (
    <section className={styles.blog}>
      <div className={styles.blog__header}>
        <h2 className={styles.blog__h2}>Blog</h2>
        <p className={styles.blog__p}>
          An E-commerce Website with login and payment functionality.
        </p>
      </div>
      <div className={styles.blog__categories}>
        <h3>Categories</h3>
      </div>
      <div className={styles.blog__hr}></div>
      <div className={styles.blog__container}>
        <div className={styles.blog__search}>
          <label for="blog-search" className={styles.label__hidden}>
            Search the blog:
          </label>
          <span>
            <SearchIcon className={styles.blog__searchicon} />
          </span>
          <input
            className={styles.blog__input}
            type="search"
            id="blog-search"
            placeholder="Search..."
          />
        </div>
        <div className={styles.blogposts}>
          {props.posts.map((post) => (
            <BlogPost
              key={post.slug}
              title={post.title}
              image={post.image}
              slug={post.slug}
              date={post.date}
              content={post.content}
              short={post.short}
            />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default BlogPage;
