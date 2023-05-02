import styles from "./blog.module.css";
import Image from "next/image";
import SearchIcon from "../../public/images/search-icon.svg";
import BlogPost from "./blog-posts";
import Pagination from "./pagination";
import { useState, useEffect } from "react";

const BlogPage = (props) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredByCategories, setFilteredByCategories] = useState(null);
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUniqueCategories = (posts) => {
    const allCategories = [];

    posts.forEach((post) => {
      post.categories.forEach((category) => allCategories.push(category));
    });

    let uniqueCategories = allCategories.filter((category, index) => {
      return allCategories.indexOf(category) === index;
    });

    setCategories(["All", ...uniqueCategories]);
  };

  const filterCategories = (category) => {
    const filteredCategories = [];

    if (category === "All") {
      setFilteredByCategories(null);
      return;
    }

    props.posts.forEach((post) => {
      if (post.categories.includes(category)) {
        filteredCategories.push(post);
      }
    });

    setFilteredByCategories(filteredCategories);
  };

  useEffect(() => {
    handleUniqueCategories(props.posts);
  }, [props]);

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
        <div className={styles.blog__allcategories}>
          {categories &&
            categories.map((category, index) => (
              <button
                onClick={() => filterCategories(category)}
                className={styles.blog__category}
                key={index}
              >
                {category}
              </button>
            ))}
        </div>
      </div>
      <div className={styles.blog__hr}></div>
      <div className={styles.blog__container}>
        <div className={styles.blog__search}>
          <label htmlFor="blog-search" className={styles.label__hidden}>
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.blogposts}>
          {filteredByCategories
            ? filteredByCategories
                .filter((post) => {
                  return search.toLowerCase() === ""
                    ? post
                    : post.title.toLowerCase().includes(search);
                })
                .map((post) => (
                  <BlogPost
                    key={post.slug}
                    title={post.title}
                    image={post.image}
                    slug={post.slug}
                    date={post.date}
                    content={post.content}
                    short={post.short}
                    categories={post.categories}
                  />
                ))
            : currentPosts
                .filter((post) => {
                  return search.toLowerCase() === ""
                    ? post
                    : post.title.toLowerCase().includes(search);
                })
                .map((post) => (
                  <BlogPost
                    key={post.slug}
                    title={post.title}
                    image={post.image}
                    slug={post.slug}
                    date={post.date}
                    content={post.content}
                    short={post.short}
                    categories={post.categories}
                  />
                ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={handlePagination}
          currentPage={currentPage}
          numOfCurrentPosts={
            currentPosts.filter((post) => {
              return search.toLowerCase() === "" ? post : post.title.toLowerCase().includes(search);
            }).length
          }
        />
      </div>
    </section>
  );
};

export default BlogPage;
