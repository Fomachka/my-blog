import styles from "./project-single.module.css";
import Link from "next/link";
import Image from "next/image";
import LinkIcon from "../../public/images/link.svg";

const SingleProject = ({ project }) => {
  const { image, name: websiteName, short } = project;
  return (
    <article className={styles.project}>
      <Link href={`projects/${websiteName}`}>
        <div className={styles.project__container}>
          <div className={styles.project__info}>
            <div className={styles.project__header}>
              <h3 className={styles.project__h3}>{websiteName}</h3>
              <p className={styles.project__p}>{short}</p>
            </div>
            <div className={styles.project__link}>
              <LinkIcon className={styles.project__icon} />
            </div>
          </div>
          <Image
            src={image}
            alt="project website"
            priority={true}
            width={400}
            height={400}
            className={styles.project__img}
          />
        </div>
      </Link>
    </article>
  );
};

export default SingleProject;
