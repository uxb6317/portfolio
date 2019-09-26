import React from 'react';

import './nav.style.scss';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='menu-items'>
        <ul className='items'>
          <li className='item'>
            <a href=''>Home</a>
          </li>
          <li className='item'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='item'>
            <a href=''>About</a>
          </li>
        </ul>
        <div className='social-media'>
          <a
            href='https://github.com/uxb6317'
            className='media'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github-square'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/ulziiorshikh-batdorj/'
            className='media'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
