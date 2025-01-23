import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import "./contact.scss";
import { axiosInstance } from "@/api/api";

function Contact() {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onFinish = async (data) => {
    setLoading(true);
    try {
      await axiosInstance.post("/form", data);
      message.success("Müraciət uğurla göndərildi");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form Failed:", errorInfo);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">{t("contact")}</h2>
        <div className="contact-form">
          <Form
            name="contactForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="form-row">
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: t("Please enter your name.") },
                ]}
              >
                <Input placeholder={t("name-surname")} />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: t("Please enter your email.") },
                  { type: "email", message: t("Please enter a valid email.") },
                ]}
              >
                <Input placeholder={t("email")} />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: t("Please enter your phone number."),
                  },
                ]}
              >
                <Input placeholder={t("phone")} />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[
                  { required: true, message: t("Please enter a subject.") },
                ]}
              >
                <Input placeholder={t("subject")} />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="message"
                rules={[
                  { required: true, message: t("Please enter your message.") },
                ]}
              >
                <Input.TextArea placeholder={t("text")} rows={4} />
              </Form.Item>
            </div>

            <div className="form-footer">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="submit-btn"
                >
                  {t("send")}
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
