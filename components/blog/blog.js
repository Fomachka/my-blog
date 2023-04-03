import styles from "./blog.module.css";
import search from "../../public/images/search-blog.svg";
import Image from "next/image";
import BlogPost from "./blog-post";
import Pagination from "./pagination";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogPage = ({ name }) => {
  console.log(name);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  let blogPosts = [];

  // fetching blogs from our api/staticdata
  const { data, error } = useSWR("/api/staticdata", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data) {
    blogPosts = JSON.parse(data);
  }

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
        {data && blogPosts.posts.map((post) => <BlogPost key={post.id} />)}
      </div>
      <Pagination />
    </section>
  );
};

export default BlogPage;
