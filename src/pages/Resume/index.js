import { Button } from "antd";
import useWindowDimensions from "../../utils/windowSize";
import { useTranslation } from "react-i18next";
import { BadgeList } from "../../components/BadgeList";
import resume from "./resume.png";

export const Resume = () => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  return (
    <div className="resume-container main">
      <BadgeList />

      <div>
        <h1 className="title resume-title">{t("resume-title")}</h1>
        <div className="resume-control">
          <Button
            style={{ backgroundColor: "#531dab", color: "#fff", margin: 10 }}
          >
            <a href={`./resume.pdf`} target="_blank" rel="noreferrer">
              {t("download-resume")}
            </a>
          </Button>
        </div>
        <div className="resume-box">
          <img
            className="resume-img"
            alt="resume"
            src={resume}
            style={{ width: width, margin: 10 }}
          />
        </div>
      </div>
    </div>
  );
};
