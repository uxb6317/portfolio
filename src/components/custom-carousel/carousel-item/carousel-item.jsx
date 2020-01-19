import React from 'react';

import './carousel-item.scss';

const CarouselItem = ({ children, currentSlideIndex, currentItemIndex }) => {
  return (
    <div
      className={`carousel-item ${currentSlideIndex === currentItemIndex &&
        'highlight'}`}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
