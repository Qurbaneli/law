import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

function Hero() {
  const { t, i18n } = useTranslation();
  const lang = useSelector((store) => store.common.lang);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <section id="hero">
      <div className="hero-detail">
        <h1 data-aos="fade-down">{t("hero")}</h1>
        <p data-aos="fade-down">{t("slogan")}</p>

        <a href="#contact" className="btn btn-main">
          {t("apply")}
        </a>
      </div>
    </section>
  );
}

export default Hero;
