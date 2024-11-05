import { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    onSubmit();
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Pickup Address</label>
          <input 
            type="text" 
            placeholder="Enter pickup location"
            required 
          />
        </div>

        <div className="form-group">
          <label>Dropoff Address</label>
          <input 
            type="text" 
            placeholder="Enter destination"
            required 
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input 
              type="date" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input 
              type="time" 
              required 
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;