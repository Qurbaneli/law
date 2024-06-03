import React, { useEffect } from "react";
import "./about.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section  id="about">
      <h2 data-aos="fade-down" className="section-title">Haqqımızda</h2>
      <p data-aos="fade-down" className="about-desc">
        Legit S.A Azərbaycan Respulikası qanunvericiliyinə uyğun təsis olunmuş
        peşəkar hüquq təşkilatıdır. Müasir standartlara cavab verən bu yeni
        təşkilatın göstərdiyi hüquqi xidmətlər hüquq sahəsində uzun müddət
        fəaliyyət göstərmiş və böyük uğurlara imza atmış hüquqşünaslar
        tərəfindən həyata keçirilir. Bir çox hüquq sahələrində keyfiyyətli və
        operativ hüquqi yardım göstərilməsi əsas missiyamızdır. Komandamız
        birinci dərərcəli yerli bazar bilikləri ilə dəstəklənən qüsursuz
        məsləhətlət verir. 
      </p>
    </section>
  );
}

export default About;
