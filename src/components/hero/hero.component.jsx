import React from 'react';

import './hero.style.scss';

const Hero = ({ scrollToContent }) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <span className='hi yellow'>Hi</span>
        <span className='intro-text'>
          I'm a <span className='red'>Fullstack Web Developer</span>{' '}
          specializing in React & Node.
        </span>
        <div className='buttons'>
          <span
            onClick={e => scrollToContent(e.target.textContent)}
            className='button'
          >
            Projects
          </span>
          <span
            onClick={e => scrollToContent(e.target.textContent)}
            className='button'
          >
            About
          </span>
        </div>
      </div>
      <div className='hero-img'>
        <img src='./images/hero.png' alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
