import React, { useState } from "react";
import {
  Button,
  Input,
  Form,
  message,
  Row,
  Col,
  Space,
  Select,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./career.scss";
import "./form.scss";
import { prefixes } from "@/constants";
import Submit from "@/assets/icons/form/submit.svg";

import { useTranslation } from "react-i18next";

const CareerForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("registration");
  const [form] = Form.useForm();
  const {
    t,
    ready,
    i18n: { language },
  } = useTranslation();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await instance.post("/form", data);
      setFormSubmitted(true);
      message.success("Müraciət uğurla göndərildi");
    } catch (error) {
      // Swal.fire({
      //   title: "Xəta!",
      //   html: Object.entries(error.response.data.errors)
      //     .map(([key, value]) => `<p>${value}</p>`)
      //     .join(""),
      //   icon: "error",
      //   confirmButtonText: "Bağla",
      // });
      setFormSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="career">
      <div className="container">
        <h1 className="career__title">Komandamıza qoşul</h1>

        <div className="show-form-btn">
          <Button
            type={activeTab === "program" ? "primary" : "default"}
            onClick={() => setActiveTab("program")}
          >
            Elektron CV göndər
          </Button>
          <Button
            type={activeTab === "registration" ? "primary" : "default"}
            onClick={() => setActiveTab("registration")}
          >
            Qeydiyyatdan keçin
          </Button>
        </div>

        {activeTab === "registration" && (
          <div className="form-area">
            <h3 className="form-title">Qeydiyyat</h3>
            {formSubmitted ? (
              <div className="form-submit-message">
                <div className="submit-box">
                  <img src={Submit} alt="" />
                  <p className="success">Müraciətiniz uğurla göndərildi</p>
                </div>
              </div>
            ) : (
              <Form
                className="e-form"
                layout="vertical"
                initialValues={{
                  prefix: prefixes[0]?.value,
                }}
                onFinish={onSubmit}
                form={form}
              >
                <Row gutter={[16, 0]}>
                  {/* Ad, Soyad, Qurum, Vəzifə, Əlaqə nömrəsi, Elektron poçt üçün form elementləri */}
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Ad"
                      rules={[
                        { required: true, message: "Ad boş buraxıla bilməz!" },
                      ]}
                      validateTrigger="onChange"
                      name="name"
                    >
                      <Input size="large" placeholder="Ad daxil edin" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Soyad boş buraxıla bilməz!",
                        },
                      ]}
                      label="Soyad"
                      validateTrigger="onChange"
                      name="surname"
                    >
                      <Input size="large" placeholder="Soyad daxil edin" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Qurum boş buraxıla bilməz!",
                        },
                      ]}
                      label="Qurum"
                      validateTrigger="onChange"
                      name="organization"
                    >
                      <Input size="large" placeholder="Qurum daxil edin" />
                    </Form.Item>
                  </Col>

                  <Col span={24} sm={24} md={12}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Vəzifə boş buraxıla bilməz!",
                        },
                      ]}
                      label="Vəzifə"
                      validateTrigger="onChange"
                      name="position"
                    >
                      <Input size="large" placeholder="Vəzifə daxil edin" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Əlaqə nömrəsi" validateTrigger="onChange">
                      <Space.Compact>
                        <Form.Item name="prefix" noStyle>
                          <Select options={prefixes} />
                        </Form.Item>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "Əlaqə nömrəsi boş buraxıla bilməz!",
                            },
                            {
                              pattern: /^\d{7}$/,
                              message:
                                "Əlaqə nömrəsi yalnız 7 rəqəmdən ibarət olmalıdır!",
                            },
                          ]}
                          name="contact_phone"
                          noStyle
                        >
                          <Input placeholder="ex: 4419933" maxLength={7} />
                        </Form.Item>
                      </Space.Compact>
                    </Form.Item>
                  </Col>

                  <Col span={24} sm={24} md={12}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Elektron poçt boş buraxıla bilməz!",
                        },
                        {
                          type: "email",
                          message: "Düzgün elektron poçt ünvanı daxil edin!",
                        },
                      ]}
                      label="Elektron poçt"
                      validateTrigger="onChange"
                      name="email"
                    >
                      <Input
                        type="email"
                        size="large"
                        placeholder="Elektron poçt ünvanı daxil edin"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <div className="form-footer">
                      <Button
                        loading={loading}
                        type="primary"
                        htmlType="submit"
                      >
                        Göndər
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            )}
          </div>
        )}

        {activeTab === "program" && (
          <div className="form-area">
            <Form
              className="e-form"
              layout="vertical"
              initialValues={{
                prefix: prefixes[0]?.value,
              }}
              onFinish={onSubmit}
              form={form}
            >
              <Row gutter={[16, 0]}>
                {/* Ad, Soyad, Qurum, Vəzifə, Əlaqə nömrəsi, Elektron poçt üçün form elementləri */}
                <Col xs={24} sm={24} md={24}>
                  <Form.Item
                    className="upload-file"
                    rules={[
                      { required: true, message: "Ad boş buraxıla bilməz!" },
                    ]}
                    validateTrigger="onChange"
                    name="name"
                  >
                    <Upload listType="picture">
                      <Button type="primary" icon={<UploadOutlined />}>
                        Fayl əlavə et
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>

                <Col md={24}>
                  <div className="form-footer cv-btn">
                    <Button loading={loading} type="primary" htmlType="submit">
                      Göndər
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerForm;
