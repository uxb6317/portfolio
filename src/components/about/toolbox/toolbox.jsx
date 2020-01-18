import React from 'react';

import './toolbox.scss';

const tools = ['React', 'Node', 'MongoDB', 'Redux', 'Express', 'Python'];

const Toolbox = () => {
  return (
    <div className='toolbox'>
      <span className='sub-header red'>Toolbox</span>
      <div className='tools'>
        {tools.map(tool => (
          <span className='tool' key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Toolbox;
