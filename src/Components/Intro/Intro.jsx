import * as React from 'react'
import { Context } from '../../Context/Context'
import { Btn, Slider } from '../../Data/Data'
import './Intro.scss'



export default function Intro() {
  const { lan } = React.useContext(Context)
  return (
    <section className='intro'>
        <div className="container">
          <div className="container__left">
            {
              Slider?.map((e)=>(
                <ul className='container__left__list' key={e.id}>
                  <li className='container__left__list__natural'>{e.natural}% natural</li>
                  <li className='container__left__list__title'>{e[`title_${lan}`]}</li>
                </ul>
              ))
            }
            {
              Btn?.map((e)=>(
                <a href={e.href} className='container__left__btn' key={e.id}>{e[`title_${lan}`]}</a>
              ))
            }
          </div>
          <div className="container__right">
            {
              Slider?.map((e)=>(
                <img key={e.id} src={e.img} alt="ginseng" />
              ))
            }
          </div>
        </div>
    </section>
  )
}
