// ServicesSection.jsx
import { Plane, Clock, Building2, MapPin } from 'lucide-react';
import './Services.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {/* Airport Transfer Card */}
        <div className="service-card">
          <div className="icon-container">
            <Plane size={32} />
          </div>
          <h3 className="service-title">Airport Transfer</h3>
          <p className="service-description">
            Luxury airport transfers with meet & greet service. Professional chauffeurs ensure timely arrivals and departures.
          </p>
        </div>

        {/* Hourly Rides Card */}
        <div className="service-card">
          <div className="icon-container">
            <Clock size={32} />
          </div>
          <h3 className="service-title">Hourly Rides</h3>
          <p className="service-description">
            Flexible hourly booking for meetings, events, or city tours. Your personal chauffeur at your service.
          </p>
        </div>

        {/* City to City Card */}
        <div className="service-card">
          <div className="icon-container">
            <Building2 size={32} />
          </div>
          <h3 className="service-title">City to City</h3>
          <p className="service-description">
            Comfortable intercity travel with luxury vehicles. Direct routes and professional service.
          </p>
        </div>

        {/* Long Rides Card */}
        <div className="service-card">
          <div className="icon-container">
            <MapPin size={32} />
          </div>
          <h3 className="service-title">Long Rides</h3>
          <p className="service-description">
            Extended journey comfort for long-distance travel. Experienced drivers for a smooth ride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;