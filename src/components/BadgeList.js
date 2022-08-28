import { useTranslation } from "react-i18next";
import useWindowDimensions from "../utils/windowSize";
import { Avatar } from "antd";
import badgeData from "../data/badges.json";

export const BadgeList = () => {
  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();
  return (
    <div className="skills-container" style={{ width: width }}>
      <h1>{t("skills-title")}</h1>
      <div className="badge-container" style={{ width: width }}>
        {badgeData.frontend.map((item) => {
          return (
            <div className="badge-box" key={item.name}>
              <a href={item.href} alt={item.name} key={item.name}>
                <Avatar
                  className="badge-logo"
                  shape={"square"}
                  size={64}
                  src={item.imgUrl}
                />
              </a>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="badge-container" style={{ width: width }}>
        {badgeData.backend.map((item) => {
          return (
            <div className="badge-box" key={item.name}>
              <a href={item.href} alt={item.name} key={item.name}>
                <Avatar
                  className="badge-logo"
                  shape={"square"}
                  size={64}
                  src={item.imgUrl}
                />
              </a>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
