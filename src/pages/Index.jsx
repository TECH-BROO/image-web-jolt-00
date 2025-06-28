
import React from 'react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Expertise from '../components/Expertise';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import LatestPosts from '../components/LatestPosts';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Process />
      <Expertise />
      <Team />
      <Testimonials />
      <Contact />
      <LatestPosts />
    </div>
  );
};

export default Index;
