import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./team-detail.scss";
//Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//import icons
import facebook from "../../assets/icons/social-team/facebook.svg";
import instagram from "../../assets/icons/social-team/instagram.svg";
import google from "../../assets/icons/social-team/google.svg";
import whatsapp from "../../assets/icons/social-team/whatsapp.svg";

//import images
import team1 from "../../assets/images/team/big/member2.png";
import member1 from "../../assets/images/team/member1.jpeg";
import member2 from "../../assets/images/team/member2.jpeg";
import member4 from "../../assets/images/team/member4.jpeg";
import member3 from "../../assets/images/team/member3.jpeg";

function TeamDetail() {
  const { t, ready } = useTranslation();
  const imageData = [
    {
      id: 1,
      image: member4,
    },
    {
      id: 2,
      image: member2,
    },
    {
      id: 3,
      image: member3,
    },
    {
      id: 4,
      image: member1,
    },
  ];

  if (!ready) return "loading translations...";

  const teamData = t("teamData", { returnObjects: true });

  const { id } = useParams();
  const team = teamData.find((item) => item.id == id);
  const personImage = imageData.find((item) => item.id == id);
  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Əməkdaşlar</h2>
      </div>

      <section id="team-detail">
        <div className="container">
          {team ? (
            <div className="team-detail-content">
              <div className="team-detail-box">
                <div className="team-detail-img">
                  <img src={personImage.image} alt="team" />
                </div>
                <div className="team-detail-desc-box">
                  <h3 className="team-detail-title">{team.name_surname}</h3>
                  <p className="team-detail-subtitle">{team.profession}</p>
                  <div className="team-detail-desc">
                    {team.desc && (
                      <>
                        <p>{team.desc}</p> <p>{team.desc2}</p>
                      </>
                    )}
                    {team.education && (
                      <p>
                        <span>{t("education")}:</span> {team.education}{" "}
                      </p>
                    )}
                    {team.master && (
                      <p>
                        <span>{t("master")}:</span> {team.master}
                      </p>
                    )}
                    {team.specialization && (
                      <p>
                        <span>{t("specialization")}:</span>{" "}
                        {team.specialization}
                      </p>
                    )}
                    {team.mail && (
                      <p>
                        <span>E-mail:</span> {team.mail}
                      </p>
                    )}
                  </div>

                  <ul className="team-social">
                    {/* <li>
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
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <h2 className="no-data">Məlumat tapılmadı</h2>
          )}
        </div>
      </section>
    </>
  );
}

export default TeamDetail;
