import React, { useEffect } from "react";
import "./partners.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

//import logos
import eduaz from "../../assets/images/partners/eduaz.svg";
import lsm from "../../assets/images/partners/lsm.svg";
import mass from "../../assets/images/partners/mass.svg";
import mlk from "../../assets/images/partners/mlk.svg";
import oneclick1 from "../../assets/images/partners/oneclick1.svg";
import oneclick2 from "../../assets/images/partners/oneclick2.svg";

function Partners() {
  useEffect(() => {
    AOS.init();
  }, []);

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
          <Swiper
            spaceBetween={16}
            slidesPerView={5}
            // autoplay={{
            //   delay: 2500,
            // }}

            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {

                slidesPerView: 4,
              },
              1200: {

                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            loop={true}
          >
            {partnersData.map((item, index) => (
              <SwiperSlide>
                <div
                  data-aos="fade-up-right"
                  data-aos-delay={index * 100}
                  key={item.id}
                  className="partner-item"
                >
                  <img src={item.logo} alt="logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partners;
