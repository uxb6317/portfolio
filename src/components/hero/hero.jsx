import React from 'react';
import { Element } from 'react-scroll';

import ButtonGroup from '../shared/buttons/buttonGroup';
import Button from '../shared/buttons/button';

import './hero.scss';

const Hero = () => {
  return (
    <Element name='home' className='hero'>
      <div className='hero-text'>
        <span className='hi yellow'>Hi</span>
        <span className='intro-text'>
          I'm a <span className='red'>Fullstack Web Developer</span>{' '}
          specializing in React & Node.
        </span>
        <ButtonGroup>
          <Button to='projects' offset={-100}>
            Projects
          </Button>
          <Button to='about' offset={-100}>
            About
          </Button>
        </ButtonGroup>
      </div>
      <div className='hero-img'>
        <img src='./images/hero.png' alt='hero' />
      </div>
    </Element>
  );
};

export default Hero;
