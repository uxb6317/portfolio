import React from 'react';
import { Element } from 'react-scroll';

import './projects.scss';

import PROJECTS_DATA from './PROJECTS_DATA';

import Project from './project/project';
import CarouselItem from '../shared/custom-carousel/carousel-item';
import CustomCarousel from '../shared/custom-carousel';

const Projects = () => {
  return (
    <Element name='projects' className='projects'>
      <div className='header red'>Projects</div>
      <div className='projects-container'>
        <CustomCarousel items={PROJECTS_DATA}>
          {PROJECTS_DATA.map((project, index) => (
            <CarouselItem currentItemIndex={index}>
              <Project key={project.name} {...project} />
            </CarouselItem>
          ))}
        </CustomCarousel>
      </div>
    </Element>
  );
};

export default Projects;
