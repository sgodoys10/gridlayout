import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {Route, Routes } from 'react-router-dom';
import BookingPage from './components/componentstwo/BookingPage';
import BookingConfirmation from './components/componentstwo/BookingConfirmation';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<MainPage />} />
        <Route path='/booking' element= {<BookingPage />} />
        <Route path='/confirmation' element= {<BookingConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
