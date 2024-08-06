import React from 'react'
import "./Header.css"
import Logo from "../assets/Logo.png"
import Nav from './componentstwo/Nav'

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header-logo"></img>
      <Nav/>
    </header>
  )
}

export default Header
