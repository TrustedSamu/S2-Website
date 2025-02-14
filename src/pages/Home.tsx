import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Contact />
    </main>
  );
};

export default Home; 