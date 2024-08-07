import React from 'react'; 
import { useLocation, Link } from 'react-router-dom';

const BookingConfirmation = () => {
        const location = useLocation();
        const { bookingDetails } = location.state || {};

        if (!bookingDetails) {
          return <p>No booking details found.</p>;
        }
    return (
      <div className="confirmation-container">
        <h2>Booking Confirmation</h2>
        <p>Thank you for your reservation. Here are your booking details:</p>
        <ul>
          <li>Number of People: {bookingDetails.numberOfPeople}</li>
          <li>Date: {bookingDetails.date}</li>
          <li>Time: {bookingDetails.time}</li>
          <li>Occasion: {bookingDetails.occasion}</li>
          <li>Phone: {bookingDetails.phone}</li>
          <li>Preferences: {bookingDetails.preferences}</li>
        </ul>
        <div className="back-to-home-container">
          <button className='back-to-home'>
            <Link to='/' className='back-to-home-link'>Return to Homepage</Link>
          </button>
        </div>
      </div>
    );
  };

  export default BookingConfirmation;
