import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="hero">
      <div className="hero-detail">
        <h1 data-aos="fade-down">{t("hero")}</h1>
        <p data-aos="fade-down">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>

        <div className="btn btn-main">{t("apply")}</div>
      </div>
    </section>
  );
}

export default Hero;
