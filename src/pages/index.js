import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import HomePage from "../../components/home-page/home-page";
import Footer from "../../components/footer/footer";
import { getFeaturedPosts } from "../../lib/blog-util";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>KIM MAN KHI</title>
        <meta name="description" content="KIM MAN KHI's personal website and blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage featuredPosts={props.featured} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featured: featuredPosts,
    },
  };
}
