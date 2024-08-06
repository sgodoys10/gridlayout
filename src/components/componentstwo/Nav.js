import React from 'react'
import { Link } from 'react-router-dom'
import '../Header.css'


const Nav = () => {
  return (
    <div className='header-nav'>
        <nav className='header-nav-list'>
          <Link to='/' className='header-nav-item'>Home</Link>
          <Link to='/' className='header-nav-item'>About</Link>
          <Link to='/' className='header-nav-item'>Menu</Link>
          <Link to='/' className='header-nav-item'>Reserve a table</Link>
          <Link to='/' className='header-nav-item'>Order online</Link>
          <Link to='/' className='header-nav-item'>Log in</Link>
        </nav>
      </div>
  )
}

export default Nav
