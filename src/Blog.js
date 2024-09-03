import React from 'react';
import './Blog.css'; // Blog-specific styles
import Navbar from './Navbar'; // Use the same header component for consistency

const Blog = () => {
  const articles = [
    {
      title: 'Article Title 1',
      description: 'Brief description of the article goes here...',
      date: 'August 1, 2024',
      link: '#', 
      location: 'bx bxl-quora',
      span: 'Quora Digest',
    },

    {
      title: 'Article Title 2',
      description: 'Brief description of the article goes here...',
      date: 'September 1, 2024',
      link: '#', 
      location: 'bx bxl-medium',
      span: 'Medium',
    },

    {
      title: 'Article Title 3',
      description: 'Brief description of the article goes here...',
      date: 'Feburary 1, 2024',
      link: '#', 
      location: 'bx bxl-medium',
      span: 'Medium',
    },

    {
      title: 'Article Title 4',
      description: 'Brief description of the article goes here...',
      date: 'August 1, 2024',
      link: '#', 
      location: 'bx bxl-quora',
      span: 'Quora Digest',
    },
    
  ];

  return (
    <div className="blog-container">
      <Navbar />
      <section className="blog-content">
        <h2 className="blog-heading">Blog</h2>
        <p className="blog-description">
        Explore a curated selection of articles and insights that reflect my professional expertise, industry knowledge, and thought leadership. Engage with content that delves into diverse topics, offering valuable perspectives and in-depth analysis to foster understanding and inspire innovation.
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
