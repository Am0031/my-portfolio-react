import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  const github = `https://github.com/Am0031`;
  const linkedin = `https://www.linkedin.com/in/amelie-pira-b4079855/`;

  return (
    <div className="footer-container">
      <div className="footerLink">
        <a href={github} target="_blank" rel="noreferrer">
          <GithubOutlined key="github" href={github} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <LinkedinOutlined key="linkedin" href={linkedin} />
        </a>
        <a href="mailto:amelie.pira@gmail.com" target="_blank" rel="noreferrer">
          <MailOutlined key="mail" href="mailto:amelie.pira@gmail.com" />
        </a>
      </div>
      <div className="footerText"></div>
    </div>
  );
};
