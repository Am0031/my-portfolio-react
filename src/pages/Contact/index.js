import { send } from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

export const Contact = () => {
  const { t } = useTranslation();

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
      <h1 className="title contact-title">{t("contact-title")}</h1>
      <h2 className="contact-text">{t("contact-text")}</h2>
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
            label={t("contact-field-name")}
            name="name"
            rules={[
              {
                required: true,
                message: `${t("contact-validate-name")}`,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("contact-field-email")}
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: `${t("contact-validate-email")}`,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("contact-field-subject")}
            name="subject"
            rules={[
              {
                required: true,
                message: `${t("contact-validate-subject")}`,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("contact-field-message")}
            name="message"
            rules={[
              {
                required: true,
                message: `${t("contact-validate-message")}`,
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
              {t("contact-form-submit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
