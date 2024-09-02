// src/Project.js
import React from 'react';
import './Project.css'; // Create a new CSS file for the Project page
import pic from './construct.jpg'
import pic2 from './construct2.webp'
import Navbar from './Navbar';

function Project() {

    const projects = [
        {
          title: 'Data Pipeline Automation Project',
          description: 'Developed an end-to-end automated data pipeline for ETL processes, including data extraction, transformation, and loading into a cloud-based data warehouse.',
          image: pic, 
          link: '#', 
          source: '#', 
          tools: ['bx bxl-python', 'fa-brands fa-docker', 'bx bxs-data', 'bx bxl-aws'],
        },
        {
          title: 'Real-time Data Streaming Analytics',
          description: 'Created a real-time data processing system that ingests and processes streaming data to generate actionable insights.',
          image: pic2,
          link: '#', 
          source: '#', 
          tools: ['bx bxl-heroku', 'bx bxl-python', 'bx bxl-kubernetes', 'fa-solid fa-snowflake'],
        },
      ];
      

  return (
    <div className='main-project'>
        <Navbar />
        <div className="projects-container">
            <h1 className="projects-heading">My Projects</h1>
            <p className="projects-description">
                Here are some of the projects I've worked on. Click on the links to learn more.
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tools-icon">
                        {project.tools.map((iconClass, index) => (
                            <i key={index} className={iconClass}></i>
                        ))}
                    </div>
                    <div className="project-buttons">
                        <a href={project.link} className="btn-box">View Project</a>
                        <a href={project.source} className="btn-box btn-secondary">Source Code</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Project;
