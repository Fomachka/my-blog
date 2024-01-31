import SinglePost from "../../../components/blog/single-post/post-content";
import { getPostsFiles, getPostData } from "../../../lib/blog-util";

const PostPage = (props) => {
  return <SinglePost post={props.post} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.mdx$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
export default PostPage;
