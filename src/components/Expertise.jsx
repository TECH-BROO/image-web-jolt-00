
import React from 'react';
import { Code, Palette, BarChart3, Globe, Smartphone, Shield } from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that enhance user experience and drive engagement."
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility and drive qualified leads."
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve search rankings and organic traffic."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Robust security solutions to protect your business and customer data from threats."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical excellence with creative innovation to deliver solutions that drive real business results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-red-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <area.icon className="w-7 h-7 text-red-500" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
