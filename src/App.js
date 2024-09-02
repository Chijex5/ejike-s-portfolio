// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home'; // Home component with animation effect
import About from './About'
import UnderConstruction from './UnderConstruction';


function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} /> {/* Home page */}
          <Route path="about" element={<About />} /> {/* About page */}
          <Route path="projects" element={<UnderConstruction />} />
          <Route path="contact" element={<UnderConstruction />} />
          <Route path="services" element={<UnderConstruction />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
