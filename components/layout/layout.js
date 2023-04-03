import MainHeader from "../header/main-header";
import { Lato, Poppins } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const Layout = (props) => {
  return (
    <div className={`${lato.className} ${poppins.className} background`}>
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
