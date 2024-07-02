import React from "react";
import "./service-detail.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
//import Datas
import { servicesData } from "./data";

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id == id);
  return (
    <>
      <Header />
      <div className="page-header">
        <h2 className="page-title">Xidmətlər</h2>
      </div>

      <section id="service-detail">
        <div className="container">
          {service ? (
            <>
              <h2 className="page-title">{service.title}</h2>
              <div className="service-detail-content">
                <p>{service.desc}</p>

                <h3>
                  Legit S.A korporativ hüquq üzrə aşağıdakı xidmətləri təklif
                  edir:
                </h3>

                <ul>
                  {service.services.map((item) => (
                    <li>
                      <MdKeyboardArrowRight />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="note">{service.note}</p>
              </div>
            </>
          ) : (
            <h2 className="no-data">Məlumat tapılmadı</h2>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServiceDetail;
