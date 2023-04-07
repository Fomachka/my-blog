import styles from "./project-single.module.css";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/images/profile-blog.png";

const SingleProject = () => {
  const id = 1;
  return (
    <article className={styles.project}>
      <p className={styles.number}>01</p>
      {/* <hr /> */}
      <div className={styles.info}>
        <div className={styles.header__name}>
          <h3>
            <span>01</span> Name of a Project
          </h3>
        </div>
        <p className={styles.paragraph}>
          I currently work at Bitrefill, mainly focusing on search & discovery. I also lead design &
          development of the design.
        </p>
        <Link href={`/projects/${id}`}>
          <p className={`${styles.paragraph} ${styles.paragraph__more}`}>Read More</p>
        </Link>
        <div className={styles.profile__imgdiv}>
          <Image src={profilePic} alt="kim posing on the pier" className={styles.profile__img} />
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
