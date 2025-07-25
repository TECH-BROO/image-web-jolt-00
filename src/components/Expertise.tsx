import React from 'react';
import { Code, Palette, BarChart3, Globe, Smartphone, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies and industry best practices.",
      features: ["React & Next.js", "Full-stack Solutions", "API Integration"],
      color: "blue"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive meaningful engagement.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand and generate qualified leads.",
      features: ["SEO Strategy", "Content Marketing", "Analytics"],
      color: "green"
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Advanced SEO techniques to boost search rankings and increase organic traffic significantly.",
      features: ["Technical SEO", "Content Strategy", "Link Building"],
      color: "orange"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "App Store Optimization"],
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your business and customer data from threats.",
      features: ["Security Audits", "Compliance", "Risk Assessment"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "group-hover:bg-blue-100"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "bg-purple-500", 
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "group-hover:bg-purple-100"
      },
      green: {
        bg: "bg-green-50",
        icon: "bg-green-500",
        text: "text-green-600", 
        border: "border-green-200",
        hover: "group-hover:bg-green-100"
      },
      orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-500",
        text: "text-orange-600",
        border: "border-orange-200", 
        hover: "group-hover:bg-orange-100"
      },
      indigo: {
        bg: "bg-indigo-50",
        icon: "bg-indigo-500",
        text: "text-indigo-600",
        border: "border-indigo-200",
        hover: "group-hover:bg-indigo-100"
      },
      red: {
        bg: "bg-red-50",
        icon: "bg-red-500",
        text: "text-red-600",
        border: "border-red-200",
        hover: "group-hover:bg-red-100"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that drive real business results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => {
            const colorClasses = getColorClasses(area.color);
            return (
              <div key={index} className="group relative">
                <div className={`bg-slate-800/50 backdrop-blur-sm ${colorClasses.border} border-2 rounded-2xl p-8 transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg hover:-translate-y-1`}>
                  {/* Icon */}
                  <div className={`${colorClasses.icon} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className={`w-4 h-4 ${colorClasses.text} mr-2 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <div className={`inline-flex items-center ${colorClasses.text} font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your goals and accelerate growth.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;