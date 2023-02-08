import './navbar.css'
import React from 'react'
import Logo from '../../assets/static/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
        <div className="logo"><img src={Logo} alt="" /></div>
        <div className="menu btn">
          <span className='nav-icon'></span>
        </div>

        </div>
    </nav>
  )
}

export default Navbar