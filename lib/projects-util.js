import { useEffect, useState } from "react";
import projectData from "@/pages/api/projectsdata";

const ProjectsUtil = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const data = projectData;

      if (data) {
        setData(data);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data !== null && data;
};

export default ProjectsUtil;
