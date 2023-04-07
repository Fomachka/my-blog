import MainHeader from "../header/main-header";
import { Lato, Poppins, Inter } from "@next/font/google";

// const lato = Lato({
//   weight: ["300", "400", "700"],
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   weight: ["300", "400", "700"],
//   subsets: ["latin"],
// });

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Layout = (props) => {
  return (
    <div className={`${inter.className} background`}>
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
