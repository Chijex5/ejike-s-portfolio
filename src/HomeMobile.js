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

  return (
    <div className='main-mobile-home'>
        <Navbar />
        <section className="home-mobile">
        <div className="home-content">
            <h1 className="animated-heading">Hi, I'm Chinedu Uzodinma</h1>
            <h3 className="animated-heading">Data Engineer</h3>
            <p className="animated-para">
            I build and optimize data pipelines to transform raw data into valuable insights, driving informed decisions and business success.
            </p>
            <div className="btn-box">
            <a href="#">Collaborate</a>
            <a href="#">Connect</a>
            </div>
            <div className="home-sci">
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            </div>
        </div>
        </section>
    </div>
  );
}

export default HomeMobile;
