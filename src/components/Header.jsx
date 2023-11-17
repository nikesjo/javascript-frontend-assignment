import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/images/logotype.svg'
import Button from './Generics/Button'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [btnClasses, setBtnClasses] = useState('btn-menu')

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setBtnClasses(!showMenu ? 'btn-menu active' : 'btn-menu')
  }

  return (
    <header>
      <div className="container">
        <div className="mobile-menu">
          <button className={btnClasses} onClick={toggleMenu}><i className="fa-solid fa-bars-staggered"></i></button>
          
          {showMenu && (
            <nav>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/service'>Service</NavLink></li>
                <li><NavLink to='/news'>News</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
              </ul>
            </nav>
          )}
        </div>
        <div className="logotype"><Link to='/'><img src={Logo} alt="" /></Link></div>
        <div className="contactinformation-bar">
            <div className="content-box">
                <i className="fa-regular fa-phone-volume"></i>
                +46 (8) 121 470 50
            </div>
            <div className="content-box">
                <i className="fa-regular fa-envelope"></i>
                info@crito.com
            </div>
            <div className="content-box last">
                <i className="fa-regular fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
            </div>
        </div>
        <div className="socialmedia-bar">
            <Link to="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
            <Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
            <Link to="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
          </div>
        <div className="menu">
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/service'>Service</NavLink></li>
              <li><NavLink to='/news'>News</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </nav>
          <Button type="yellow" text="Login" url='/login' />
        </div>
    </div>
    </header>
  )
}

export default Header