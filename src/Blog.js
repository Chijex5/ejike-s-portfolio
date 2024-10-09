import React from 'react';
import './Blog.css'; // Blog-specific styles
import Navbar from './Navbar'; // Use the same header component for consistency

const Blog = () => {
  const articles = [
    {
      title: 'Student Performance Tracking System ',
      description: 'The Student Performance Tracking System is designed to monitor student academic progress, automatically identify students who may be struggling, and enable early intervention through peer mentorship and notifications to guardians.',
      date: 'October 9, 2024',
      link: 'https://docs.google.com/document/d/17ZdfOfbDy3d8Ro6WRRVZR-zPTpNIX7VbHhfJHty-HUs/edit?usp=sharing', 
      location: 'bx bxs-file-doc',
      span: 'Google Docs',
    },

    {
      title: 'My Journey into Tech: A Transformative Internship at Wema Bank',
      description: "This three-week internship at Wema Bank's head office in Marina, from August 7th to August 28th, 2023, marked a significant milestone in my journey into the tech industry. As a recent secondary school graduate, this experience provided hands-on exposure to data analytics and solidified my decision to pursue a career in technology and data science.",
      date: 'August 14, 2024',
      link: 'https://www.linkedin.com/posts/chijioke-uzodinma-34389b267_careerjourney-techindustry-internshipexperience-activity-7214271639356620800-T1ee?utm_source=share&utm_medium=member_desktop', 
      location: 'bx bxl-linkedin',
      span: 'Linked in',
    },

    {
      title: 'Data Engineering in a Nutshell',
      description: 'This project explores the core principles of data engineering and proposes a simplified approach for newcomers entering the field. By distilling complex data engineering processes into fundamental steps, the project aims to make the discipline more accessible to beginners while maintaining its depth and sophistication.',
      date: 'Feburary 1, 2024',
      link: 'https://docs.google.com/document/d/1HD2YgNb3VzwdGUJeWrM2uvthR-scNXVTwAKzTjJqtxw/edit?usp=sharing', 
      location: 'bx bxs-file-doc',
      span: 'Google Docs',
    },    
  ];

  return (
    <div className="blog-container">
      <Navbar />
      <section className="blog-content">
        <h2 className="blog-heading">Blog</h2>
        <p className="blog-description">
        Browse a collection of articles and insights that I have authored across various platforms, now conveniently brought together in one place. This curated selection reflects my professional journey, offering diverse perspectives, in-depth analysis, and valuable knowledge, all aimed at informing and inspiring a broader audience.
        </p>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-date">{article.date}</p>
              <p className="article-description">{article.description}</p>
              <div className='location'>
                <i  className={article.location}></i>
                <span>{article.span}</span>
              </div>
              <div className='btn-container'>
                <a href={article.link} className="btn-box">
                  View Article
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
