import Error from "next/error.js";
import ProjectDetails from "../../../components/projects/project-details/project-details.js";
import { useEffect } from "react";

const SingleProjectDetails = (props) => {
  return <ProjectDetails props={props.projectData[0]} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  try {
    const response = await fetch("http://localhost:3000/api/projectsdata");
    const data = await response.json();
    const projectData = data.filter((project) => project.name === id);
    if (projectData) {
      return {
        props: {
          projectData: projectData,
        },
        revalidate: 600,
      };
    } else {
      return { notFound: true };
    }
  } catch (error) {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  try {
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
  } catch (error) {
    return { notFound: true };
  }
}

export default SingleProjectDetails;
