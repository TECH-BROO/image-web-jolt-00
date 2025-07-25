
import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-slate-900/90"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-[slide-in-right_4s_ease-in-out_infinite]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-[fade-in_2s_ease-in-out_infinite] opacity-60"></div>
        <div className="absolute top-60 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-[fade-in_3s_ease-in-out_infinite] opacity-40"></div>
        <div className="absolute bottom-40 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-[fade-in_2.5s_ease-in-out_infinite] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10">
            {/* Enhanced badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>Trusted by 500+ Companies</span>
            </div>
            
            {/* Enhanced heading */}
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>
            
            {/* Enhanced description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl font-medium">
              We deliver cutting-edge solutions and data-driven insights that accelerate your business growth and maximize ROI through innovative strategies.
            </p>
            
            {/* Enhanced button */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Enhanced stats */}
            <div className="pt-12 border-t border-white/20">
              <p className="text-sm text-slate-400 mb-6 font-medium">Trusted by industry leaders worldwide</p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-slate-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-sm text-slate-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-slate-300">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced dashboard mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-2xl border border-slate-200/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-500">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-inner">
                <div className="bg-white rounded-xl p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">Analytics Dashboard</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-slate-600 font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                      <div className="text-blue-600 font-semibold text-sm mb-1">Revenue</div>
                      <div className="text-2xl font-bold text-blue-900">$124K</div>
                      <div className="text-green-600 text-xs font-medium">+24% ↗</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                      <div className="text-purple-600 font-semibold text-sm mb-1">Growth</div>
                      <div className="text-2xl font-bold text-purple-900">89%</div>
                      <div className="text-green-600 text-xs font-medium">+12% ↗</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-3 rounded-full w-full"></div>
                    <div className="bg-gradient-to-r from-blue-200 to-purple-200 h-3 rounded-full w-3/4"></div>
                    <div className="bg-gradient-to-r from-green-200 to-emerald-200 h-3 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
