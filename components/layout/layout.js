import MainHeader from "../Header/main-header";
import { Lato, Noto_Serif } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const noto = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Layout = (props) => {
  return (
    <div className={`${lato.className} ${noto.className} background`}>
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
