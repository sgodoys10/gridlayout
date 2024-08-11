import React from 'react';
import "./Main.css";
import Restaurantfood from "../assets/restauranfood.jpg";

const Main = () => {
  return (
    <main className='main'>
      <div className='content-wrapper'>
        <section className='content-container'>
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
            <button className='btn' aria-label='Reserve a table'>Reserve a table</button>
          </div>
        </section>
        <figure className='restaurant-food-pic'>
          <img src={Restaurantfood} alt='Delicious Mediterranean food served at Little Lemon restaurant'/>
        </figure>
      </div>
    </main>
  );
}

export default Main;

