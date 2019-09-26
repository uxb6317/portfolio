import React from 'react';

import Project from '../project/project.component';

import PROJECTS_DATA from './projects-list.data';

import './projects-list.style.scss';

const ProjectsList = () => {
  return (
    <div className='projects-list'>
      <div className='header red'>Projects</div>
      <div className='projects-container'>
        {PROJECTS_DATA.map(project => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
