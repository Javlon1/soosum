import React from "react";
import "./AboutComp.scss";

//DATA
import  { AboutCompany } from "../../Data/Data.js";
//IMAGE
import Castle from '../../Assets/Img/aboutCompCastle.png'
import { Context } from '../../Context/Context'

function AboutComp() {
  const {lan} = React.useContext(Context)
  return (
    <section className="aboutComp__back">
      <div className="aboutComp__text container">
        <div className="dfCentre">
          <span>{AboutCompany.map((e) => e[`title_${lan}`])}</span>
          <p>{AboutCompany.map((e) => e[`text_${lan}`])}</p>
        </div>
        <img className="castleImg" src={Castle} alt="" />
      </div>
    </section>
  );
}

export default AboutComp;
