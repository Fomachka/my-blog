import React from "react";
import Link from "next/link";
import ArrowIcon from "../../public/images/arrow.svg";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1 className="error__h1">404 Error</h1>
      <p className="error__p">The page you&apos;re looking for doesn&apos;t exist</p>
      <Link href="/">
        <div className="error__back">
          <p>
            <span>
              <ArrowIcon className="error__iconback" />
            </span>
            Back to home
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
