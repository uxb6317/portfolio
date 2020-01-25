import React from 'react';

const LinkToOutside = ({ link, children }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};

export default LinkToOutside;
