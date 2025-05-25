import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider, useTheme } from "../../components/contexts/ThemeContext";
import Layout from "../../components/layout/layout";
import Transition from "./transition";

function AppContent({ Component, pageProps }) {
  const { themeMode } = useTheme();

  const lightStatusBarColor = "#fbfcff";
  const darkStatusBarColor = "#0a0a0a";

  return (
    <>
      <Head>
        <title>KIM MAN KHI</title>
        <meta name="description" content="KIM MAN KHI's personal website and blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content={themeMode === "light" ? lightStatusBarColor : darkStatusBarColor}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </>
  );
}

export default function App(props) {
  return (
    <ThemeProvider>
      <AppContent {...props} />
    </ThemeProvider>
  );
}
