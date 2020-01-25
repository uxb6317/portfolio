import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './custom-carousel.scss';

const CustomCarousel = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    Math.floor(children.length / 2)
  );

  const updateCurrentSlide = index => {
    if (currentSlideIndex !== index) {
      setCurrentSlideIndex(index);
    }
  };

  return (
    <div className='custom-carousel'>
      <Carousel
        centerMode
        centerSlidePercentage={55}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        transitionTime={400}
        selectedItem={currentSlideIndex}
        onClickItem={updateCurrentSlide}
        onChange={updateCurrentSlide}
      >
        {/* pass in the current slide index to each child */}
        {React.Children.map(children, child =>
          React.cloneElement(child, { currentSlideIndex })
        )}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
