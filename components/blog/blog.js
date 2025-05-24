import styles from "./blog.module.css";
import SearchIcon from "../../public/images/search-icon.svg";
import BlogPost from "./blog-posts";
import Pagination from "./pagination";
import { useState, useEffect } from "react";

const BlogPage = (props) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState(null);
  const [activeCategory, setActiveCategory] = useState("0");
  const [posts, setPosts] = useState(props.posts);
  const [postsLength, setPostsLength] = useState(props.posts.length);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setCurrentPage(1);

    setSearch(searchTerm);

    if (searchTerm === "") {
      setPosts(props.posts);
      setPostsLength(props.posts.length);
    } else {
      let filtered = props.posts.filter((post) => {
        return post.title.toLowerCase().includes(searchTerm);
      });
      setPosts(filtered);
      setPostsLength(filtered.length);
    }
  };

  const handleUniqueCategories = (posts) => {
    const allCategories = [];

    posts.forEach((post) => {
      if (post.categories)
        post.categories.map((category) => allCategories.push(category));
    });

    let uniqueCategories = allCategories.filter((category, index) => {
      return allCategories.indexOf(category) === index;
    });

    setCategories(["All", ...uniqueCategories]);
  };

  const filterCategories = (category, event) => {
    const filteredCategories = [];

    setActiveCategory(event.target.id);
    setCurrentPage(1);

    if (category === "All") {
      setPostsLength(props.posts.length);
      setPosts(props.posts);
      return;
    }

    props.posts?.forEach((post) => {
      if (post.categories) {
        if (post.categories.includes(category)) {
          filteredCategories.push(post);
        }
      }
    });
    setPostsLength(filteredCategories.length);
    setPosts(filteredCategories);
  };

  useEffect(() => {
    handleUniqueCategories(props.posts);
  }, [props.posts]);

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
                id={index}
                onClick={(e) => filterCategories(category, e)}
                className={`${styles.blog__category} ${
                  activeCategory === index.toString() ? styles.blog__btn_active : ""
                }`}
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
            onChange={(e) => handleSearch(e)}
            value={search}
          />
        </div>
        <div className={styles.blogposts}>
          {currentPosts
            .filter((post) => {
              return search === "" ? post : post.title.toLowerCase().includes(search);
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
          totalPosts={postsLength}
          paginate={handlePagination}
          currentPage={currentPage}
          numOfCurrentPosts={
            currentPosts.filter((post) => {
              return search === "" ? post : post.title.toLowerCase().includes(search);
            }).length
          }
        />
      </div>
    </section>
  );
};

export default BlogPage;
