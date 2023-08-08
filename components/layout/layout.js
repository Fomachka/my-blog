import MainHeader from "../header/main-header";
import { Inter } from "@next/font/google";
import Footer from "../footer/footer";
import { useRouter } from "next/router";
import ErrorPage from "@/pages/404";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Layout = (props) => {
  const router = useRouter();

  if (router.pathname === "/404") console.log("hey)");

  return router.pathname !== "/404" ? (
    <div className={`${inter.className} background-theme`}>
      <MainHeader />
      <main className="background">{props.children}</main>
      <Footer />
    </div>
  ) : (
    <div className={`${inter.className} error-theme`}>
      <ErrorPage />
    </div>
  );
};

export default Layout;
