import React from 'react';
import './Feedback.css';

const Feedback = ({ title, items }) => {
  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      <ul className="list-items">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <div className="list-item-text">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
