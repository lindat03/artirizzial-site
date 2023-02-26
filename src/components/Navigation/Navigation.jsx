import React from 'react';
import './Navigation.css';

function Navigation({bar_height}) {
  return (
    <div className="navigation-container">
      <div className="navigation-header">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="navigation-indicator" style={{height: `${bar_height}%`}}></div>
    </div>
  );
}

export default Navigation;
