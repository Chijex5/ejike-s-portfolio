// src/Project.js
import React from 'react';
import './Project.css'; // Create a new CSS file for the Project page
import pic from './construct.jpg'
import pic2 from './construct2.webp'
import Navbar from './Navbar';

function Project() {

    const projects = [
        {
          title: 'Reddit Data Scrapper',
          description: 'The Reddit Data Fetching and Storage System is designed to retrieve top posts from specified subreddits using the PRAW library. This system efficiently organizes the data into a Pandas DataFrame and facilitates the export of top-rated posts to a CSV file. Furthermore, it establishes a secure connection to a Snowflake database to store the top-rated posts, utilizing environment variables for sensitive information, such as API keys and database credentials. This approach ensures secure and efficient handling of data while maintaining data integrity.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDetAbVcLup7fspY4j19iRojP5e6kL1mJWQA&s', 
          link: '#', 
          source: 'https://github.com/Chijex5/redit_post.git', 
          tools: ['bx bxl-python', 'fa-solid fa-snowflake', 'bx bxs-data', 'bx bxl-reddit'],
        },
        {
          title: 'Student Performance Tracking System',
          description: 'The Student Performance Tracking System is designed to monitor student academic progress, automatically identify students who may be struggling, and enable early intervention through peer mentorship and notifications to guardians.',
          image: 'https://nnedu.org/wp-content/uploads/2024/03/IMG-20230310-WA0023.jpg',
          link: '#', 
          source: 'https://github.com/Chijex5/skillphore_datathon', 
          tools: ['bx bxl-python', 'bx bxl-postgresql', 'bx bxs-data', 'fa-solid fa-snowflake'],
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
