import ProjectDetails from "../../../components/projects/project-details/project-details.js";
import { getAllProjects, getProjectByName } from "../../../components/projects/projects-data.js";

const SingleProjectDetails = (props) => {
  return <ProjectDetails props={props.projectData[0]} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  const projectData = getProjectByName(id);

  return {
    props: {
      projectData: projectData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const projectsData = getAllProjects();

  return {
    paths: projectsData.map((project) => ({
      params: {
        id: project.name,
      },
    })),
    fallback: true,
  };
}

export default SingleProjectDetails;
