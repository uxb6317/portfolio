import React from 'react';

import './project.scss';

const Project = ({ image, description, url }) => {
  return (
    <div className='project'>
      <div className='image'>
        <img src={image} alt='project' />
      </div>
      <span className='description'>{description}</span>
    </div>
  );
};

export default Project;

// onClick={() => window.open(url, '_blank')}
