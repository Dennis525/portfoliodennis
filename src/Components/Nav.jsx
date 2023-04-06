import React, { useState } from 'react'

import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSun, FaMoon } from 'react-icons/fa'

import '../styles/Nav.css'


const Nav = ({ isDarkMode, handleToggle }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const nav =
    <ul style={{ pointerEvents: 'auto' }}>
      <li><Link onClick={handleClick} activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
        Projects
      </Link></li>
      <li><Link onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>
        About
      </Link></li>
      <li><Link onClick={handleClick} activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
        Contact
      </Link></li>
    </ul>

  return (
    <div className='nav'>
      <div className={`header ${!isDarkMode ?'light' : ''}`}>
        <h1>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>
            Dennis
          </Link>
        </h1>
        
        <div className="menu-and-theme">
          <div onClick={handleClick} className="menu">
            <GiHamburgerMenu />
          </div>
          <div className='large'>
            {nav}
          </div>
          <div className={`theme-switch ${!isDarkMode ?'light' : ''}`} onClick={handleToggle} >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </div>
      <div className='small' style={{
        display: isOpen ? 'none' : 'flex'
      }}>
        {nav}
      </div>
    </div>
  )
}

export default Nav;

