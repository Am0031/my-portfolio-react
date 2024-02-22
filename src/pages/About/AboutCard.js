import { useTranslation } from "react-i18next";
import "../../styles/css/about.css";

export const AboutCard = ({ content, index }) => {
  const { t } = useTranslation();
  return (
    <div className={`${index % 2 !== 0 && "align-right"}`}>
      <div className={"about-text-card"}>
        <h3>{t(`${content}-${index}`)}</h3>
      </div>
    </div>
  );
};
