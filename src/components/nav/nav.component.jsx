import React from 'react';

import './nav.style.scss';

const Nav = ({ scrollToContent }) => {
  return (
    <div className='nav'>
      <div className='menu-items'>
        <ul className='items'>
          <li
            onClick={e => scrollToContent(e.target.textContent)}
            className='item'
          >
            Home
          </li>
          <li
            onClick={e => scrollToContent(e.target.textContent)}
            className='item'
          >
            Projects
          </li>
          <li
            onClick={e => scrollToContent(e.target.textContent)}
            className='item'
          >
            About
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
