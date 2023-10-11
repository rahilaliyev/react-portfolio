import React from 'react';

import { About } from './components/about';
import { Contact } from './components/contact';
import { MainSection } from './components/main-section';
import { Projects } from './components/projects';

export const Home = () => {
  return (
    <main>
      <MainSection />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};
