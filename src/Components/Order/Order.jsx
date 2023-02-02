import * as React from 'react'
import { Context } from '../../Context/Context'
import { Orders } from '../../Data/Data'
import './Order.scss'

export default function Order() {
    const { lan } = React.useContext(Context)
    return (
        <section id='order' className='order'>
            <div className="container">
                <div className="container__left">
                    {
                        Orders?.map((e) => (
                            <form className='container__left__form' key={e.id} action="#">
                                <h2 className='container__left__form__title'>{e[`title_${lan}`]}</h2>
                                <p className='container__left__form__text'>{e[`text_${lan}`]}</p>
                                <input className='container__left__form__inp' type="text" placeholder='name'/>
                                <input className='container__left__form__inp' type="text" defaultValue={998}/>
                                {e.btn?.map((j) => (
                                    <button type='submit' className='container__left__form__btn' key={j.id}>{j[`title_${lan}`]}</button>
                                ))}
                            </form>
                        ))
                    }
                </div>
                <div className="container__right">
                    
                </div>
            </div>
        </section>
    )
}
