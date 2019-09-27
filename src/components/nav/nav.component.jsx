import React from 'react';

import './nav.style.scss';

const Nav = ({ scrollToContent }) => {
  // const [navScrollPos, setNavScrollPos] = useState(window.pageYOffset);
  // const navRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [navScrollPos]);

  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;
  //   if (navScrollPos > currentScrollPos) {
  //     navRef.current.style.top = '0';
  //   } else {
  //     navRef.current.style.top = '-4rem';
  //   }
  //   setNavScrollPos(currentScrollPos);
  // };

  const handleClick = e => {
    scrollToContent(e.target.textContent);
  };

  return (
    <div className='nav'>
      <div className='menu-items'>
        <ul className='items'>
          <li onClick={handleClick} className='item'>
            Home
          </li>
          <li onClick={handleClick} className='item'>
            Projects
          </li>
          <li onClick={handleClick} className='item'>
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
