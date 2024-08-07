import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {Route, Routes } from 'react-router-dom';
import BookingPage from './components/componentstwo/BookingPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<MainPage />} />
        <Route path='/booking' element= {<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
