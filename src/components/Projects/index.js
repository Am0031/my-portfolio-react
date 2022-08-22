import { useEffect, useState } from "react";
import { ProjectCard } from "./Card";
import { Badge } from "antd";

export const Projects = () => {
  const [githubData, setGithubData] = useState([]);
  const show = true;
  const githubUser = "Am0031";

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main projects-container">
      <div className="project-cards-title">
        <h1 className="title">My projects</h1>
        <Badge
          count={show ? githubData.length : 0}
          style={{ backgroundColor: "#531dab" }}
        />
      </div>
      <div className="project-cards-container">
        {githubData.map((item) => {
          return <ProjectCard data={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};
