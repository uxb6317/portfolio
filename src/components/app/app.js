import React from 'react';

import Nav from '../nav';
import Hero from '../hero';
import Projects from '../projects';
import About from '../about';
import Footer from '../footer/footer.component';

import './app.scss';

const App = () => (
  <div className='App'>
    <Nav />
    <Hero />
    <Projects />
    <About />
    <Footer />
  </div>
);

export default App;
