import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import profileImage from "./profileImage.png";
import "../../styles/css/about.css";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import { ProjectCard } from "../../components/Card";

const SKILLS = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "GraphQL",
  "MySQL",
  "MongoDB",
  "HTML5",
  "CSS3",
  "REST APIs",
];

const FEATURED_NAMES = [
  "umbraco-community-app",
  "javascript-algorithms",
  "we-care-server",
];

export const About = () => {
  const { t } = useTranslation();
  const { repos, loading } = useGitHubRepos("Am0031");

  const featuredRepos = FEATURED_NAMES.map((name) =>
    repos.find((r) => r.name === name),
  ).filter(Boolean);

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting anim-fade-up">{t("hero-greeting")}</p>
            <h1 className="hero-name anim-fade-up anim-delay-1">Amelie Pira</h1>
            <h2 className="hero-role anim-fade-up anim-delay-2">
              {t("hero-role")}
            </h2>
            <p className="hero-tagline anim-fade-up anim-delay-3">
              {t("hero-tagline")}
            </p>
            <div className="hero-ctas anim-fade-up anim-delay-4">
              <Link to="/projects" className="hero-btn hero-btn-solid">
                {t("hero-cta-projects")}
              </Link>
              <Link to="/contact" className="hero-btn hero-btn-outline">
                {t("hero-cta-contact")}
              </Link>
            </div>
          </div>
          <div className="hero-photo anim-fade-up anim-delay-2">
            <div className="hero-photo-ring">
              <img src={profileImage} alt="Amelie Pira" />
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <h2 className="section-heading">{t("journey-title")}</h2>
        <div className="journey-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="journey-card">
              <span className="journey-period">{t(`journey-${i}-period`)}</span>
              <h3 className="journey-role">{t(`journey-${i}-role`)}</h3>
              <p className="journey-desc">{t(`journey-${i}-desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-skills-section">
        <h2 className="section-heading">{t("skills-section-title")}</h2>
        <div className="skills-chips">
          {SKILLS.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-heading">{t("featured-title")}</h2>
        <div className="featured-grid">
          {loading
            ? FEATURED_NAMES.map((name) => (
                <div key={name} className="project-card-skeleton">
                  <Skeleton active paragraph={{ rows: 4 }} />
                </div>
              ))
            : featuredRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
        </div>
        <div className="featured-cta">
          <Link to="/projects" className="download-btn">
            {t("hero-cta-projects")}
          </Link>
        </div>
      </section>

      <section className="about-quote-section">
        <blockquote>
          <p>{t("about-quote-2")}</p>
        </blockquote>
      </section>
    </div>
  );
};
