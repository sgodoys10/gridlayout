import "./BookingPage.css"
import { Link, useNavigate } from 'react-router-dom'
import React, {useReducer, useState} from 'react'
import BookingForm from "./BookingForm"

//initial state for the available times 
const initializeTimesState = {
  times:[],
};

//reducer function to handle actions 
export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return {times: action.payload}; 
      default:
        return state; 
  }
};


const BookingPage = () => {
  const [formData, setFormData] = useState({
    numberOfPeople: '',
    date: '',
    time: '',
    occasion: '',
    phone: '',
    preferences: ''
  });

  const [timesState, dispatch] = useReducer (timesReducer, initializeTimesState);
  const navigate = useNavigate();

  const numberOfPeople = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"
  ];

  const occasions = [
    "Birthday", "Engagement", "Anniversary", "Other"
  ];

//function to update available times based on  the selected date 
  const updateAvailableTimes = (selectedDate) => {
    if (selectedDate) {
      const date = new Date(selectedDate); 
      const dayOfWeek = date.getDay(); 

      //logic to set available times based on day of the week 
      const times = (dayOfWeek === 5 || dayOfWeek === 6)
      ? ["12:00", "13:00", "14:00", "15:00"]
      : ["17:00", "18:00", "19:00", "20:00", "21:00"];

      //dispatch the action to update available times 
      dispatch({type:'SET_TIMES', payload: times}); 
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));


    if (name === 'date') {
    updateAvailableTimes(value);
  }
};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate ('/confirmation', {state:{bookingDetails:formData}}); 
  };


  return (
    <>
    <div className='booking-title-container'>
      <h1 className='booking-title'>Reserve a table</h1>
    </div>
    <div className='form-container'>
      <BookingForm 
        formData={formData}
        availableTimes={timesState.times}
        numberOfPeople={numberOfPeople}
        occasions={occasions}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
    </div>
    <div className="back-to-home-container">
      <button className='back-to-home'>
        <Link to='/' className='back-to-home-link'>Return to Homepage</Link>
    </button>
  </div>
  </>
  );
};

export default BookingPage;
