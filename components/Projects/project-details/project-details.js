import Link from "next/link";
import ArrowIcon from "../../../public/images/arrow.svg";
import styles from "./project-details.module.css";
import Image from "next/image";

const ProjectDetails = ({ props }) => {
  const { name, imageLarge, short, link, colors, tools, description, git } = props;
  return (
    <section className={styles.project}>
      <div className={styles.project__back_container}>
        <Link href="/projects">
          <div className={styles.project__back}>
            <p>
              <span>
                <ArrowIcon className={styles.project__iconback} />
              </span>
              All projects
            </p>
          </div>
        </Link>
      </div>
      <div className={styles.project__img}>
        <Image
          src={imageLarge}
          quality={100}
          alt={short}
          width={1521}
          height={912}
          priority={true}
          unoptimized={true}
        />
      </div>
      <div className={styles.project__hr}></div>
      <div className={styles.project__info}>
        <div className={styles.project__info_container}>
          <h2 className={styles.project__h2}>{name}</h2>
          <p className={styles.project__p}>
            An E-commerce Website with login and payment functionality
          </p>
          <div className={styles.project__tools}>
            <div className={styles.project__tools_row}>
              <p>Library / Framework</p>
              <p>{tools[0]}</p>
            </div>
            <div className={styles.project__tools_row}>
              <p>Language</p>
              <p>{tools[1]}</p>
            </div>
            <div className={styles.project__tools_row}>
              <p>Styling</p>
              <p>{tools[2]}</p>
            </div>
            <div className={styles.project__tools_row}>
              <p>Additional tools</p>
              <p>{tools[3]}</p>
            </div>
          </div>
        </div>
        <div className={styles.project__buttons}>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.project__btn1}
          >
            See Live
          </a>
          <a
            href={git}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.project__btn2}
          >
            View Repo
          </a>
        </div>
      </div>
      <div className={styles.project__description}>
        <h3 className={styles.project__description_h3}>Tools used to create a web</h3>
        <p>{description}</p>
        <div className={styles.project__accent}>
          <h4>Accent colors</h4>
          <div className={styles.project__colors_container}>
            <div className={styles.project__colors}>
              <div
                style={{ background: colors[0] }}
                className={styles.project__color}
              ></div>
              <p>{colors[0]}</p>
            </div>
            <div className={styles.project__colors}>
              <div
                style={{ background: colors[1] }}
                className={styles.project__color}
              ></div>
              <p>{colors[1]}</p>
            </div>
            <div className={styles.project__colors}>
              <div
                style={{ background: colors[2] }}
                className={styles.project__color}
              ></div>
              <p>{colors[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
