import Head from "next/head";
import About from "../../../components/about/about";

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Information about Kim Man Khi's life and personal" />
      </Head>
      <About />
    </>
  );
};

export default AboutMe;
