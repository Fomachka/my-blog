import "@/styles/globals.css";
import Layout from "../../components/layout/layout";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
