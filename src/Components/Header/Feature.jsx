import React from 'react';
import './Feature.css';
import Feature1 from '../../Assets/feature-icon-1.png';
import Feature2 from '../../Assets/feature-icon-2.png';
import Feature3 from '../../Assets/feature-icon-3.png';

const Feature = () => {
  const featureData = [
    {
      image: Feature1,
      title: 'Grow your audience',
      text: 'Find new customers and build your email list with lead generation ..',
    },
    {
      image: Feature2,
      title: 'Boost online sales',
      text: 'Market your ecommerce business and deliver experiences ..',
    },
    {
      image: Feature3,
      title: 'Sell your knowledge',
      text: 'Build a following, engage them with your content ..',
    },
  ];
  return (
    <div className="feature-container">
      <div className="feature-content">
        {featureData.map((data, key) => (
          <div className="feature-info" key={key}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
