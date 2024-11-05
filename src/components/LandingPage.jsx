import { useState } from 'react';
import BookingForm from './BookingForm';
import CallButton from './CallButton';
import './LandingPage.css';

const LandingPage = () => {
  const [showBooking, setShowBooking] = useState(false);

  const handleBookingSubmit = () => {
    console.log('Booking submitted');
    // Additional booking submission logic
  };

  return (
    <div className="landing-container">
      <nav className="navigation">
        <div className="logo">
          ESCALADE RIDE
        </div>
        
        <div className="nav-links">
          <a href="#fleet">OUR FLEET</a>
          <a href="#services">SERVICES</a>
          <a href="#about">ABOUT US</a>
          <CallButton />
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Ride in <em>Luxury</em>,
            <div className="second-line">
              Arrive in <em>Style</em>.
            </div>
          </h1>
          
          <button className="book-button" onClick={() => setShowBooking(!showBooking)}>
            Book Now
          </button>

          {showBooking && <BookingForm onSubmit={handleBookingSubmit} />}
        </div>

        <div className="hero-image">
          <img 
            src="src/assets/images/Cadillac.png"
            alt="Luxury Black Escalade SUV"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;