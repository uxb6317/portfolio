import React from 'react';

import './nav.scss';

import NavLink from './nav-link';
import SocialMedia from './social-media';

const Nav = () => {
  return (
    <div className='nav'>
      <ul className='nav-links'>
        <NavLink value='Home' to='home' />
        <NavLink value='Projects' to='projects' offset={-100} />
        <NavLink value='About' to='about' offset={-100} />
      </ul>
      <div className='social-media'>
        <SocialMedia
          link='https://github.com/uxb6317'
          icon='fab fa-github-square'
        />
        <SocialMedia
          link='https://www.linkedin.com/in/ulziiorshikh-batdorj/'
          icon='fab fa-linkedin'
        />
      </div>
    </div>
  );
};

export default Nav;
