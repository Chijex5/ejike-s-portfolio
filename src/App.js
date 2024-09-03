// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './Home'; // Home component with animation effect
import About from './About'
import UnderConstruction from './UnderConstruction';
import Blog from './Blog';
import Project from './Project';


// Define your custom console art
// ASCII Art: "C U"
// Cool ASCII Art for Portfolio Console
const portfolioArt = `
  ______     ______     __   __     ______     ______    
 /\\  == \\   /\\  __ \\   /\\ "-.\\ \\   /\\  __ \\   /\\  ___\\   
 \\ \\  __<   \\ \\ \\/\\ \\  \\ \\ \\-.  \\  \\ \\ \\/\\ \\  \\ \\  __\\   
  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\\\"\\_\\  \\ \\_____\\  \\ \\_____\\ 
   \\/_/ /_/   \\/_____/   \\/_/ \\/_/   \\/_____/   \\/_____/ 
                                                          
  __        __     ______     __     __   __     ______    
 /\\ \\      /\\ \\   /\\  ___\\   /\\ \\   /\\ "-.\\ \\   /\\  ___\\   
 \\ \\ \\____ \\ \\ \\  \\ \\___  \\  \\ \\ \\  \\ \\ \\-.  \\  \\ \\___  \\  
  \\ \\_____\\\\ \\_\\  \\/\\_____\\  \\ \\_\\  \\ \\_\\\\"\\_\\  \\/\\_____\\ 
   \\/_____/ \\/_/   \\/_____/   \\/_/   \\/_/ \\/_/   \\/_____/ 
                                                           
`;

console.log(portfolioArt);



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
