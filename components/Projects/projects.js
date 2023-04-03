import styles from "./projects.module.css";
import SingleProject from "./project-single";

const AllProjects = () => {
  return (
    <section className={styles.allprojects}>
      <h2>MY PROJECTS </h2>
      <hr />
      <SingleProject />
      <SingleProject />
      <SingleProject />
    </section>
  );
};

export default AllProjects;
