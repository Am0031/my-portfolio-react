import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input;

export const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1 className="title">Contact me</h1>
      <div className="form-control">
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input a subject!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your message here!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="email"
            valuePropName="checked"
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Checkbox>Email me a copy</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 24,
            }}
          >
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
