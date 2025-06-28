
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-red-50 rounded-full opacity-30 blur-2xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
              <span>Welcome</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Better Insights For
              <span className="text-red-500 block">Business Growth</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              We help businesses grow through data-driven insights and innovative solutions that deliver real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium inline-flex items-center space-x-2 hover:bg-gray-50">
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </Button>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading companies</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">BRAND</div>
                <div className="text-2xl font-bold text-gray-400">COMPANY</div>
                <div className="text-2xl font-bold text-gray-400">CORP</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">Dashboard</div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                  <div className="bg-gray-100 h-4 rounded w-1/2"></div>
                  <div className="bg-red-100 h-4 rounded w-2/3"></div>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="text-red-600 font-semibold">Growth: +24%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
