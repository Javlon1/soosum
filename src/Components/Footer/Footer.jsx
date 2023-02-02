import * as React from 'react'
import './Footer.scss'
import Logo from '../../Assets/Img/logo.png'
import { Nav, Orders } from '../../Data/Data'
import { Context } from '../../Context/Context'

export default function Footer() {

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
    <footer className='footer'>
      <div className="container">
        {
          <ul className='container__list1'>
            <li className='container__list1__logo'><a href="#"><img src={Logo} alt="" /></a></li>
            <li className='container__list1__text'><p>Janubiy Koreyada tayyorlangan haqiqiy 6 yillik qizil jenshen ekstrakti</p></li>
            <li className='container__list1__icon'>
              {
                <a href="/">
                  <img src="https://i.pinimg.com/originals/79/c3/15/79c315509d714f25c500ede412d38de7.jpg" alt="" />
                  <img src="https://i.pinimg.com/originals/79/c3/15/79c315509d714f25c500ede412d38de7.jpg" alt="" />
                  <img src="https://i.pinimg.com/originals/79/c3/15/79c315509d714f25c500ede412d38de7.jpg" alt="" />
                  <img src="https://i.pinimg.com/originals/79/c3/15/79c315509d714f25c500ede412d38de7.jpg" alt="" />
                </a>
              }
            </li>
          </ul>
        }
        <ul className='container__list2'>
          {
            Nav?.map((e) => (
              <li key={e.id} className='container__list2__item'><a href={e.href}>{e[`nav_${lan}`]}</a></li>
            ))
          }
        </ul>
        {
          Orders?.map((e) => (
            <form className='container__form' onSubmit={formReg} key={e.id} action="#">
              <p className='container__form__text'>{e[`text_${lan}`]}</p>
              <input className='container__form__inp' type="text" name='name' placeholder='Name' />
              <input className='container__form__inp' type="text" name='tel' defaultValue={998} />
              {
                e.btn?.map((j) => (
                  <button className='container__form__btn' type='submit' key={j.id}>{j[`title_${lan}`]}</button>
                ))
              }
            </form>
          ))
        }
      </div>
    </footer>
  )
}
