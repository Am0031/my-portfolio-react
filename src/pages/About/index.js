import { useTranslation } from "react-i18next";
import "../../styles/css/about.css";
import profileImage from "./profileImage.png";

import { Image, Typography } from "antd";
import { AboutCard } from "./AboutCard";
import { AboutQuote } from "./AboutQuote";
const { Title } = Typography;

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="about main">
        <div className="about-content">
          <div className="about-me-container">
            <div className="about-title">
              <Title className="title about-text">{t("about-title")}</Title>
            </div>
            <div className="about-image-container stackable">
              <Image className="about-image" width={250} src={profileImage} />
              <h2 className="about-hi">{t("about-hi")}</h2>
            </div>
            <div className="about-text-container">
              <AboutCard content={"about-text"} index={1} />
              <AboutCard content={"about-text"} index={2} />
              <AboutCard content={"about-text"} index={3} />
              <AboutCard content={"about-text"} index={4} />
            </div>
            <div className="about-quote-container">
              <AboutQuote content={"about-quote"} index={1} />
              <AboutQuote content={"about-quote"} index={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
