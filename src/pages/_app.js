import "@/styles/globals.css";
import Layout from "../../components/layout/layout";
import Transition from "./transition";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </Layout>
  );
}
