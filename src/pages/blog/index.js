import BlogPage from "../../../components/blog/blog";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Personal Blog</title>
        <meta name="description" content="Blog posts related to coding" />
      </Head>
      <BlogPage />
    </>
  );
};

export default Blog;
