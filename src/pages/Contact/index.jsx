import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

export const Contact = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    emailjs
      .send("service_zhpu8is", "template_vd21ue1", values, "cIRPZQpttqS3shP03")
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
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">{t("contact-title")}</h1>
      </div>
      <div className="contact-content">
        <p className="contact-intro">{t("contact-text")}</p>
        <Form
          name="contact"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={t("contact-field-name")}
            name="name"
            rules={[{ required: true, message: t("contact-validate-name") }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("contact-field-email")}
            name="email"
            rules={[{ required: true, type: "email", message: t("contact-validate-email") }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("contact-field-subject")}
            name="subject"
            rules={[{ required: true, message: t("contact-validate-subject") }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("contact-field-message")}
            name="message"
            rules={[{ required: true, message: t("contact-validate-message") }]}
          >
            <TextArea rows={5} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
            <Button type="primary" htmlType="submit" size="large">
              {t("contact-form-submit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
