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
      cover={<img alt={data.name} src={data.img} style={{ height: 170 }} />}
      hoverable={true}
      actions={[
        <a href={data.deployedUrl} target="_blank" rel="noreferrer">
          <GlobalOutlined key="deploy" href={data.deployedUrl} />
        </a>,
        <a href={data.repoUrl} target="_blank" rel="noreferrer">
          <GithubOutlined key="repo" href={data.repoUrl} />
        </a>,
        <a
          href={`mailto:amelie.pira@gmail.com?subject=About your project ${data.name}`}
          target="_blank"
          rel="noreferrer"
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
