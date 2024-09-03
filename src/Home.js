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

  // Renders HomeMobile component if screen width is <= 760px
  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <div className="main-home">
      <Navbar />
      <section className="home">
        <div className="home-content">
          <h1 className="animated-heading">Hi, I'm Chinedu Uzodinma</h1>
          <h3 className="animated-heading">Revops Analyst</h3>
          <p className="animated-para">
            I streamline and optimize revenue processes, aligning sales, marketing, and customer success teams to drive growth and maximize operational efficiency.
          </p>
          <div className="btn-box">
                <a href="https://twitter.com/messages/compose?recipient_id=1078039090916982785&text=Hiiiiiiiiiii%0AThanks%20for%20reaching%20out,%20drop%20a%20message%20and%20I'll%20reply%20as%20soon%20as%20I%20can!">Collaborate</a>
                <a href="mailto:embroconnect@gmail.com?subject=Inquiry from [Your Name]: Let's Discuss [Your Topic or Question]">Contact Me</a>
            </div>
        </div>
        <div className="home-sci">
            <a href="https://x.com/mrejikee"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/hello-ejike/"><i className="bx bxl-github"></i></a>
            <a href="mailto:embroconnect@gmail.com"><i className='bx bx-envelope'></i></a>
        </div>
        <span className="home-imgHover"></span>
      </section>
    </div>
  );
}

export default Home;
