import React from 'react';
import './HeadText.css';

const HeadText = (props) => {
  return (
    <div className="head-text-section">
      <div className="head-title">{props.head}</div>
      <div className="head-text">{props.text}</div>
    </div>
  );
};

export default HeadText;
