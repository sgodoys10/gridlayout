import React from "react";
import "./BookingPage.css"

const BookingForm = ({formData, availableTimes, numberOfPeople, occasions, onFormChange, onFormSubmit}) => {
  return (
    <form onSubmit={onFormSubmit}>
    <div>
      <label htmlFor="numberOfPeople">Number of people:</label>
      <select id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={onFormChange}>
        <option value="" disabled>Select number of people:</option>
              {numberOfPeople.map((people, index) => (
          <option key={index} value={people}>{people}</option>
              ))}
      </select>
    </div>
    <div>
      <label htmlFor="date">Select a date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={onFormChange} />
    </div>
    <div>
      <label htmlFor="time">Select a time:</label>
      <select id="time" name="time" value={formData.time} onChange={onFormChange}>
        <option value="" disabled>Select available time:</option>
        {console.log("Available times in BookingForm:", availableTimes)}
              {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
              ))}
      </select>
    </div>
    <div>
    <label htmlFor="occasion">Select an occasion:</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={onFormChange}>
      <option value="" disabled>Select an occasion:</option>
              {occasions.map((occasion, index) => (
          <option key={index} value={occasion}>{occasion}</option>
              ))}
      </select>
    </div>
    <div>
      <label htmlFor="phone">Phone number:</label>
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={onFormChange} />
    </div>
    <div>
      <label htmlFor="preferences">Additional preferences:</label>
      <textarea id='preferences' name='preferences' className='large-input' value={formData.preferences} onChange={onFormChange}></textarea>
    </div>
    <div className="submit-container">
    <button type="submit" className='submit'>Reserve</button>
    </div>
    </form>
  );
};

export default BookingForm; 