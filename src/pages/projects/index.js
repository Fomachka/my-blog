import AllProjects from "../../../components/projects/projects";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Showcasing of Kim Man Khi's personal projects"
        />
      </Head>
      <AllProjects />
    </>
  );
};

export default index;
