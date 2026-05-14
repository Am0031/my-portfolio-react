import { useTranslation } from "react-i18next";
import { BadgeList } from "../../components/BadgeList";

const CV_URL =
  "https://docs.google.com/document/d/1VYCGbak5LEPoV-ck_JQ5PGr-YMdi7keT/edit";

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <BadgeList />

      <div className="skills-section">
        <a
          href={CV_URL}
          target="_blank"
          rel="noreferrer"
          className="download-btn"
        >
          {t("view-cv")}
        </a>
      </div>
    </div>
  );
};
