import React, { useEffect } from "react";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about">
      <div className="container">
      <h2 data-aos="fade-down" className="section-title">
        Haqqımızda
      </h2>
      <p data-aos="fade-down" className="about-desc">
        Azərbaycan Respublikasının qanunvericiliyinə əsasən təsis edilmiş “Legit
        Solve Advisors” Məhdud Məsuliyyətli Cəmiyyəti müştərilər üçün müxtəlif
        istiqamətlər üzrə peşəkar hüquqşünaslardan ibarət komandası ilə yüksək
        keyfiyyətli hüquqi xidmətlər göstərən hüquq şirkətidir. Şirkətimiz
        korporativ, kommersiya, mülki, əmək, cinayət, miqrasiya hüququ və
        hüququn digər sahələrində ixtisaslaşmışdır. Məqsədimiz, müştərilərimizin
        hüquqi problemlərini sürətli və effektiv şəkildə həll etməkdir.
        <br />
        Peşəkarlıq, dürüstlük və müştəri məmnuniyyəti prinsiplərimizi rəhbər
        tutaraq, hüquqi ehtiyaclarınızda ən etibarlı tərəfdaşınız olmağa
        hazırıq.
      </p>
      </div>

    </section>
  );
}

export default About;
