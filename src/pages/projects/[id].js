import ProjectDetails from "../../../components/projects/project-details/project-details.js";

const SingleProjectDetails = (props) => {
  return <ProjectDetails props={props.projectData[0]} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  const response = await fetch("http://localhost:3000/api/projectsdata");
  const data = await response.json();
  const projectData = data.filter((project) => project.name === id);

  return {
    props: {
      projectData: projectData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/projectsdata");
  const data = await response.json();

  return {
    paths: data.map((project) => ({
      params: {
        id: project.name,
      },
    })),
    fallback: true,
  };
}

export default SingleProjectDetails;
