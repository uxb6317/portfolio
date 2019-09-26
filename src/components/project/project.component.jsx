import React from 'react';

import './project.style.scss';

const Project = ({ name, image, description }) => {
  return (
    <div className='project'>
      <div className='image-name'>
        <div className='image'>
          <img src={image} alt='project' />
        </div>
        <span className='name'>{name}</span>
      </div>
      <span className='description'>{description}</span>
    </div>
  );
};

export default Project;
