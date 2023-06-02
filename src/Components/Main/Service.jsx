import React from 'react';
import './Service.css';
import ServiceIcon1 from '../../Assets/service-icon-1.png';
import ServiceIcon2 from '../../Assets/service-icon-2.png';
import ServiceIcon3 from '../../Assets/service-icon-3.png';
import ServiceIcon4 from '../../Assets/service-icon-4.png';
import HeadText from '../HeadText/HeadText';

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-text-container">
        <HeadText
          head="Services"
          text="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."
        />
      </div>
      <div className="service-content-container">
        <div className="grid-container">
          <div className="grid-item">
            <div className="grid-item-image-container">
              <img src={ServiceIcon1} alt="ServiceIcon" />
            </div>
            <div className="grid-item-content">
              <p>Branding Idendity</p>
              <span>Our support team will get assistance from AI-powered.</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-image-container">
              <img src={ServiceIcon2} alt="ServiceIcon" />
            </div>
            <div className="grid-item-content">
              <p>Branding consult</p>
              <span>Our support team will get assistance from AI-powered.</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-image-container">
              <img src={ServiceIcon1} alt="ServiceIcon" />
            </div>
            <div className="grid-item-content">
              <p>Branding Idendity</p>
              <span>Our support team will get assistance from AI-powered.</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-image-container">
              <img src={ServiceIcon1} alt="ServiceIcon" />
            </div>
            <div className="grid-item-content">
              <p>Branding Idendity</p>
              <span>Our support team will get assistance from AI-powered.</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-image-container">
              <img src={ServiceIcon3} alt="ServiceIcon" />
            </div>
            <div className="grid-item-content">
              <p>web development</p>
              <span>Our support team will get assistance from AI-powered.</span>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-image-container">
              <img src={ServiceIcon4} alt="ServiceIcon" />
            </div>
            <div className="grid-item-content">
              <p>market anlysis</p>
              <span>Our support team will get assistance from AI-powered.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
