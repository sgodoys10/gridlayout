import React from 'react'
import "./Header.css"
import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header-logo"></img>
      <nav>
        <ul>
          <li><a href='/#'>Home</a></li>
          <li><a href='/#'>About</a></li>
          <li><a href='/#'>Menu</a></li>
          <li><a href='/#'>Reserve a table</a></li>
          <li><a href='/#'>Order Online</a></li>
          <li><a href='/#'>Log in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
