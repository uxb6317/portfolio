import React from 'react';
import { Link } from 'react-scroll';

import './nav-link.scss';

const DURATION = 500;

const NavLink = ({ to, offset, value }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={DURATION}
      className='item'
    >
      {value}
    </Link>
  );
};

NavLink.defaultProps = {
  offset: 0
};

export default NavLink;
