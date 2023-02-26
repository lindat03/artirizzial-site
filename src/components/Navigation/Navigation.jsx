import React from 'react';
import './Navigation.css';

function Navigation({bar_height}) {
  let progress = "navigation-indicator"
  if(bar_height>97){
    progress = "navigation-indicator-complete"
  }
  return (
    <div className="navigation-container">
      {/* <div className="navigation-header">
        <img src="logo.png" alt="Logo" />
      </div> */}
      <div className={progress} style={{height: `${bar_height}%`}}></div>

    </div>
  );
}

export default Navigation;
