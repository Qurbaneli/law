import React from "react";
import "./team-detail.scss";
//Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import team1 from "../../assets/images/team/big/member2.png";
//import icons
import facebook from "../../assets/icons/social-team/facebook.svg";
import instagram from "../../assets/icons/social-team/instagram.svg";
import google from "../../assets/icons/social-team/google.svg";
import whatsapp from "../../assets/icons/social-team/whatsapp.svg";
import { useParams } from "react-router-dom";

function TeamDetail() {
  const teamData = [
    {
      id: 1,
      // image:member2,
      name_surname: "Süleyman Salahov",
      profession: "Direktor",
    },
    {
      id: 2,
      // image:member2,
      name_surname: "Elvin Mürşüdlü",
      profession: "Hüquqşünas",
    },
    {
      id: 3,
      // image:member3,
      name_surname: "Şəhriyar Paşalı",
      profession: "Hüquqşünas",
    },
    {
      id: 4,
      // image:member1,
      name_surname: "Pünhanə Abdullayeva",
      profession: "Hüquqşünas",
    },
  ];
  const { id } = useParams();
  const blog = teamData.find((item) => item.id == id);
  return (
    <>
      <Header />
      <div className="page-header">
        <h2 className="page-title">Əməkdaşlar</h2>
      </div>

      <section id="team-detail">
        <div className="container">
          {blog ? (
            <div className="team-detail-content">
              <div className="team-detail-box">
                <div className="team-detail-img">
                  <img src={team1} alt="team" />
                </div>
                <div className="team-detail-desc-box">
                  <h3 className="team-detail-title">{blog.name_surname}</h3>
                  <p className="team-detail-subtitle">{blog.profession}</p>
                  <p className="team-detail-desc">
                    <span>Ali hüquq təhsili:</span> Naxçıvan Dövlət
                    Universiteti- Hüquqşünaslıq. Daha çox ixtisaslaşdığı hüquq
                    sahəsi: Kommersiya hüququ, Müqavilə hüququ, Cinayət hüququ.
                  </p>

                  <ul className="team-social">
                    <li>
                      <a href="#">
                        <img src={facebook} alt="facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={google} alt="google" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={whatsapp} alt="whatsapp" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={instagram} alt="instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <h2 className="no-data">Məlumat tapılmadı</h2>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TeamDetail;
