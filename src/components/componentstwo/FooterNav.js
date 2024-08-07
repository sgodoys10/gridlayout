import React from 'react'
import '../Footer.css'
import { Link } from 'react-router-dom'

const FooterNav = () => {
  return (
    <div className='footer-nav-wrapper'>
      <h4>Navigation</h4>
        <div className='footer-nav'>
          <nav className='footer-nav-list'>
            <Link to ='/' className='footer-nav-item'>Home</Link>
            <Link to ='/' className='footer-nav-item'>About</Link>
            <Link to ='/' className='footer-nav-item'>Menu</Link>
            <Link to ='/booking' className='footer-nav-item'>Reserve a table</Link>
            <Link to ='/' className='footer-nav-item'>Order online</Link>
            <Link to ='/' className='footer-nav-item'>Log in</Link>
          </nav>
        </div>
      </div>

  )
}

export default FooterNav
