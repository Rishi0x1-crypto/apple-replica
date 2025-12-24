import React from 'react';
import './App.css';

const LoadingSpinner = ({ className }) => {
  return (
    <div className={`loading-overlay ${className}`}>
      <div className="loading-container">
        <img 
          src="/images/apple logo.jpg" 
          alt="Loading..." 
          className="loading-logo"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
