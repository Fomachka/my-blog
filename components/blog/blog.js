import styles from "./blog.module.css";
import search from "../../public/images/search-blog.svg";
import Image from "next/image";
import BlogPost from "./blog-posts";
import Pagination from "./pagination";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogPage = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  return (
    <section className={styles.blog}>
      <div className={styles.blog__input}>
        <label htmlFor="search" className={styles.label__hidden}>
          Search
        </label>
        <input type="search" id="search" placeholder="Search Blog..." />
        <Image src={search} alt="search sign" />
      </div>
      <h2 className={styles.blog__h2}>ARTICLES</h2>
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
    </section>
  );
};

export default BlogPage;
