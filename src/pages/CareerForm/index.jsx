import React, { useState } from "react";
import {
  Button,
  Input,
  Form,
  message,
  Row,
  Col,
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
import { useSelector } from "react-redux";
import career from "@/locale/career.json";

const CareerForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("registration");
  const lang = useSelector((store) => store.common.lang);

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
      setFile(null);
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
        <h1 className="career__title">{career[lang].career_title}</h1>

        <div className="show-form-btn">
          <Button
            type={activeTab === "registration" ? "primary" : "default"}
            onClick={() => setActiveTab("registration")}
          >
            {career[lang].sign_up}
          </Button>
          <Button
            type={activeTab === "program" ? "primary" : "default"}
            onClick={() => setActiveTab("program")}
          >
            {career[lang].send_cv}
          </Button>
        </div>

        {activeTab === "registration" && (
          <div className="form-area">
            <h3 className="form-title">{career[lang].form_title}</h3>
            {formSubmitted ? (
              <div className="form-submit-message">
                <div className="submit-box">
                  <img src={Submit} alt="" />
                  <p className="success">{career[lang].success_message}</p>
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
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].full_name}
                      rules={[
                        { required: true, message: career[lang].name_required },
                      ]}
                      validateTrigger="onChange"
                      name="full_name"
                    >
                      <Input
                        size="large"
                        placeholder={career[lang].name_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].phone}
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: career[lang].phone_required,
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder={career[lang].phone_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].email}
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: career[lang].email_required,
                        },
                        {
                          type: "email",
                          message: career[lang].email_invalid,
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder={career[lang].email_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].birth_date}
                      name="birth_date"
                      rules={[
                        {
                          required: true,
                          message: career[lang].birth_date_required,
                        },
                      ]}
                    >
                      <DatePicker
                        size="large"
                        format="DD-MM-YYYY"
                        style={{ width: "100%", height: "50px" }}
                        disabledDate={disabledDate}
                        placeholder={career[lang].birth_date_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].education}
                      name="education"
                      rules={[
                        {
                          required: true,
                          message: career[lang].education_required,
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder={career[lang].education_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].work_experience}
                      name="experience"
                      rules={[
                        {
                          required: true,
                          message: career[lang].experience_required,
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder={career[lang].experience_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].desired_position}
                      name="duty"
                      rules={[
                        {
                          required: true,
                          message: career[lang].duty_required,
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder={career[lang].duty_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].about_you}
                      name="about"
                      required={false}
                    >
                      <Input
                        size="large"
                        placeholder={career[lang].about_placeholder}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label={career[lang].your_photo}
                      valuePropName="file"
                      rules={[{ required: false }]}
                    >
                      <Upload
                        listType="picture"
                        beforeUpload={() => false}
                        onChange={handleFileChange}
                      >
                        <Button type="primary" icon={<UploadOutlined />}>
                          {career[lang].upload_photo}
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
                        {career[lang].submit}
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
                        message: career[lang].cv_required,
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
                        {career[lang].add_file}
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>

                <Col md={24}>
                  <div className="form-footer cv-btn">
                    <Button loading={loading} type="primary" htmlType="submit">
                      {career[lang].submit}
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
