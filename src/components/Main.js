import React from 'react';
import "./Main.css";
import Restaurantfood from "../assets/restauranfood.jpg";

const Main = () => {
  return (
    <div className='main'>
      <div className='content-wrapper'>
        <div className='content-container'>
          <div className='main-title'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <div className='main-description'>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </div>
          <div className='reserve-btn-container'>
            <button className='btn'>Reserve a table</button>
          </div>
        </div>
        <div className='restaurant-food-pic'>
          <img src={Restaurantfood} alt='Restaurant Food'/>
        </div>
      </div>
    </div>
  );
}

export default Main;

