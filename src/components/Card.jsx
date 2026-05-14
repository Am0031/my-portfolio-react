import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { getLangStyle, formatRepoName } from "../utils/langColors";

export const ProjectCard = ({ repo }) => {
  const lang = getLangStyle(repo.language);
  const textColor = lang.textDark ? "#1a1a1a" : "#ffffff";
  const symbolBg = lang.textDark ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.2)";

  const updatedLabel = new Date(repo.updated_at).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="project-card">
      <div
        className="project-card-header"
        style={{
          background: `linear-gradient(135deg, ${lang.from} 0%, ${lang.to} 100%)`,
        }}
      >
        <span
          className="project-lang-symbol"
          style={{ color: textColor, background: symbolBg }}
        >
          {lang.symbol}
        </span>
        <span className="project-lang-name" style={{ color: textColor }}>
          {repo.language ?? "Code"}
        </span>
        {repo.stargazers_count > 0 && (
          <span className="project-stars" style={{ color: textColor }}>
            ★ {repo.stargazers_count}
          </span>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{formatRepoName(repo.name)}</h3>
        <p className="project-card-desc">
          {repo.description ?? "No description provided."}
        </p>

        {repo.topics?.length > 0 && (
          <div className="project-tags">
            {repo.topics.slice(0, 5).map((topic) => (
              <span key={topic} className="project-tag">
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          <span className="project-updated">Updated {updatedLabel}</span>
          <div className="project-action-links">
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                className="project-action-link live"
                aria-label="Live demo"
              >
                <GlobalOutlined /> Live
              </a>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="project-action-link repo"
              aria-label="GitHub repository"
            >
              <GithubOutlined /> Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
