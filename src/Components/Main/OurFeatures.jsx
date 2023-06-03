import React from 'react';
import './OurFeatures.css';
import HeadText from '../HeadText/HeadText';
import OurImage1 from '../../Assets/our-icon-1.png';
import OurImage2 from '../../Assets/our-icon-2.png';
import OurImage3 from '../../Assets/our-icon-3.png';
import OurImage4 from '../../Assets/our-icon-4.png';

const OurFeatures = () => {
  const ourFeaturesData = [
    {
      title: 'Choosing a Service',
      text: 'Choosing an accountant that matches your needs',
      image: OurImage1,
    },
    {
      title: 'Our Clients Say',
      text: 'Read the reviews from some of our satisfied clients',
      image: OurImage2,
    },
    {
      title: 'Initial Consultation',
      text: 'Understanding your accountancy requirements',
      image: OurImage3,
    },
    {
      title: 'Request a Callback',
      text: 'Lets talk at a more convenient time for you',
      image: OurImage4,
    },
  ];
  return (
    <div className="our-features-container">
      <div className="our-features-text-container">
        <HeadText
          head="Our Features"
          text="Unleash your creativety with a visual collaboration plattorm that enables effective ideation"
        />
      </div>
      <div className="our-features-content-container">
        {ourFeaturesData.map((data, key) => (
          <div className="our-features-info" key={key}>
            <div className="our-features-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="our-features-info-content-container">
              <p>{data.title}</p>
              <span>{data.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="our-features-learn-more-link">
        <a href="/">Learn more</a>
        <span>{` >`}</span>
      </div>
    </div>
  );
};

export default OurFeatures;
