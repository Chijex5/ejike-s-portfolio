// src/UnderConstruction.js
import React, { useState, useEffect } from 'react';
import './UnderConstruction.css';
import constructionImage from './construct.jpg'; // Update the path to the image

function UnderConstruction() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2024-09-02T15:00:00'); // Start date and time
    const duration = 50 * 60 * 60 * 1000; // 50 hours in milliseconds
    const endDate = new Date(targetDate.getTime() + duration);

    const updateTimer = () => {
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval); // Cleanup interval on component unmount
  }, []);
    
  return (
    <div className="under-construction-container">
      <div className="content">
        <h1>We're Building Something Great!</h1>
        <p>Stay tuned, this page is under construction.</p>
        <div className="timer">
          {timeLeft.hours !== undefined && (
            <div>
              {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
            </div>
          )}
        </div>
        <img src={constructionImage} alt="Page Under Construction" />
        <a href="/" className="back-home-button">Back Home</a>
      </div>
    </div>
  );
}

export default UnderConstruction;
