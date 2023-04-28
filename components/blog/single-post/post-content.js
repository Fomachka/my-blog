import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ArrowIcon from "../../../public/images/arrow.svg";

const PostContent = (props) => {
  const { post } = props;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={200}
              height={100}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    h2(words) {
      return <h2>{words.children}</h2>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      // eslint-disable-next-line react/no-children-prop
      return <SyntaxHighlighter style={atomDark} language={language} children={children} />;
    },
  };

  return (
    <article className={styles.article}>
      <div className={styles.article__back}>
        <p>
          <span>
            <ArrowIcon className={styles.article__iconback} />
          </span>
          All posts
        </p>
      </div>
      <div>
        <PostHeader heading={post.title} image={post.image} slug={post.slug} date={post.date} />
        <ReactMarkdown components={customRenderers} className={styles.reactmarkdown}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default PostContent;
