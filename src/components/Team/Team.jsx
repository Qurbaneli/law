import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./team.scss";

//Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
//Import images
import member1 from "../../assets/images/team/member1.jpeg";
import member4 from "../../assets/images/team/member4.jpeg";
import member2 from "../../assets/images/team/member2.jpeg";
import member3 from "../../assets/images/team/member3.jpeg";
import member5 from "../../assets/images/team/lawyer1.jpg";

function Team() {
  const { t, ready } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  const teamDataImage = [
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
    {
      id: 5,
      image: member5,
    },
  ];

  if (!ready) return "loading translations...";

  const teamData = t("teamData", { returnObjects: true });

  return (
    <section id="team">
      <div className="container">
        <h2 data-aos="fade-down" className="section-title">
          {t("team")}
        </h2>
        <div className="team-box">
          {teamData.map((item, index) => (
            <Link
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              to={`team/${item.id}`}
            >
              <div className="team-item">
                <div className="team-item-img">
                  <img src={teamDataImage[index].image} alt="team-img" />
                </div>
                <div className="team-item-desc">
                  <h4>{item.name_surname}</h4>
                  <p>{item.profession}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
