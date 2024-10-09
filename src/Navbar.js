import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent event from reaching document click listener
    setIsOpen(!isOpen);
  };

const closeMenu = (e) => {
  if (menuRef.current && !menuRef.current.contains(e.target)) {
    setIsOpen(false);
  }
};

useEffect(() => {
  document.addEventListener('click', closeMenu);
  return () => {
    document.removeEventListener('click', closeMenu);
  };
}, []);

const handleLinkClick = () => {
  setIsOpen(false);
};

const isActive = (path) => location.pathname === path;

return (
  <header className="header">
    <Link to="/" className="logo">Chijioke</Link>
    <i 
      className={`bx ${isOpen ? "bx-x" : "bx-menu"} menu-toggle`} 
      onClick={toggleMenu}
    ></i>
    <nav ref={menuRef} className={`navbar ${isOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Project
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Blog
          </Link>
    </nav>
  </header>
);
}

export default Navbar;
