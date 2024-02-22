import { useTranslation } from "react-i18next";
import "../../styles/css/about.css";

export const AboutQuote = ({ content, index }) => {
  const { t } = useTranslation();
  return (
    <div className={`${index % 2 === 0 && "align-right"}`}>
      <div className={"about-quote-card"}>
        <h2 className="quote ">{t(`${content}-${index}`)}</h2>
      </div>
    </div>
  );
};
