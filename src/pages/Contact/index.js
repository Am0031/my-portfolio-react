import { send } from "emailjs-com";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input;

export const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    send("service_zhpu8is", "template_vd21ue1", values, "cIRPZQpttqS3shP03")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contact-container main">
      <h1 className="title contact-title">Contact me</h1>
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
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
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
                message: "Please add a subject!",
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
                message: "Please type a message!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 24,
            }}
          >
            <Button
              style={{ backgroundColor: "#531dab", color: "#fff" }}
              htmlType="submit"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
