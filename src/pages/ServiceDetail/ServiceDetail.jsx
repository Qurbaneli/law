import React from "react";
import "./service-detail.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

function ServiceDetail() {
  const servicesData = [
    {
      id: 1,
      desc: "Korporativ Hüquq",
    },
    {
      id: 2,
      desc: "Əmək münasibətləri",
    },
    {
      id: 3,
      desc: "Müqavilə Hüququ",
    },
    {
      id: 4,
      desc: "Sığorta Hüququ",
    },
    {
      id: 5,
      desc: "İnzibati Hüquq",
    },
    {
      id: 6,
      desc: "Əqli Mülkiyyət Hüququ",
    },
    {
      id: 7,
      desc: "Ailə Hüququ",
    },
    {
      id: 8,
      desc: "Miqrasiya hüququ",
    },
  ];
  const {id}=useParams();
  const service=servicesData.find(item=>item.id==id)
  return (
    <>
      <div className="page-header">
        <Header />
        <h2 className="page-title">Xidmətlər</h2>
      </div>

      <section id="service-detail">
        <div className="container">
          {service ? (<>
            <h2 className="page-title">{service.desc}</h2>
          <div className="service-detail-content">
            <p>
              • Yerli və xarici hüquqi şəxslərin təsis olunması, sənədlərin
              hazırlanması və qeydiyyatı;
            </p>
            <p>
              • Hüquqi şəxslərin təsis sənədlərində dəyişikliklərin, əlavələrin,
              dövlət qeydiyyatına alınması;
            </p>
            <p>
              • Hüquqi şəxslərin təsis sənədlərində dəyişikliklərin, əlavələrin,
              dövlət qeydiyyatına alınması;
            </p>
            <p>• Filial, şöbə, nümayəndəliklərin təsis edilməsi;</p>
            <p>
              • Hüquqi şəxslərin qeydiyyatının ləğv edilməsi və ya
              dayandırılması;
            </p>
            <p>
              • Hüquqi şəxslərin fəaliyyətinin hüquqi ekspertizası (due
              diligence);
            </p>
            <p>• Müxtəlif istiqamətlər üzrə müqavilələrin hazırlanması;</p>
            <p>
              • Hüquqi şəxslərin nizamnaməsinin, daxili qaydalarının,
              əsasnamələrinin, starteji sənədlərinin hazırlanması;
            </p>
            <p>• Korporativ mübahisələrin həlli.</p>
          </div>
          </>) : (
            <h2 className="no-data">Məlumat tapılmadı</h2>
          )}
  
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServiceDetail;
