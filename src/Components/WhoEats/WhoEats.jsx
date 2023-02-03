import React from "react";
import "./WhoEats.scss";
//DATA
import { ShouldDrink } from "../../Data/Data.js";
import { Context } from "../../Context/Context";
function WhoEats() {
  const {lan} = React.useContext(Context)
  return (
    <section className="whoEats__back">
      <div className="WhoEats__text container">
        <div className="whoEats__child">
          <h5 className="shoulDrink">
            {ShouldDrink.map((e) => e[`title_${lan}`])}
          </h5>
          {
            <ul className="whoEats__list">
            {ShouldDrink.map((e,i)=> e.cause.map((c,i)=>(
                <li key={i}>{c[`text_${lan}`]}</li>
            )))}
              </ul>
          }
        </div>
      </div>
    </section>
  );
}

export default WhoEats;
