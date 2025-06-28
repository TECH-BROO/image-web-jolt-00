
import React from 'react';
import { Code, Palette, BarChart3, Globe, Smartphone, Shield, Sparkles } from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies and industry best practices.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive meaningful engagement.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand and generate qualified leads.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Advanced SEO techniques to boost search rankings and increase organic traffic significantly.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your business and customer data from threats.",
      gradient: "from-slate-600 to-slate-800",
      bgGradient: "from-slate-50 to-gray-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">What We Do Best</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with creative innovation to deliver solutions that drive measurable business results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${area.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-slate-200 transform group-hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className={`bg-gradient-to-r ${area.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {area.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}>
                    Learn more →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your goals and drive growth.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
