import MainHeader from "../header/main-header";
import { Inter } from "@next/font/google";
import Footer from "../footer/footer";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Layout = (props) => {
  return (
    <div className={`${inter.className} background-theme`}>
      <MainHeader />
      <main className="background">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
