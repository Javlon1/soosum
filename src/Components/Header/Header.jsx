import * as React from 'react'
import './Header.scss'
import Logo from '../../Assets/Img/logo.png'
import { Btn, Nav } from '../../Data/Data'
import { Context } from '../../Context/Context'

export default function Header() {
  const lang = ['uz', 'ru', 'en']
  const { lan, setLan } = React.useContext(Context)
  const [scrol, setScrol] = React.useState(false)
  const offSet = 80;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const handleChange = (event) => {
    setLan(event.target.value);
  };

  React.useEffect(() => {
    window.localStorage.setItem('lan', lan)
  }, [lan])

  return (
    <header className={scrol ? 'header header__bc' : 'header'}>
      <div className="container"><a className='container__img' href="/">
        <img src={Logo} alt="logo" />
      </a>
        <nav className='container__nav'>
          <ul className='container__nav__list'>
            {
              Nav?.map((e) => (
                <li className='container__nav__list__item' key={e.id}><a href={e.href}>{e[`nav_${lan}`]}</a></li>
              ))
            }
          </ul>
          <select className='container__nav__select' defaultValue={lan} onChange={handleChange}>
            {
              lang.map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))
            }
          </select>
          {
            Btn?.map((e) => (
              <a href={e.href} className='container__nav__btn' key={e.id}>{e[`title_${lan}`]}</a>
            ))
          }
        </nav>
      </div>
    </header>
  )
}