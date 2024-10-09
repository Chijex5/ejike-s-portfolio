// src/HomeMobile.js
import React, { useEffect } from 'react';
import './HomeMobile.css'; // A separate CSS file for mobile-specific styles
import Navbar from './Navbar';
function HomeMobile() {
  // Scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animated-heading, .animated-para');
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          el.classList.add('in-view'); // Add class when in viewport
        } else {
          el.classList.remove('in-view'); // Remove class when out of viewport
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animated-heading, .animated-para, .btn-box a, .home-sci a');
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add('in-view');
        } else {
          el.classList.remove('in-view');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className='main-mobile-home'>
        <Navbar />
        <section className="home-mobile">
        <div className="home-content">
            <div className='textbox'>
                <h1 className="animated-heading">Hi, I'm Chijioke Uzodinma</h1>
                <h3 className="animated-heading">Data Engineer</h3>
                <p className="animated-para">
                Business-Minded Data Engineer with a focus on optimizing and organizing data to drive strategic business decisions. I specialize in turning raw data into actionable insights, ensuring seamless data operations that align with business goals. Let’s work together to make your data a powerful strategic asset.
                </p>
            </div>
            <div className="btn-box">
                <a href="https://twitter.com/messages/compose?recipient_id=1676607259512655874&text=Hi%0AThanks%20for%20reaching%20out,%20drop%20a%20message%20and%20I'll%20reply%20as%20soon%20as%20I%20can!">Collaborate</a>
                <a href="mailto:embroconnect3@gmail.com?subject=Inquiry from [Your Name]: Let's Discuss [Your Topic or Question]">Contact Me</a>
            </div>
            <div className="home-sci">
                <a href="https://x.com/chijex5"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.linkedin.com/in/chijioke-uzodinma-34389b267/"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/Chijex5/"><i className="bx bxl-github"></i></a>
                <a href="mailto:embroconnect@gmail.com"><i className='bx bx-envelope'></i></a>
            </div>
        </div>
        </section>
    </div>
  );
}

export default HomeMobile;
