// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home'; // Home component with animation effect
import About from './About'


function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} /> {/* Home page */}
          <Route path="about" element={<About />} /> {/* About page */}
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
