import { Button } from "antd";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t } = useTranslation();
  return (
    <div className="resume-container main">
      <h1 className="title resume-title">{t("resume-title")}</h1>
      <div className="resume-control">
        <Button
          style={{ backgroundColor: "#531dab", color: "#fff", margin: 10 }}
        >
          <a href={`/resume.pdf`} target="_blank" rel="noreferrer">
            {t("download-resume")}
          </a>
        </Button>
      </div>
      <div className="resume-box">
        <img
          className="resume-img"
          alt="resume"
          src={`/resume.png`}
          style={{ margin: 10 }}
        />
      </div>
    </div>
  );
};
