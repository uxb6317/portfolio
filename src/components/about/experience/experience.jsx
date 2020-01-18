import React from 'react';

import './experience.scss';

import { EXPERIENCE_DATA } from './EXPERIENCE_DATA';

const Experience = () => {
  return (
    <div className='experiences'>
      <span className='sub-header red'>Industry Experience</span>
      {EXPERIENCE_DATA.map(({ name, location, position }) => (
        <div className='experience'>
          <span className='name'>{name}</span>
          <span className='city'>{location}</span>
          <span className='position'>{position}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
