import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useTranslation } from "react-i18next";
import "./contact.scss";
import { axiosInstance } from "@/api/api";
import Swal from "sweetalert2";
import contact from "@/locale/contact.json";
import { useSelector } from "react-redux";

function Contact() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const lang = useSelector((store) => store.common.lang);

  const onFinish = async (data) => {
    setLoading(true);
    try {
      await axiosInstance.post("/contact-form", data);
      message.success("Müraciət uğurla göndərildi");
      form.resetFields();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Xəta!",
        html: Object.entries(error.data?.errors || {})
          .map(([key, value]) => value[0])
          .join(""),
        icon: "error",
        confirmButtonText: "Bağla",
      });
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
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="form-row">
              <Form.Item
                name="full_name"
                rules={[
                  { required: true, message: contact[lang].name_required },
                ]}
              >
                <Input placeholder={t("name-surname")} />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: contact[lang].email_required },
                  { type: "email", message: contact[lang].email_invalid },
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
                    message: contact[lang].phone_required,
                  },
                ]}
              >
                <Input placeholder={t("phone")} />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[
                  { required: true, message: contact[lang].topic_required },
                ]}
              >
                <Input placeholder={t("subject")} />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="text"
                rules={[
                  { required: true, message: contact[lang].subject_required },
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
