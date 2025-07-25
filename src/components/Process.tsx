import React from 'react';
import { Search, Zap, Target, TrendingUp, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Research",
      description: "Deep dive into your business goals, market analysis, and competitive landscape to build a solid strategic foundation.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Strategy & Planning",
      description: "Craft a comprehensive roadmap with data-driven strategies tailored to your unique market position and objectives.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Implementation",
      description: "Execute solutions with precision and agility, ensuring every detail aligns perfectly with your business goals.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Growth & Optimization",
      description: "Continuous monitoring, testing, and optimization to maximize ROI and ensure sustained business growth.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Proven Process</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures consistent results and exceptional outcomes for every project we undertake
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-slate-700/50 transform group-hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Icon */}
                <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
                
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-600 to-transparent"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl inline-flex items-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <span className="font-semibold">Ready to get started?</span>
            <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">Let's talk</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;