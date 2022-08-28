import {
  GlobalOutlined,
  GithubOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

export const ProjectCard = ({ data }) => {
  const tags = data.tags.join(" - ");

  return (
    <Card
      style={{
        width: 300,
        height: 360,
        margin: 10,
      }}
      cover={
        <img alt={data.name} src={`/${data.img}.png`} style={{ height: 170 }} />
      }
      hoverable={true}
      actions={[
        <a href={data.deployedUrl} target="_blank">
          <GlobalOutlined key="deploy" href={data.deployedUrl} />
        </a>,
        <a href={data.html_url} target="_blank">
          <GithubOutlined key="repo" href={data.html_url} />
        </a>,
        <a
          href={`mailto:amelie.pira@gmail.com?subject=About your project ${data.name}`}
          target="_blank"
        >
          <WechatOutlined key="comment" href="mailto:amelie.pira@gmail.com" />
        </a>,
      ]}
    >
      <Meta
        title={data.name}
        description={tags}
        style={{ height: 100, padding: 10 }}
      />
    </Card>
  );
};
