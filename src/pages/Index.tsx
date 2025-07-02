
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Expertise from '../components/Expertise';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
