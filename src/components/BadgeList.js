import { useTranslation } from "react-i18next";
import { Avatar } from "antd";
import badgeData from "../data/badges.json";

export const BadgeList = () => {
  const { t } = useTranslation();
  return (
    <div className="skills-container">
      <h1>{t("skills-title")}</h1>
      <div className="badge-container">
        {badgeData.map((item) => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
