import projectData from "../../data/projects.json";
import { ProjectCard } from "../../components/Card";
import { Badge } from "antd";

export const Projects = () => {
  const show = true;
  const githubUser = "Am0031";

  return (
    <div className="main projects-container">
      <div className="project-cards-title">
        <h1 className="title">My projects</h1>
        <Badge
          count={show ? projectData.length : 0}
          style={{ backgroundColor: "#531dab" }}
        />
      </div>
      <div className="project-cards-container">
        {projectData.map((item) => {
          return <ProjectCard data={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};
