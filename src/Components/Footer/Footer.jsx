import React from 'react'
import './Footer.scss'
import Logo from '../../Assets/Img/logosum.png'
import Teleg from '../../Assets/Img/teleg.png'
import Insta from '../../Assets/Img/insta.png'
import Face from '../../Assets/Img/face.png'
import Yube from '../../Assets/Img/yube.png'

import { Context } from '../../Context/Context'
import { Orders, Nav } from '../../Data/Data'
 function Footer() {

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
    <div className='footer'>
      <div className="container">
      <div className="logo">
        <a href="#" className='a'> <img src={Logo} alt="" /></a>
        <h1>
        Janubiy Koreyada tayyorlangan haqiqiy 
 6 yillik qizil jenshen ekstrakti
        </h1>
        <div>
          <a href="https://www.instagram.com/?next=%2F"><img src={Teleg} alt="" /></a>
          <a href="https://www.instagram.com/?next=%2F"><img src={Insta} alt="" /></a>
          <a href="https://www.instagram.com/?next=%2F"><img src={Face} alt="" /></a>
          <a href="https://www.instagram.com/?next=%2F"><img src={Yube} alt="" /></a>
        </div>
      </div>
      <div className="link">
        {
          Nav?.map((e) => (
            <a href="#" key={e.id}>{e[`nav_${lan}`]}</a>
          ))
        } <br />
      </div>
      <div className="input">
      <div id='order' className='order'>
            <div className="container">
                    {
                        Orders?.map((e) => (
                            <form action="">
                              <p className='mine'>{e[`text_${lan}`]}</p>
                              <input className='inpots' type="text" name='name' placeholder={e[`place_${lan}`]}  />
                              <input className='inpots' type="text" name='tel' defaultValue={'+998'}  />
                              {e.btn?.map((j) => (
                                    <button type='submit' className='foot__btn' key={j.id}>{j[`title_${lan}`]}</button>
                                ))}
                            </form>
                        ))
                    }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer