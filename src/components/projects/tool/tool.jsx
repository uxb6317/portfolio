import React from 'react';

import './tool.scss';

const Tool = ({ name }) => {
  return (
    <img
      className='project-tool'
      src={`./images/tools/${name}.svg`}
      alt={`${name} logo`}
    />
  );
};

export default Tool;
