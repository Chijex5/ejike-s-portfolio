// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home'; // Home component with animation effect
import About from './About'
import UnderConstruction from './UnderConstruction';
import Blog from './Blog';
import Project from './Project';


function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path='*' element={<UnderConstruction />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} /> {/* Home page */}
          <Route path="about" element={<About />} /> {/* About page */}
          <Route path="projects" element={<Project />} />

          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
