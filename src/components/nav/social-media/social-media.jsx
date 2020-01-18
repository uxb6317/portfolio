import React from 'react';

import './social-media.scss';

const SocialMedia = ({ icon, link }) => {
  return (
    <a href={link} className='media' target='_blank' rel='noopener noreferrer'>
      <i className={icon} />
    </a>
  );
};

export default SocialMedia;
