import React from 'react'
import "./Header.css"
import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header-logo"></img>
      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-item'><a href='/#'>Home</a></li>
          <li className='header-nav-item' ><a href='/#'>About</a></li>
          <li className='header-nav-item'><a href='/#'>Menu</a></li>
          <li className='header-nav-item'><a href='/#'>Reserve a table</a></li>
          <li className='header-nav-item'><a href='/#'>Order Online</a></li>
          <li className='header-nav-item'><a href='/#'>Log in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
