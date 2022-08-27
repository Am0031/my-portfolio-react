import { useTranslation } from "react-i18next";
import aboutImage from "./aboutImage.png";
import badgeData from "../../data/badges.json";
import { BadgeList } from "../../components/BadgeList";
import { Image, Typography } from "antd";
const { Title } = Typography;

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="about main">
        <div className="about-title">
          <Title className="title about-text">{t("about-title")}</Title>
        </div>
        <div className="about-content stackable">
          <div className="about-me-container">
            <div className="about-image-container stackable">
              <Image className="about-image" width={250} src={aboutImage} />
              <h2 className="about-hi">{t("about-hi")}</h2>
            </div>
            <div className="about-text-container">
              <h3 className="about-text">{t("about-text-1")}</h3>
              <h3 className="about-text">{t("about-text-2")}</h3>
              <h3 className="about-text">{t("about-text-3")}</h3>
              <h3 className="about-text">{t("about-text-4")}</h3>
            </div>
            <div className="quote-1-container">
              <h2 className="quote about-quote">{t("about-quote-1")}</h2>
            </div>
            <div className="quote-2-container">
              <h2 className="quote about-quote">{t("about-quote-2")}</h2>
            </div>
          </div>

          <BadgeList />
        </div>
      </div>
    </div>
  );
};
