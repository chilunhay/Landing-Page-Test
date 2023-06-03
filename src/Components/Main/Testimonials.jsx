import React, { useState } from 'react';
import './Testimonials.css';
import HeadText from '../HeadText/HeadText';
import TestImage from '../../Assets/test-image-1.png';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CircleIcon from '@mui/icons-material/Circle';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: 'Stephan Louis',
      subTitle: 'Developer',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: TestImage,
    },
    {
      title: 'Stephan Louis',
      subTitle: 'Developer',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: TestImage,
    },
    {
      title: 'Stephan Louis',
      subTitle: 'Developer',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: TestImage,
    },
    {
      title: 'Stephan Louis',
      subTitle: 'Developer',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: TestImage,
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="test-container">
      <div className="test-text-container">
        <HeadText
          head="What our Customer say"
          text="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks."
        />
      </div>

      <div className="test-info-container">
        <div className="test-info-button-container">
          <div className="test-info-button-prev">
            <button
              className="button-arrow-prev"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              <span className="material-symbols-outlined">
                <FiChevronLeft />
              </span>
            </button>
          </div>

          <div className="test-info-button-next">
            <button
              className="button-arrow-next"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              <span className="material-symbols-outlined">
                <FiChevronRight />
              </span>
            </button>
          </div>
        </div>
        <div className="carousel">
          <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
            {items.map((item, key) => {
              return (
                <div className="carousel-item" key={key}>
                  <div className="carousel-item-box">
                    <img className="carousel-img" src={item.image} alt="test" />
                    <div className="carousel-item-title">{item.title}</div>
                    <div className="carousel-item-sub-title">{item.subTitle}</div>
                    <div className="carousel-item-text">{item.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="carousel-buttons">
            <div className="indicators">
              {items.map((item, index) => {
                return (
                  <button
                    className="indicator-buttons"
                    key={index}
                    onClick={() => {
                      updateIndex(index);
                    }}
                  >
                    <span className={`${index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'}`}>
                      <CircleIcon />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
