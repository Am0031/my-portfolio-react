import { useTranslation } from "react-i18next";
import projectData from "../../data/projects.json";
import { ProjectCard } from "../../components/Card";
import { Badge } from "antd";

export const Projects = () => {
  const { t } = useTranslation();
  const show = true;
  const githubUser = "Am0031";

  return (
    <div className="main projects-container">
      <div className="project-cards-title">
        <h1 className="title">{t("projects-title")}</h1>
        <Badge
          count={show ? projectData.projects.length : 0}
          style={{ backgroundColor: "#531dab" }}
        />
      </div>
      <div className="project-cards-container">
        {projectData.projects.map((item) => {
          return <ProjectCard data={item} key={item.name} />;
        })}
      </div>
    </div>
  );
};
