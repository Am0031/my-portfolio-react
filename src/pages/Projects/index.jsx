import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Skeleton } from "antd";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import { ProjectCard } from "../../components/Card";

const SKELETONS = Array.from({ length: 9 });

export const Projects = () => {
  const { t } = useTranslation();
  const { repos, loading, error } = useGitHubRepos("Am0031");
  const [activeLang, setActiveLang] = useState("All");

  const languages = useMemo(() => {
    const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))].sort();
    return ["All", ...langs];
  }, [repos]);

  const filtered = useMemo(() => {
    const withDesc = repos.filter((r) => r.description && !r.fork);
    return activeLang === "All" ? withDesc : withDesc.filter((r) => r.language === activeLang);
  }, [repos, activeLang]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">{t("projects-title")}</h1>
        {!loading && (
          <span className="projects-count">{filtered.length}</span>
        )}
      </div>

      {!loading && !error && languages.length > 1 && (
        <div className="filter-row">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`filter-chip${activeLang === lang ? " active" : ""}`}
              onClick={() => setActiveLang(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}

      <div className="projects-grid">
        {loading &&
          SKELETONS.map((_, i) => (
            <div key={i} className="project-card-skeleton">
              <Skeleton active paragraph={{ rows: 4 }} />
            </div>
          ))}

        {error && (
          <p className="projects-error">
            Could not load projects from GitHub. Please try again later.
          </p>
        )}

        {!loading &&
          !error &&
          filtered.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};
