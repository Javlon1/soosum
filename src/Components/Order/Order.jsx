import React from 'react'
import { Orders } from '../../Data/Data'
import './Order.scss'

export default function Order() {
    return (
        <section className='order'>
            <div className="container">
                <div className="container__left">
                    {
                        Orders?.map((e) => (
                            <form key={e.id} action="#">
                                <h2>{e.title_uz}</h2>
                                <p>{e.text_uz}</p>
                                <input type="text" />
                                <input type="text" />
                                <button></button>
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
