import React, { useEffect } from "react";
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
import member5 from "../../assets/images/team/lawyer1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getTeamSingleAsync, resetSingleTeam } from "@/redux/team/teamSlice";
import { IMAGES_URL } from "@/api/api";

function TeamDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { t, ready } = useTranslation();
  const teamSingle = useSelector((state) => state.team.teamSingle.data);
  const { loading } = useSelector((state) => state.team.teamSingle);
  const lang = useSelector((store) => store.common.lang);

  useEffect(() => {
    dispatch(getTeamSingleAsync(id));

    return () => dispatch(resetSingleTeam());
  }, [lang, id]);

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
      image: member5,
    },
  ];

  if (!ready) return "loading translations...";

  const teamData = t("teamData", { returnObjects: true });

  const team = teamData.find((item) => item.id == id);
  const personImage = imageData.find((item) => item.id == id);
  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Əməkdaşlar</h2>
      </div>

      <section id="team-detail">
        <div className="container">
          <div className="team-detail-content">
            <div className="team-detail-box">
              <div className="team-detail-img">
                {loading ? (
                  <div className="image-skeleton" />
                ) : (
                  <img src={IMAGES_URL + teamSingle?.image} alt="team" />
                )}
              </div>
              <div className="team-detail-desc-box">
                <h3 className="team-detail-title">{teamSingle?.full_name}</h3>
                <p className="team-detail-subtitle">
                  {teamSingle?.duties?.duty}
                </p>
                {/* <div className="team-detail-desc">
                  {teamSingle?.desc && (
                    <>
                      <p>{team.desc}</p> <p>{team.desc2}</p>
                    </>
                  )}
                  {teamSingle?.education && (
                    <p>
                      <span>{t("education")}:</span> {teamSingle?.education}{" "}
                    </p>
                  )}
                  {teamSingle?.master && (
                    <p>
                      <span>{t("master")}:</span> {teamSingle?.master}
                    </p>
                  )}
                  {teamSingle?.specialization && (
                    <p>
                      <span>{t("specialization")}:</span>{" "}
                      {teamSingle?.specialization}
                    </p>
                  )}
                  {teamSingle?.mail && (
                    <p>
                      <span>E-mail:</span> {teamSingle?.mail}
                    </p>
                  )}
                </div> */}

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
        </div>
      </section>
    </>
  );
}

export default TeamDetail;
