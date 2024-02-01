import MainHeader from "/components/header/main-header";
import { Inter } from "@next/font/google";
import Footer from "../footer/footer";
import { useRouter } from "next/router";
import ErrorPage from "@/pages/404";
import { useState, useEffect } from "react";
import SquareLoader from "react-spinners/SquareLoader";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Layout = (props) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  const storage = typeof window !== "undefined" ? window.localStorage.theme : "light";

  const override = {
    display: "block",
    margin: "0 auto",
    borderRadius: "3px",
    borderColor: "blue",
  };

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return router.pathname !== "/404" ? (
    <div
      className={`${inter.className} ${
        pageLoading ? "background__loading_theme" : "background-theme"
      }`}
    >
      <MainHeader />
      {pageLoading ? (
        <div className="loading-theme">
          <SquareLoader
            color={storage === "light" ? "#2b2b2b" : "#ffffff"}
            loading={pageLoading}
            cssOverride={override}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <main className="background">{props.children}</main>
      )}
      <Footer />
    </div>
  ) : (
    <div className={`${inter.className} error-theme`}>
      <ErrorPage />
    </div>
  );
};

export default Layout;
