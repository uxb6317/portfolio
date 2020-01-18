import React from 'react';

import './project.scss';

const Project = ({ name, image, description, url }) => {
  return (
    <div className='project'>
      <div onClick={() => window.open(url, '_blank')} className='image-name'>
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
