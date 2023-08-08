import "@/styles/globals.css";
import Layout from "../../components/layout/layout";
import Transition from "./transition";
import ErrorBoundary from "../../components/error/ErrorBoundary";
import Error from "next/error";
import ErrorJs from "./error";

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary fallback={<ErrorJs />}>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ErrorBoundary>
  );
}
