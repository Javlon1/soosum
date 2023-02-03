import React from "react";
import "./PriceDrug.scss";
//IMG
import Dori from "../../Assets/Img/Dori.png";
function PriceDrug() {
  return (
    <section className="priceDrug">
        <ul className="prugs container">
          <li className="prugs_child">
            <img src={Dori} alt="" />
            <p>Qizil jen shen 1 199 000</p>
          </li>
          <li className="prugs_child">
            <img src={Dori} alt="" />
            <p>Oddiy jen shen 1 199 000</p>
          </li>
        </ul>
    </section>
  );
}

export default PriceDrug;
