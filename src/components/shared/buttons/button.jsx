import React from 'react';
import { Link } from 'react-scroll';

import './button.scss';

const Button = ({ children, to, offset }) => {
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
          {children}
        </Link>
      ) : (
        <button className='button'>{children}</button>
      )}
    </>
  );
};

Button.defaultProps = {
  offset: 0
};

export default Button;
