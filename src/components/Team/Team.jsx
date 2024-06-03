import React from 'react'
import "./team.scss"
//import images
import member1 from "../../assets/images/team/member1.png"
import member2 from "../../assets/images/team/member2.png"
import member3 from "../../assets/images/team/member3.png"
import { Link } from 'react-router-dom'

function Team() {

  const teamData=[
    {
      id:1,
      image:member2,
      name_surname:"Süleyman Salahov",
      profession:"Direktor"
    },
    {
      id:2,
      image:member2,
      name_surname:"Elvin Mürşüdlü",
      profession:"Hüquqşünas"
    },
    {
      id:3,
      image:member3,
      name_surname:"Şəhriyar Paşalı",
      profession:"Hüquqşünas"
    },
    {
      id:4,
      image:member1,
      name_surname:"Pünhanə Abdullayeva",
      profession:"Hüquqşünas"
    }
  ]
  return (
    <section id="team">
      <div className='container'>
        <h2 className="section-title">Əməkdaşlarımız</h2>
        <div className='team-box'>
          {
            teamData.map((item)=>(
              <Link to={`team/${item.id}`}>
              <div key={item.id} className="team-item">
              <div className='team-item-img'>
                  <img src={item.image} alt="team-img" />
              </div>
              <div className='team-item-desc'>
                    <h4>{item.name_surname}</h4>
                    <p>{item.profession}</p>
              </div>
            </div>
            </Link>
            ))
          }


        </div>
      </div>

    </section>
  )
}

export default Team