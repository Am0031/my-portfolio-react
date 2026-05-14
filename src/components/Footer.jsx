import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  const github = "https://github.com/Am0031";
  const linkedin = "https://www.linkedin.com/in/amelie-pira-b4079855/";

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Amelie Pira</p>
        <p className="footer-subtitle">Full Stack Developer</p>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
            <GithubOutlined />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
            <LinkedinOutlined />
          </a>
          <a href="mailto:amelie.pira@gmail.com" className="footer-link" aria-label="Email">
            <MailOutlined />
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Amelie Pira</p>
      </div>
    </footer>
  );
};
