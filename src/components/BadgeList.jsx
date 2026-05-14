import { useState } from "react";
import { useTranslation } from "react-i18next";
import { skills } from "../data/skills";

const SkillIcon = ({ name, icon }) => {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/[\s/]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="skill-icon-item">
      <div className="skill-icon-wrapper">
        {failed ? (
          <span className="skill-icon-fallback">{initials}</span>
        ) : (
          <img
            src={icon}
            alt={name}
            className="skill-icon-img"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span className="skill-icon-name">{name}</span>
    </div>
  );
};

export const BadgeList = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-section">
      <h2 className="section-heading">{t("skills-title")}</h2>
      {skills.map(({ category, items }) => (
        <div key={category} className="skills-category">
          <h3 className="skills-category-title">{category}</h3>
          <div className="skills-icon-grid">
            {items.map((skill) => (
              <SkillIcon key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
