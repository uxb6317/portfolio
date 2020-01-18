import React from 'react';
import { Element } from 'react-scroll';

import './projects.scss';

import CustomCarousel from '../carousel';

import PROJECTS_DATA from './PROJECTS_DATA';
import Project from './project/project';

const Projects = () => {
  return (
    <Element name='projects' className='projects'>
      <div className='header red'>Projects</div>
      <div className='projects-container'>
        <CustomCarousel items={PROJECTS_DATA}>
          {PROJECTS_DATA.map(project => (
            <Project key={project.name} {...project} />
          ))}
        </CustomCarousel>
      </div>
    </Element>
  );
};

export default Projects;
