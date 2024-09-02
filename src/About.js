// src/About.js
import React, { useState, useEffect } from 'react';
import './About.css';
import Navbar from './Navbar';

function About() {
  const [textIndex, setTextIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [backspacing, setBackspacing] = useState(false);

  const textArray = [
    'Turning Data into Insights.',
    "Optimizing Data Pipelines.",
    'Empowering Decisions with Data.',
    "Building Robust Data Solutions.",
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (backspacing) {
        if (typingText.length === 0) {
          clearInterval(typingInterval);
          setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setBackspacing(false);
        } else {
          setTypingText(typingText.slice(0, -1));
        }
      } else {
        if (typingText.length < textArray[textIndex].length) {
          setTypingText(typingText + textArray[textIndex][typingText.length]);
        } else {
          clearInterval(typingInterval);

          setTimeout(() => {
            setBackspacing(true);
          }, 2000); // 2000 milliseconds (2 seconds) delay
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textIndex, typingText, backspacing]);

  return (
    <div className="main-about">
      <section className="about-section" id="about">
        <Navbar />
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <div className="typing-container">
            <h1 className="typing-text">
              <span>{typingText}</span>
              <span className="typing-cursor">|</span>
            </h1>
          </div>
          <p className="about-description">
            I’m Chinedu Uzodinma, a passionate Data Engineer who specializes in
            building and optimizing data pipelines, creating robust ETL processes,
            and transforming raw data into valuable insights. My experience
            encompasses working with various data technologies, ensuring seamless
            data flow to empower businesses in making data-driven decisions.
          </p>
          <div className="skills-section">
            <h3 className="skills-heading">Skills & Expertise</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="bx bxl-python"></i>
                <span>Python</span>
              </div>
              <div className="skill-item">
                <i className="bx bxl-postgresql"></i>
                <span>SQL</span>
              </div>
              <div className="skill-item">
                <i className="fa-solid fa-snowflake"></i>
                <span>SnowFlake</span>
              </div>
              <div className="skill-item">
                <i className="bx bxl-aws"></i>
                <span>AWS</span>
              </div>
              <div className="skill-item">
                <i className="bx bxl-docker"></i>
                <span>Docker</span>
              </div>
              <div className="skill-item">
                <i className="bx bxl-kubernetes"></i>
                <span>Kubernetes</span>
              </div>
              <div className="skill-item">
                <i className="bx bxl-git"></i>
                <span>Git</span>
              </div>
              <div className="skill-item">
                <i className="fa-brands fa-linux"></i>
                <span>Linux</span>
              </div>
              <div className="skill-item">
                <i class='bx bxl-heroku'></i>
                <span>Heroku</span>
              </div>
              <div className="skill-item">
                <i className="bx bxl-mongodb"></i>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
