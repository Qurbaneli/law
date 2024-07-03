import React from "react";
import "./contact.scss"
import { useTranslation } from "react-i18next";

function Contact() {
  const { t} = useTranslation();
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-form">
          <form action="">
            <div className="form-row">
              <div className="form-item">
                <input type="text" placeholder={t('name-surname')}/>
              </div>

              <div className="form-item">
                <input type="text" placeholder={t('email')}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-item">
                <input type="text" placeholder={t('phone')}/>
              </div>

              <div className="form-item">
                <input type="text" placeholder={t('subject')}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-item">
                <textarea type="text" placeholder={t("text")}/>
              </div>
            </div>

            <div className="form-footer">
              <div className="btn submit-btn">{t("send")}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
