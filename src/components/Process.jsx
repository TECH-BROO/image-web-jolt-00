
import React from 'react';
import { Search, Zap, Target, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Research",
      description: "We start by understanding your business goals and analyzing market opportunities to create a solid foundation."
    },
    {
      icon: Zap,
      title: "Strategy",
      description: "Our team develops a comprehensive strategy tailored to your unique needs and market position."
    },
    {
      icon: Target,
      title: "Execute",
      description: "We implement solutions with precision, ensuring every detail aligns with your business objectives."
    },
    {
      icon: TrendingUp,
      title: "Optimize",
      description: "Continuous monitoring and optimization to ensure maximum ROI and sustained growth for your business."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that delivers consistent results for businesses of all sizes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-red-200">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <step.icon className="w-8 h-8 text-red-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-red-200"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
