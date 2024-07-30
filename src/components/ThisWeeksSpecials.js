import React from 'react'
import "./ThisWeeksSpecials.css"

const ThisWeeksSpecials = () => {
  return (
    <div className='specials-container'>
    <div className='specials-header-container'>
      <h2>This Week's Specials!</h2>
      <div className='online-menu-btn-container'>
        <button className='online-menu-btn'>Online menu</button>
      </div>
    </div>
      <div className='card-container'>
      <div className='card'>
        <h3>Greek Salad</h3>
        <p className='price'> $15.99</p>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
        </p>
      </div>
      <div className='card'>
        <h3>Bruschetta</h3>
        <p className='price'>$5.99</p>
        <p>
        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
        </p>
        </div>
      <div className='card'>
        <h3>Lemon Dessert</h3>
        <p className='price'>$5.00</p>
        <p>
        This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. 
        </p>
        </div>
      </div>
    </div>
  )
}

export default ThisWeeksSpecials;
