import React, { useEffect } from 'react';
import './Navigation.css';

function Navigation({ bar_height }) {


  let progress = "navigation-indicator"
  if(bar_height>97){
    progress = "navigation-indicator-complete"
  }
  return (
    <div className="navigation-container">
      <div className="navigation-bar-container">
        <div className={progress} style={{height: `${bar_height}%`}}></div>
      </div>
      {/* <div className={progress} style={{height: `${bar_height}%`}}></div> */}
      <div className="result-explanation">
        <p>Current Score: {bar_height}</p>
      </div>
    </div>
  );
}

export default Navigation;
