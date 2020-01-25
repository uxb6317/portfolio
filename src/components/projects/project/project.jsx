import React from 'react';

import Button from '../../shared/buttons/button';

import './project.scss';
import Tool from '../tool';
import LinkToOutside from '../../shared/link-to-outside/link-to-outside';

const Project = ({ image, description, url, tools }) => {
  return (
    <div className='project'>
      <div className='image'>
        <img src={image} alt='project' />
      </div>
      <div className='content'>
        <span className='description'>{description}</span>
        <div className='tools-links'>
          <div className='tools'>
            {tools.map(tool => (
              <Tool id={tool} name={tool} />
            ))}
          </div>
          <div className='links'>
            <LinkToOutside link='https://github.com/uxb6317'>
              <img src='./images/tools/github.svg' alt='github logo' />
            </LinkToOutside>
            <LinkToOutside link={url}>
              <Button>Visit</Button>
            </LinkToOutside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

// onClick={() => window.open(url, '_blank')}
