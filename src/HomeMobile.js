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
            <div className='textbox'>
                <h1 className="animated-heading">Hi, I'm Chinedu Uzodinma</h1>
                <h3 className="animated-heading">Revops Analyst</h3>
                <p className="animated-para">
                I streamline and optimize revenue processes, aligning sales, marketing, and customer success teams to drive growth and maximize operational efficiency.
                </p>
            </div>
            <div className="btn-box">
                <a className="twitter-dm-button" href="https://twitter.com/messages/compose?recipient_id=1078039090916982785&text=Hiiiiiiiiiii%0AThanks%20for%20reaching%20out,%20drop%20a%20message%20and%20I'll%20reply%20as%20soon%20as%20I%20can!" data-screen-name="@mrejikee">Collaborate</a>
                <a href="mailto:embroconnect@gmail.com?subject=Inquiry from [Your Name]: Let's Discuss [Your Topic or Question]">Contact Me</a>
            </div>
            <div className="home-sci">
                <a href="https://x.com/mrejikee"><i className="bx bxl-twitter"></i></a>
                <a href="#"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/hello-ejike/"><i className="bx bxl-github"></i></a>
                <a href="mailto:embroconnect@gmail.com"><i className='bx bx-envelope'></i></a>
            </div>
        </div>
        </section>
    </div>
  );
}

export default HomeMobile;
