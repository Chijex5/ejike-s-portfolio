// src/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location
  const menuRef = useRef(null);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  

  

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <Link to="/" className="logo">Chinedu</Link> {/* Using Link for navigation */}
      <i 
        className={`bx ${menuOpen ? "bx-x" : "bx-menu"} menu-toggle`} 
        onClick={toggleMenu}
      ></i>
      <nav ref={menuRef} className={`navbar ${menuOpen ? 'active' : ''}`}>
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
