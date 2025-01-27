import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

function About() {
  const lang = useSelector((store) => store.common.lang);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <section id="about-sc">
      <div className="container">
        <h2 data-aos="fade-down" className="section-title">
          {t("about")}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: t("aboutText") }}
          data-aos="fade-down"
          className="about-desc"
        ></p>
      </div>
    </section>
  );
}

export default About;
