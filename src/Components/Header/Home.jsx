import React from 'react';
import BannerBackground from '../../Assets/header-image.png';
import BannerImage from '../../Assets/banner-image.png';
import Navbar from './Navbar';
import Feature from './Feature';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Find & Hire Expert Freelancers</h1>
          <div className="primary-text">
            Work with the best freelance talent from around the world on our secure flexible and cost-effective
            platform.
          </div>
          <div className="button-section">
            <button className="contact-button">Contact us</button>
            <button className="learn-button">Learn more</button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="BannerImage" />
        </div>
      </div>
      <Feature />
    </div>
  );
};

export default Home;
