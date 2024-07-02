import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const { t} = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about">
      <div className="container">
      <h2 data-aos="fade-down" className="section-title">
        {t("about")}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: t("aboutText")}} data-aos="fade-down" className="about-desc">
      </p>
      </div>

    </section>
  );
}

export default About;
