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
          <h3 className="animated-heading">Data Engineer</h3>
          <p className="animated-para">
            I build and optimize data pipelines to transform raw data into valuable insights, driving informed decisions and business success.
          </p>
          <div className="btn-box">
            <a href="#">Collaborate</a>
            <a href="#">Connect</a>
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
