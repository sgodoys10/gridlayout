import React from 'react'
import "./Testimonials.css"
import greeksalad from "../assets/greeksalad.jpg"
import lemondessert from "../assets/lemondessert.jpg"

const Testimonials = () => {
  return (
    <div>
      <div className='testimonials-title'> 
        <h1>Testimonials</h1>
      </div>
      <div className='rating-card-container'>
      <div className='rating-card'>
        <h3>Rating: 5/5</h3>
        <img src={greeksalad} alt='greek salad' className='rating-card-img'></img>
        <h4>User: Jona404</h4>
        <p>The greek salad is absolutely amazing</p>
      </div>
      <div className='rating-card'>
        <h3>Rating: 5/5</h3>
        <img src={greeksalad} alt='greek salad' className='rating-card-img'></img>
        <h4>User: Samu305</h4>
        <p>My mother loved the greek salad. </p>
      </div>
      <div className='rating-card'>
        <h3>Rating: 5/5</h3>
        <img src={lemondessert} alt='lemon dessert' className='rating-card-img'></img>
        <h4>User: Loren1 </h4>
        <p>I love the Lemon dessert! </p>
      </div>
      <div className='rating-card'>
        <h3>Rating: 5/5</h3>
        <img src={lemondessert} alt='lemon dessert' className='rating-card-img'></img>
        <h4>User: Joel13</h4>
        <p>The lemon dessert tasted authentic.  </p>
      </div>
      </div>
    </div>

  )
}

export default Testimonials
