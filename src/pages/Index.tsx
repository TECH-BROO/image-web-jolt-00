
import React from 'react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Expertise from '../components/Expertise';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Process />
      <Expertise />
      <Contact />
    </div>
  );
};

export default Index;
