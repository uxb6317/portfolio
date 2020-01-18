import React from 'react';
import { Link } from 'react-scroll';

import './button.scss';

const Button = ({ value, to, offset }) => {
  return (
    <>
      {to ? (
        <Link
          to={to}
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
          className='button'
        >
          {value}
        </Link>
      ) : (
        <a className='button'>{value}</a>
      )}
    </>
  );
};

Button.defaultProps = {
  offset: 0
};

export default Button;
