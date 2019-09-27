import React, { useRef } from 'react';

import Nav from './components/nav/nav.component';
import Hero from './components/hero/hero.component';
import ProjectsList from './components/projects-list/projects-list.component';
import About from './components/about/about.component';
import Footer from './components/footer/footer.component';

import './App.scss';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  const scrollToContent = content => {
    switch (content) {
      case 'Home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div ref={homeRef} className='App'>
      <Nav scrollToContent={scrollToContent} />
      <Hero scrollToContent={scrollToContent} />
      <ProjectsList ref={projectsRef} />
      <About ref={aboutRef} />
      <Footer />
    </div>
  );
}

export default App;
