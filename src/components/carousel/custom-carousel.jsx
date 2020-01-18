import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './custom-carousel.scss';

const CustomCarousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    if (currentSlide + 2 === children.length) return;
    setCurrentSlide(currentSlide + 1);
  };

  const prev = () => {
    if (currentSlide === 1) return;
    setCurrentSlide(currentSlide - 1);
  };

  const updateCurrentSlide = index => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className='custom-carousel'>
      <i
        style={{ opacity: currentSlide === 1 ? '0' : '1' }}
        className='fas fa-angle-left carousel-control'
        onClick={prev}
      />
      <Carousel
        centerMode
        centerSlidePercentage={100 / 3}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
      >
        {children}
      </Carousel>
      <i
        style={{
          opacity: currentSlide + 2 === children.length ? '0' : '1'
        }}
        onClick={next}
        className='fas fa-angle-right carousel-control'
      />
    </div>
  );
};

export default CustomCarousel;
