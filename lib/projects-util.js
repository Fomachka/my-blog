import { useEffect, useState } from "react";

const ProjectsUtil = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/projectsdata");
      const data = await response.json();

      if (response.ok) {
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
