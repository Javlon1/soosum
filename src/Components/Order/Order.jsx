import * as React from 'react'
import { Context } from '../../Context/Context'
import { Orders } from '../../Data/Data'
import './Order.scss'
import order from '../../Assets/Img/order.png'

export default function Order() {

    const formReg = (e) => {
        e.preventDefault()
        const el = e.target.elements
        fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/soosum', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', // qysi formatta yuborish
                'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
                'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
            },
            body: JSON.stringify({
                name: el.name.value,
                tel: parseInt(el.tel.value)
            })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
        e.target.elements.name.value = ''
        e.target.elements.tel.value = '998'
    }


    const { lan } = React.useContext(Context)
    return (
        <section id='order' className='order'>
            <div className="container">
                <div className="container__left">
                    {
                        Orders?.map((e) => (
                            <form onSubmit={formReg} className='container__left__form' key={e.id} action="#">
                                <h2 className='container__left__form__title'>{e[`title_${lan}`]}</h2>
                                <p className='container__left__form__text'>{e[`text_${lan}`]}</p>
                                <input className='container__left__form__inp' name='name' type="text" placeholder='name' />
                                <input className='container__left__form__inp' name='tel' type="text" defaultValue={998} />
                                {e.btn?.map((j) => (
                                    <button type='submit' className='container__left__form__btn' key={j.id}>{j[`title_${lan}`]}</button>
                                ))}
                            </form>
                        ))
                    }
                </div>
                <div className="container__right">
                    {
                        Orders?.map((e) => (
                            <>
                                <ul key={e.id} className='container__right__list'>
                                    <li className='container__right__list__sale'>{e[`sale_${lan}`]}</li>
                                    <li className='container__right__list__def'>
                                        {
                                            e.numb?.map((j) => (
                                                <p key={j.id}>{j.def}</p>
                                            ))
                                        }
                                    </li>
                                    <li className='container__right__list__dis'>
                                        {
                                            e.numb?.map((j) => (
                                                <p key={j.id}>{j.dis}</p>
                                            ))
                                        }
                                    </li>
                                    <li className='container__right__list__ben'>
                                        {e[`benefit_${lan}`]}
                                        {
                                            e.numb?.map((j) => (
                                                <p key={j.id}>{j.ben}</p>
                                            ))
                                        }
                                    </li>
                                </ul>
                                <img className='container__right__img' src={order} alt="" />
                            </>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
