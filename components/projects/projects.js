import styles from "./projects.module.css";
import SingleProject from "./project-single.js";

import ProjectsUtil from "../../lib/projects-util";

const AllProjects = () => {
  const data = ProjectsUtil();

  return (
    <section className={styles.allprojects}>
      <div className={styles.allprojects__header}>
        <h2 className={styles.allprojects__h2}>Things that I can build </h2>
        <p className={styles.allprojects__p}>Some of my favourite projects.</p>
      </div>
      <div className={styles.allprojects__projects}>
        {data &&
          data.map((project, index) => (
            <SingleProject id={index} key={index} project={project} />
          ))}
      </div>
      <a
        href="https://github.com/Fomachka?tab=repositories"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.allprojects__btn}
      >
        A repository for more projects
      </a>
    </section>
  );
};

export default AllProjects;
