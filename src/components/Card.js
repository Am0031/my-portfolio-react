import codeQuiz from "./img/codeQuiz.png";
import dayPlanner from "./img/dayPlanner.png";
import {
  GlobalOutlined,
  GithubOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export const ProjectCard = ({ data }) => {
  const deploy = `https://am0031.github.io/${data.name}/`;
  const image = `http://localhost:3000/public/${data.img}.png`;
  const pic = `http://localhost:3000/static/media/${image}.e3bcd26b755d152be1e5.png`;
  return (
    <Card
      style={{
        width: 300,
        margin: 10,
      }}
      cover={
        <img
          alt={data.name}
          src={`${process.env.PUBLIC_URL}/public/${data.img}.png`}
        />
      }
      hoverable={true}
      actions={[
        <a href={deploy} target="_blank">
          <GlobalOutlined key="deploy" href={deploy} />
        </a>,
        <a href={data.html_url} target="_blank">
          <GithubOutlined key="repo" href={data.html_url} />
        </a>,
        <a href="mailto:amelie.pira@gmail.com" target="_blank">
          <WechatOutlined key="comment" href="mailto:amelie.pira@gmail.com" />
        </a>,
      ]}
    >
      <Meta title={data.name} description={data.description} />
    </Card>
  );
};
