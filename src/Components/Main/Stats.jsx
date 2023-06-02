import React from 'react';
import './Stats.css';

const Stats = () => {
  const statsData = [
    {
      title: '85%',
      text: 'manage communication more efficiently',
    },
    {
      title: '95%',
      text: 'improve communication with customers and clients',
    },
    {
      title: '75%',
      text: 'average improvement in team efficiency',
    },
  ];
  return (
    <div className="stats-wrapper">
      <div className="stats-heading">Journey of our Success</div>
      <div className="stats-content">
        {statsData.map((data, key) => (
          <div className="stats-info" key={key}>
            <div className="stats-percent">{data.title}</div>
            <div className="stats-text">{data.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
