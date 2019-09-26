import React from 'react';

import './nav.style.scss';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='menu-items'>
        <ul className='items'>
          <li className='item'>
            <a className='active' href=''>
              Home
            </a>
          </li>
          <li className='item'>
            <a href=''>Projects</a>
          </li>
          <li className='item'>
            <a href=''>About</a>
          </li>
        </ul>
        <div className='social-media'>
          <span className='media'>
            <i class='fab fa-github-square'></i>
          </span>
          <span className='media'>
            <i class='fab fa-linkedin'></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
