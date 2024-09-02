// src/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet renders the current route's element
import Navbar from './Navbar'; // Import the Navbar component

function Layout() {
  return (
    <div>
      <Navbar /> {/* Navbar stays persistent across all pages */}
      <Outlet /> {/* Render the matched route component */}
    </div>
  );
}

export default Layout;