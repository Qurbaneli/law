import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./services.scss";
//Import icons
import service1 from "../../assets/icons/services/service-1.svg";
import service2 from "../../assets/icons/services/service-2.svg";
import service3 from "../../assets/icons/services/service-3.svg";
import service4 from "../../assets/icons/services/service-4.svg";
import service5 from "../../assets/icons/services/service-5.svg";
import service6 from "../../assets/icons/services/service-6.svg";
import service7 from "../../assets/icons/services/service-7.svg";
import arrow from "../../assets/icons/common/arrow.svg";

import AOS from "aos";
import "aos/dist/aos.css";


function Services() {
  const { t,ready} = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  const [moreServices, setMoreServices] = useState(true);
  
  const serviceIcons = [
    {
      id: 1,
      icon: service1,
      desc: "Korporativ Hüquq",
    },
    {
      id: 2,
      icon: service1,
      desc: "Əmək münasibətləri",
    },
    {
      id: 3,
      icon: service5,
      desc: "Müqavilə Hüququ",
    },
    {
      id: 4,
      icon: service4,
      desc: "Sığorta Hüququ",
    },
    {
      id: 5,
      icon: service2,
      desc: "İnzibati Hüquq",
    },
    {
      id: 6,
      icon: service3,
      desc: "Əqli Mülkiyyət Hüququ",
    },
    {
      id: 7,
      icon: service6,
      desc: "Ailə Hüququ",
    },
    {
      id: 8,
      icon: service7,
      desc: "Miqrasiya hüququ",
    },
  ];

  if (!ready) return "loading translations...";

  const servicesData = t("servicesData", { returnObjects: true });


  const maxServices= !moreServices ? 4 : servicesData.length-2;
  return (
    <section id="services">
      <div className="container">
        <h2 data-aos="fade-down" className="section-title">
          {t("services")}
        </h2>
        <p data-aos="fade-down" className="services-section-desc">
          {t("services-text")}
        </p>
        <div className="services-box">

          {servicesData.map((item, index) => {
            if(index<maxServices) {
            return (
            <Link
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              to={`/service/${item.id}`}
              key={item.id}
            >
              <div className="service-item">
                <div className="service-item-overlay">
                  <div className="service-item-overlay-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="services-item-detail">
                  <div className="services-item-icon">
                    <img src={serviceIcons[index].icon} alt="service-icon" />
                  </div>

                  <p className="services-item-desc">{item.title}</p>
                </div>
              </div>
            </Link>
          )}
        })}


        </div>

        <div
            onClick={() => setMoreServices(!moreServices)}
            className="btn-more"
          >
            {moreServices ? "Daha az" : "Daha çox"}
          </div>
      </div>
    </section>
  );
}

export default Services;
