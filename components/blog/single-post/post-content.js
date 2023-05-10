import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ArrowIcon from "../../../public/images/arrow.svg";
import Link from "next/link";

const PostContent = (props) => {
  const { post } = props;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const altString = image.properties.alt;
        const hasCaption = altString?.toLowerCase().includes("{caption:");
        const caption = altString?.match(/{caption: (.*?)}/)?.pop();
        console.log(paragraph.src);

        return (
          <figure className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={400}
              height={300}
              priority
            />
            {hasCaption && (
              <figcaption className={styles.image__caption} aria-label={caption}>
                {caption}
              </figcaption>
            )}
          </figure>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    h2(words) {
      return <h2>{words.children}</h2>;
    },
    h3(words) {
      return <h3>{words.children}</h3>;
    },
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, "")}
          style={atomDark} // theme
          language={match[1]}
          PreTag="section" // parent tag
          {...props}
        ></SyntaxHighlighter>
      ) : (
        <code className={styles.blog__code} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={styles.article}>
      <Link href="/blog">
        <div className={styles.article__back}>
          <p>
            <span>
              <ArrowIcon className={styles.article__iconback} />
            </span>
            All posts
          </p>
        </div>
      </Link>
      <div className={styles.article__content}>
        <PostHeader heading={post.title} image={post.image} slug={post.slug} date={post.date} />
        <ReactMarkdown components={customRenderers} className={styles.reactmarkdown}>
          {post.content}
        </ReactMarkdown>
        <Link href="/blog">
          <div className={`${styles.article__back} ${styles.article__back_bottom}`}>
            <p>
              <span>
                <ArrowIcon className={styles.article__iconback} />
              </span>
              All posts
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default PostContent;
