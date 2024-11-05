import { useState } from 'react';

const CallButton = () => {
  const [showCallModal, setShowCallModal] = useState(false);
  const phoneNumber = "+1-800-ESCALADE"; // Replace with your actual phone number

  const handleCall = () => {
    if (isMobile()) {
      window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`; // Strip non-digits for tel: link
    } else {
      setShowCallModal(true);
    }
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert('Phone number copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  };

  return (
    <>
      <button className="call-button" onClick={handleCall}>
        CALL NOW
      </button>

      {showCallModal && (
        <div className="modal-overlay" onClick={() => setShowCallModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Us</h3>
            <p className="phone-number">{phoneNumber}</p>
            <div className="modal-buttons">
              <button className="modal-button" onClick={copyToClipboard}>
                Copy Number
              </button>
              <a 
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="call-click"
              >
                Call
              </a>
            </div>
            <button 
              className="close-button"
              onClick={() => setShowCallModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CallButton;