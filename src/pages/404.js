import React from "react";
import Link from "next/link";
import ArrowIcon from "../../public/images/arrow.svg";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1 className="error__h1">404 Error</h1>
      <p className="error__p">Page you&apos;re looking for doesn&apos;t exist</p>
      <Link href="/blog">
        <div className={styles.article__back}>
          <p>
            <span>
              <ArrowIcon className={styles.article__iconback} />
            </span>
            All posts
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
