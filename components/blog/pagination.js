import styles from "./pagination.module.css";
import { useEffect } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, numOfCurrentPosts }) => {
  const pageNumbers = [];

  if (numOfCurrentPosts < postsPerPage && currentPage === 1) {
    for (let i = 1; i <= Math.ceil(numOfCurrentPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  } else if (numOfCurrentPosts >= postsPerPage || currentPage > 1) {
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav className={styles.pagination}>
      {numOfCurrentPosts > 0 ? (
        <ul className={styles.pagination__ul}>
          {pageNumbers?.map((number) => (
            <li key={number} className={styles.pagination__li}>
              <button
                onClick={() => paginate(number)}
                className={`${styles.pagination__btn} ${
                  currentPage === number && styles.pagination__btn_active
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.pagination__error}>No Posts Found</p>
      )}
    </nav>
  );
};

export default Pagination;
