import {
  GlobalOutlined,
  GithubOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export const ProjectCard = ({ data }) => {
  return (
    <Card
      style={{
        width: 300,
        margin: 10,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <GithubOutlined key="repo" />,
        <GlobalOutlined key="deploy" />,
        <WechatOutlined key="comment" />,
      ]}
    >
      <Meta title={data.name} description="This is the description" />
    </Card>
  );
};
