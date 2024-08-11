import "./BookingPage.css"
import { Link, useNavigate } from 'react-router-dom'
import React, {useReducer, useState, useEffect} from 'react'
import BookingForm from "./BookingForm"

//initial state for the available times
const initializeTimesState = {
  times: [],
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
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const numberOfPeople = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"
  ];

  const occasions = [
    "Birthday", "Engagement", "Anniversary", "Other"
  ];


 // Function to fetch available times based on the selected date
 const fetchAvailableTimes = (selectedDate) => {
  try {
    // Directly call window.fetchAPI without async/await
    const times = window.fetchAPI(new Date(selectedDate));
    console.log("Available times:", times);
    return times; // Return the times directly as an array
  } catch (error) {
    console.error('Error fetching available times:', error);
    return [];
  }
};

// Function to update available times based on the selected date
const updateAvailableTimes = (selectedDate) => {
  if (selectedDate) {
    const times = fetchAvailableTimes(selectedDate);
    console.log("Updating available times:", times)
    dispatch({ type: 'SET_TIMES', payload: times });
  }
};

// useEffect to fetch available times on initial load (for today's date)
useEffect(() => {
  const fetchInitialTimes = () => {
    const today = new Date().toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
    const times = fetchAvailableTimes(today);
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  fetchInitialTimes();

  const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
  setBookings(existingBookings);
  }, []);

  // Function to submit the form data
  const submitForm = (formData) => {
    try {
      const result = window.submitAPI(formData); // Call the global submitAPI function
      if (result) { // If the submission is successful
     // Get existing bookings from local storage
     const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

     // Add new booking to the list
     const updatedBookings = [...existingBookings, formData];

     // Save the updated list to local storage
     localStorage.setItem('bookings', JSON.stringify(updatedBookings));
           // Log the formData before navigating to see what gets passed
           console.log("Booking Details before navigating:", formData);

     // Navigate to confirmation page
     navigate('/confirmation', { state: { bookingDetails: formData } });
   }
 } catch (error) {
   console.error('Error submitting form:', error);
 }
};

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const phoneNumberPattern = /^[0-9\b]+$/; 
      if (value === '' || phoneNumberPattern.test(value)){
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  } else {
    alert('Please enter only numbers.');
  }
} else {
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));
}

    if (name === 'date') {
      updateAvailableTimes(value); // Fetch and update available times when the date changes
    }
};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    submitForm(formData); // Use submitForm function to handle form submission
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
