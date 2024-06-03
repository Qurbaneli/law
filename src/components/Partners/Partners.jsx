import React, { useEffect } from "react";
import "./partners.scss";
//import logos
import eduaz from "../../assets/images/partners/eduaz.svg";
import lsm from "../../assets/images/partners/lsm.svg";
import mass from "../../assets/images/partners/mass.svg";
import mlk from "../../assets/images/partners/mlk.svg";
import oneclick1 from "../../assets/images/partners/oneclick1.svg";
import oneclick2 from "../../assets/images/partners/oneclick2.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Partners() {

  useEffect(() => {
    AOS.init();
  }, [])

  const partnersData = [
    {
      id: 1,
      logo: eduaz,
    },
    {
      id: 2,
      logo: lsm,
    },
    {
      id: 3,
      logo: mass,
    },
    {
      id: 4,
      logo: mlk,
    },
    {
      id: 5,
      logo: oneclick1,
    },
    {
      id: 6,
      logo: oneclick2,
    },
  ];
  return (
    <section id="partners">
      <div className="container">
        <h2 className="section-title">Tərəfdaşlar</h2>
        <div className="partners-box">
          {partnersData.map((item,index) => (
            <div data-aos="fade-up-right" data-aos-delay={index*100} key={item.id} className="partner-item">
              <img src={item.logo} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
