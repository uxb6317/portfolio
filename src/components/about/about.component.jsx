import React from 'react';

import './about.style.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='header red'>About</div>
      <div className='container'>
        <div className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          pariatur reprehenderit perspiciatis praesentium consequuntur sed
          dolorem error nisi, aliquid natus officiis veniam iure voluptas ipsam
          ducimus explicabo esse ut vitae.
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
};

export default About;
