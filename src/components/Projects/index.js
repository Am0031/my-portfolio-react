import { useEffect, useState } from "react";
import { ProjectCard } from "./Card";

export const Projects = ({ title }) => {
  const [githubData, setGithubData] = useState([]);
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
    <div>
      <h1>{title}</h1>
      {githubData.map((item) => {
        return <ProjectCard data={item} key={item.name} />;
      })}
    </div>
  );
};
