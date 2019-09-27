import React from 'react';

import './about.style.scss';

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='about'>
      <div className='header red'>About</div>
      <div className='container'>
        <div className='description'>
          My name is Ulzii and I'm a Fullstack Software Developer with a passion
          for creating clean, intuitive, and dynamic user experiences. I have
          been developing websites and mobile applications for the past 6 years
          and received my Bachelor's degree in Web & Mobile Computing from
          Rochester Insitute of Technology. My main go-to tools are JavaScript,
          React, and Node, but I sometimes develop in Python.
        </div>
        <div className='experiences'>
          <span className='sub-header red'>Industry Experience</span>
          <div className='experience'>
            <span className='name'>Paychex</span>
            <span className='city'>Rochester, NY</span>
            <span className='position'>Automation Testing Engineer</span>
          </div>
          <div className='experience'>
            <span className='name'>Paychex</span>
            <span className='city'>Rochester, NY</span>
            <span className='position'>Automation Testing Engineer</span>
          </div>
        </div>
        <div className='toolbox'>
          <span className='sub-header red'>Toolbox</span>
          <div className='tools'>
            <span className='tool'>React</span>
            <span className='tool'>Node</span>
            <span className='tool'>MongoDB</span>
            <span className='tool'>Redux</span>
            <span className='tool'>Express</span>
            <span className='tool'>Python</span>
          </div>
        </div>
        <div className='image'>
          <img src='./images/about.png' alt='' />
        </div>
      </div>
    </div>
  );
});

export default About;
