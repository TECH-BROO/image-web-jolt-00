
import React from 'react';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1f7?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years in digital transformation and strategic business growth.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Technology architect specializing in scalable systems and emerging tech solutions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Emma Davis",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer passionate about creating memorable user experiences.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "James Wilson",
      role: "Head of Growth",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Growth strategist with proven expertise in scaling businesses and driving ROI.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 text-green-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Meet Our Team</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">The Minds Behind Success</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience and fresh perspectives to drive innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-slate-200 transform group-hover:-translate-y-3">
                {/* Image with gradient overlay */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <div className={`inline-flex items-center bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold mb-4`}>
                    {member.role}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                  
                  {/* Social links */}
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors group/btn">
                      <Linkedin className="w-5 h-5 text-slate-600 group-hover/btn:text-blue-600 transition-colors" />
                    </button>
                    <button className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors group/btn">
                      <Twitter className="w-5 h-5 text-slate-600 group-hover/btn:text-blue-400 transition-colors" />
                    </button>
                    <button className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors group/btn">
                      <Mail className="w-5 h-5 text-slate-600 group-hover/btn:text-green-600 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Join team section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Join Our Amazing Team</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
