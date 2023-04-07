import BlogPage from "../../../components/blog/blog";
import Head from "next/head";
import { getAllPosts } from "../../../lib/blog-util";

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Personal Blog</title>
        <meta name="description" content="Blog posts related to coding" />
      </Head>
      <BlogPage posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Blog;
