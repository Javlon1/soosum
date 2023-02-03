import React from "react";
import "./HowUse.scss";
//DATA
import { Question } from "../../Data/Data.js";
import {Context} from '../../Context/Context'
function HowUse() {
  const {lan} = React.useContext(Context)
  return (
    <section className="howUse">
        <div className="howUse__text">
          <span>{Question.map((e) => e[`title_${lan}`])}</span>
          <p>{Question.map((e) => e[`text_${lan}`])}</p>
        </div>
    </section>
  );
}

export default HowUse;
