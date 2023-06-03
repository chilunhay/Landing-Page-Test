import React from 'react';
import './OurProject.css';
import HeadText from '../HeadText/HeadText';
import Button from '../Button/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectImage1 from '../../Assets/project-image-1.png';
import ProjectImage2 from '../../Assets/project-image-2.png';
import ProjectImage3 from '../../Assets/project-image-3.png';
import ProjectImage4 from '../../Assets/project-image-4.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const OurProject = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projectData = [
    {
      title: 'Quarter',
      text: 'Company Website',
      image: ProjectImage1,
    },
    {
      title: 'Hotelmania',
      text: 'Company Website',
      image: ProjectImage2,
    },
    {
      title: 'Furnishop',
      text: 'Company Website',
      image: ProjectImage3,
    },
    {
      title: 'Thrive CBD',
      text: 'Company Website',
      image: ProjectImage4,
    },
  ];

  return (
    <div className="our-project-container">
      <div className="our-project-text-container">
        <HeadText head="Our Projects" text="We have been providing great flooring solutions service." />
      </div>
      <div className="our-project-button-container">
        <Button buttonName="All" active="true" />
        <Button buttonName="Websites" />
        <Button buttonName="Social Media" />
        <Button buttonName="UI/UX" />
        <Button buttonName="Market" />
      </div>
      <div className="project-container">
        <div className="project-button-section">
          <div className="project-button prev-button">
            <FiChevronLeft />
          </div>
          <div className="project-button next-button">
            <FiChevronRight />
          </div>
        </div>
        <div className="project-section">
          <Carousel responsive={responsive} partialVisible>
            {projectData.map((data, key) => (
              <div className="project-info" key={key}>
                <img src={data.image} alt={data.image} />
                <div className="project-info-text">
                  <p>{data.title}</p>
                  <span>{data.text}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
