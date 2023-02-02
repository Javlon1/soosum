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
          <ul>
            <li><a href="#"><img src={Logo} alt="" /></a></li>
            <li><p>Janubiy Koreyada tayyorlangan haqiqiy 6 yillik qizil jenshen ekstrakti</p></li>
            <li><a href="/"><img src="" alt="" /></a></li>
          </ul>
        }
        {
          Nav?.map((e) => (
            <ul key={e.id}>
              <li><a href={e.href}>{e[`nav_${lan}`]}</a></li>
            </ul>
          ))
        }
        {
          Orders?.map((e) => (
            <form onSubmit={formReg} key={e.id} action="#">
              <p>{e[`text_${lan}`]}</p>
              <input type="text" name='name' placeholder='Name' />
              <input type="text" name='tel' defaultValue={998} />
              {
                e.btn?.map((j) => (
                  <button type='submit' key={j.id}>{j[`title_${lan}`]}</button>
                ))
              }
            </form>
          ))
        }
      </div>
    </footer>
  )
}
