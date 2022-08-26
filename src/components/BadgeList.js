import { Avatar, Image } from "antd";
import badgeData from "../data/badges.json";

export const BadgeList = () => {
  return (
    <div className="badge-container">
      {badgeData.map((item) => {
        return (
          <a className="badge-box" href={item.href} alt={item.name}>
            <Avatar
              className="badge-logo"
              shape={"square"}
              size={64}
              src={item.imgUrl}
            />
          </a>
        );
      })}
    </div>
  );
};
