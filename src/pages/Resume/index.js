import { Button } from "antd";

export const Resume = () => {
  return (
    <div className="resume-container main">
      <h1 className="title resume-title">My CV</h1>
      <div className="resume-control">
        <Button
          style={{ backgroundColor: "#531dab", color: "#fff", margin: 10 }}
        >
          <a href={`/resume.pdf`} target="_blank" rel="noreferrer">
            Download Pdf
          </a>
        </Button>
      </div>
      <div>
        <img alt="resume" src={`/resume.png`} style={{ margin: 10 }} />
      </div>
    </div>
  );
};
