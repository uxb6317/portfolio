import React from 'react';

import './hero.style.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <span className='hi yellow'>Hi</span>
        <span className='intro-text'>
          I'm a <span className='red'>Fullstack Web Developer</span>{' '}
          specializing in React & Node.
        </span>
        <div className='buttons'>
          <a href='' className='button'>
            Projects
          </a>
          <a href='' className='button'>
            About
          </a>
        </div>
      </div>
      <div className='hero-img'>
        <img src='./images/hero.png' alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
