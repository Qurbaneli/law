import React, { useEffect } from "react";
import "./hero.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="hero">
      <div className="hero-detail">
        <h1 data-aos="fade-down">HIGH QUALITY LAW ADVICE AND SUPPORT</h1>
        <p data-aos="fade-down">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>

        <div className="btn btn-main">Müraciət et</div>
      </div>
    </section>
  );
}

export default Hero;
