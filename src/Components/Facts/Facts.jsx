import * as React from 'react'
import { Context } from '../../Context/Context'
import { FactsData, FactsInNum } from '../../Data/Data'
import './Facts.scss'

export default function Facts() {
    const { lan } = React.useContext(Context)
    return (
        <section className='facts'>
            <div className="container">
                {
                    FactsInNum?.map((e) => (
                        <h2 className='container__title' key={e.id}>{e[`title_${lan}`]}</h2>
                    ))
                }
                <ul className='container__list'>
                    {
                        FactsData?.map((e) => (
                            <li key={e.id} className='container__list__item'>
                                <h2 className='container__list__item__title'>{e.numb}</h2>
                                <p className='container__list__item__text'>{e[`text_${lan}`]}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
