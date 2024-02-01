import ProjectDetails from "../../../components/header/main-header";
import data from "../api/projectsdata.js";

const SingleProjectDetails = (props) => {
  return <ProjectDetails props={props.projectData[0]} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  const projectData = data.filter((project) => project.name === id);

  return {
    props: {
      projectData: projectData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  return {
    paths: data.map((project) => ({
      params: {
        id: project.name,
      },
    })),
    fallback: false,
  };
}

export default SingleProjectDetails;
