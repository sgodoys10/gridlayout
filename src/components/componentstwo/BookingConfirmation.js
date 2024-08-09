import React from 'react'; 
import { useLocation, Link } from 'react-router-dom';
import "./BookingConfirmation.css"

const BookingConfirmation = () => {
        const location = useLocation();
        const { bookingDetails } = location.state || {};

        if (!bookingDetails) {
          console.error("No booking details received:", location.state);
          return <p>No booking details found.</p>;
        }
        
        console.log("Booking details:", bookingDetails);
        
    return (
      <div className="confirmation-container">
        <div className='confirmation-container-title'>
        <h2>Booking Confirmation</h2>
        </div>
        <div className='confirmation-content'>
            <p className='confirmation-text'><b>Thank you for your reservation. Here are your booking details:</b></p>
                <ul className='confirmation-content-list'>
                    <li>Number of People: {bookingDetails.numberOfPeople}</li>
                    <li>Date: {bookingDetails.date}</li>
                    <li>Time: {bookingDetails.time}</li>
                    <li>Occasion: {bookingDetails.occasion}</li>
                    <li>Phone: {bookingDetails.phone}</li>
                    <li>Preferences: {bookingDetails.preferences}</li>
                 </ul>
        </div>
        <div className="back-to-home-container">
          <button className='back-to-home'>
            <Link to='/' className='back-to-home-link'>Return to Homepage</Link>
          </button>
        </div>
      </div>
    );
  };

  export default BookingConfirmation;
