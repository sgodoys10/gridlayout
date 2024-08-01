import React from 'react'
import "./Footer.css"
import restaurantChef from "../assets/restaurantChef.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-image'>
          <img src={restaurantChef} alt='Little Lemon Chef'/>
        </div>
      <div className='footer-nav-wrapper'>
      <h4>Navigation</h4>
        <nav className='footer-nav'>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'><a href='/#'>Home</a></li>
            <li className='footer-nav-item'><a href='/#'>About</a></li>
            <li className='footer-nav-item'><a href='/#'>Menu</a></li>
            <li className='footer-nav-item'><a href='/#'>Reserve a table</a></li>
            <li className='footer-nav-item'><a href='/#'>Order Online</a></li>
            <li className='footer-nav-item'><a href='/#'>Log in</a></li>
          </ul>
        </nav>
      </div>
          <div className='footer-contact'>
            <h4>Contact</h4>
            <div className='footer-contact-items'>
            <p className='footer-contact-item'>1311 Mediterranean St</p>
            <p className='footer-contact-item'>855-747-9384</p>
            <p className='footer-contact-item'>littlelemon@example.com</p>
            </div>
          </div>
          <div className='footer-socials'>
            <h4>Social Media</h4>
            <div className='footer-socials-items'>
            <a href='https://wwww.Facebook.com'>Facebook</a>
            <a href='https://www.instagram.com'>Instagram</a>
            <a href='https://www.twitter.com'>Twitter</a>
            </div>
          </div>
        </div>
  )
}

export default Footer
