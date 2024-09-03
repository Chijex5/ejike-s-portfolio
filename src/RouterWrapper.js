// src/RouterWrapper.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RouterWrapper = ({ onNavigate, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleNavigation = () => {
      onNavigate();
    };

    const unblock = navigate.block((location) => {
      handleNavigation();
      return false; // Prevent navigation
    });

    return () => {
      unblock();
    };
  }, [navigate, onNavigate]);

  return <>{children}</>;
};

export default RouterWrapper;
