// src/UnderConstruction.js
import React, { useState, useEffect } from 'react';
import './UnderConstruction.css';
import constructionImage from './construct.jpg'; // Update the path to the image

function UnderConstruction() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 55);

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
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
