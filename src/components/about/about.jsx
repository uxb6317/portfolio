import React from 'react';
import { Element } from 'react-scroll';

import Experience from './experience';
import Toolbox from './toolbox';

import './about.scss';

const About = () => {
  return (
    <Element name='about' className='about'>
      <div className='header red'>About</div>
      <div className='container'>
        <div className='description'>
          My name is Ulzii, and I'm a Fullstack Web Developer with a passion for
          creating clean, intuitive, and dynamic user experiences. I've been
          developing websites and mobile applications for the past six years and
          received my Bachelor's degree in Web & Mobile Computing from Rochester
          Insitute of Technology.
        </div>
        <Experience />
        <Toolbox />
        <img className='selfie' src='./images/about.png' alt='selfie' />
      </div>
    </Element>
  );
};

export default About;
