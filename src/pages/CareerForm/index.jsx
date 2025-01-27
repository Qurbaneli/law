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
  DatePicker,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./career.scss";
import "./form.scss";
import { prefixes } from "@/constants";
import Submit from "@/assets/icons/form/submit.svg";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { axiosInstance } from "@/api/api";
import Swal from "sweetalert2";

const CareerForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("registration");
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();
  const {
    t,
    ready,
    i18n: { language },
  } = useTranslation();

  const handleFileChange = (info) => {
    if (info.fileList.length > 0) {
      setFile(info.file);
    } else {
      setFile(null);
    }
  };

  console.log(file);

  const disabledDate = (current) => {
    return current && current >= dayjs().endOf("day");
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();

      const formattedData = {
        ...data,
        birth_date: data.birth_date
          ? data.birth_date.format("YYYY-MM-DD")
          : null,
      };

      Object.entries(formattedData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (file) {
        formData.append("image", file);
      }

      await axiosInstance.post("/cv-form", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      message.success("Müraciət uğurla göndərildi");
      form.resetFields();
    } catch (error) {
      console.error(error);
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

  const onSubmitCv = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();

      if (file) {
        formData.append("cv_file", file);
      }

      await axiosInstance.post("/cv-file-form", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      message.success("Müraciət uğurla göndərildi");
      form.resetFields();
    } catch (error) {
      console.error(error);
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

  return (
    <section className="career">
      <div className="container">
        <h1 className="career__title">Komandamıza qoşul</h1>

        <div className="show-form-btn">
          <Button
            type={activeTab === "registration" ? "primary" : "default"}
            onClick={() => setActiveTab("registration")}
          >
            Qeydiyyatdan keçin
          </Button>
          <Button
            type={activeTab === "program" ? "primary" : "default"}
            onClick={() => setActiveTab("program")}
          >
            Elektron CV göndər
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
                  birth_date: dayjs(),
                }}
                onFinish={onSubmit}
                form={form}
              >
                <Row gutter={[16, 0]}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Ad və soyadınız"
                      rules={[
                        { required: true, message: "Ad boş buraxıla bilməz!" },
                      ]}
                      validateTrigger="onChange"
                      name="full_name"
                    >
                      <Input size="large" placeholder="Ad daxil edin" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Telefon"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Əlaqə nömrəsi boş buraxıla bilməz!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Telefon nömrəsi daxil edin"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Elektron poçt"
                      name="email"
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
                    >
                      <Input
                        size="large"
                        placeholder="Elektron poçt ünvanı daxil edin"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Doğum tarixi"
                      name="birth_date"
                      rules={[
                        {
                          required: true,
                          message: "Doğum tarixi boş buraxıla bilməz!",
                        },
                      ]}
                    >
                      <DatePicker
                        size="large"
                        format="DD-MM-YYYY"
                        style={{ width: "100%" }}
                        disabledDate={disabledDate}
                        placeholder="Doğum tarixinizi seçin"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Təhsil"
                      name="education"
                      rules={[
                        {
                          required: true,
                          message: "Təhsil boş buraxıla bilməz!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Təhsil məlumatını daxil edin"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="İş təcrübəsi"
                      name="experience"
                      rules={[
                        {
                          required: true,
                          message: "İş təcrübəsi boş buraxıla bilməz!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="İş təcrübəsi daxil edin"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="İddia etdiyiniz vəzifə"
                      name="duty"
                      rules={[
                        {
                          required: true,
                          message: "Vəzifə boş buraxıla bilməz!",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Vəzifə daxil edin" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Haqqınızda" name="about" required={false}>
                      <Input
                        size="large"
                        placeholder="Özünüz haqqında məlumat daxil edin"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Şəkliniz - png, jpg, jpeg"
                      valuePropName="file"
                      rules={[{ required: false }]}
                    >
                      <Upload
                        listType="picture"
                        beforeUpload={() => false}
                        onChange={handleFileChange}
                      >
                        <Button type="primary" icon={<UploadOutlined />}>
                          Şəkil Yüklə
                        </Button>
                      </Upload>
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
              onFinish={onSubmitCv}
              form={form}
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item
                    className="upload-file"
                    rules={[
                      {
                        required: true,
                        message: "Cv fayl boş buraxıla bilməz!",
                      },
                    ]}
                    validateTrigger="onChange"
                    name="name"
                  >
                    <Upload
                      beforeUpload={() => false}
                      onChange={handleFileChange}
                      maxCount={1}
                      listType="picture"
                    >
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
