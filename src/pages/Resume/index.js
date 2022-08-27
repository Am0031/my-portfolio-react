import { Button } from "antd";

export const Resume = () => {
  const onClickCv = () => {
    console.log("Success - cv downloaded"); //need to work out how to download pdf file
  };

  return (
    <div className="resume-container main">
      <h1 className="title resume-title">My CV</h1>
      <div className="resume-control">
        <Button
          style={{ backgroundColor: "#531dab", color: "#fff" }}
          htmlType="click"
          onClick={onClickCv}
        >
          Download File
        </Button>
      </div>
      <div>
        <img alt="resume" src={`/resume.png`} />
      </div>
    </div>
  );
};
