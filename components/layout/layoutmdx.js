import MainHeader from "../header/main-header";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const LayoutMDX = (props) => {
  return (
    <div className={`${inter.className} background`}>
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default LayoutMDX;
