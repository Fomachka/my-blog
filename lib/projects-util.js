import { useEffect, useState } from "react";

const ProjectsUtil = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/projectsdata");
      const data = await response.json();

      if (response.ok) {
        setData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data !== null && data;
};

export default ProjectsUtil;
