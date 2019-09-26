import React from 'react';

import Nav from './components/nav/nav.component';
import Hero from './components/hero/hero.component';
import ProjectsList from './components/projects-list/projects-list.component';
import About from './components/about/about.component';
import Footer from './components/footer/footer.component';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <ProjectsList />
      <About />
      <Footer />
    </div>
  );
}

export default App;
