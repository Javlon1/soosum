import React from "react";
import './Sabzi.scss'
import { ProductInfo } from '../../Data/Data'

import { Context } from '../../Context/Context'
function Sabzi() {
  const { lan } = React.useContext(Context)

  const project = []
  ProductInfo?.map((e) => {
    project.push(e)
  })

  const projectLeft = []
  const projectRight = []
  const projectCenter = []

  if (project) {
    projectLeft.push(project[0])
    projectRight.push(project[1])
    projectCenter.push(project[2])
  }

  return (
    <section className="sabzi">
      <div className="container">
        {
          projectLeft?.map((e,i) => (
            <div key={i} className="id1">
              <p>{e[`text_${lan}`]}</p>
              <img key={e.id} src={e.img} alt="" />
            </div>
          ))
        }
        {
          projectRight?.map((e,i) => (
            <div key={i} className="id2">
              <img key={e.id} src={e.img} alt="" />
              <p>{e[`text_${lan}`]}</p>
            </div>
          ))
        }
        {
          projectCenter?.map((e,i) => (
            <div key={i} className="id3">
              <p>{e[`text_${lan}`]}</p>
              <img key={e.id} src={e.img} alt="" />
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Sabzi;