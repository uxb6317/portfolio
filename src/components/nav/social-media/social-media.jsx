import React from 'react';

import './social-media.scss';
import LinkToOutside from '../../shared/link-to-outside/link-to-outside';

const SocialMedia = ({ icon, link }) => {
  return (
    <LinkToOutside link={link}>
      <i className={`media ${icon}`} />
    </LinkToOutside>
  );
};

export default SocialMedia;
