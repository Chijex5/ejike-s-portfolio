// src/ExitPopup.js
import React from 'react';
import './Popup.css'; // Add styles as needed

const ExitPopup = ({ onClose, onConfirm }) => {
  return (
    <div className="exit-popup">
      <div className="exit-popup-content">
        <h2>Thank You for Visiting!</h2>
        <p>We appreciate your time. Are you sure you want to leave?</p>
        <button onClick={onClose} className="exit-popup-btn">Stay</button>
        <button onClick={onConfirm} className="exit-popup-btn exit">Leave</button>
      </div>
    </div>
  );
};

export default ExitPopup;
