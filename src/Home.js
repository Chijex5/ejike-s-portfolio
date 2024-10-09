// src/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css'; 
import Navbar from './Navbar';
import HomeMobile from './HomeMobile'; // Separate mobile version of Home


function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  // Event listener to detect screen resize and toggle isMobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 760);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
  

  // Renders HomeMobile component if screen width is <= 760px
  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <div className="main-home">
      <Navbar />
      <section className="home">
        <div className="home-content">
          <div className="heading-text">
            <h1 className="animated-heading">Chijioke Uzodinma</h1>
          </div>
          <h3 className="animated-heading">Data Engineer</h3>
          <p className="animated-para">
            I streamline and optimize revenue processes, aligning sales, marketing, and customer success teams to drive growth and maximize operational efficiency.
          </p>
          <div className="btn-box">
                <a href="https://twitter.com/messages/compose?recipient_id=1676607259512655874&text=Hi%0AThanks%20for%20reaching%20out,%20drop%20a%20message%20and%20I'll%20reply%20as%20soon%20as%20I%20can!">Collaborate</a>
                <a href="mailto:embroconnect3@gmail.com?subject=Inquiry from [Your Name]: Let's Discuss [Your Topic or Question]">Contact Me</a>
            </div>
        </div>
        <div className="home-sci">
            <a href="https://x.com/chijex5"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.linkedin.com/in/chijioke-uzodinma-34389b267/"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/Chijex5/"><i className="bx bxl-github"></i></a>
            <a href="mailto:embroconnect3@gmail.com"><i className='bx bx-envelope'></i></a>
        </div>
        <span className="home-imgHover"></span>
      </section>
    </div>
  );
}

export default Home;
