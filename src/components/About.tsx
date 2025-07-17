import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software engineer and web developer with a deep love for creating 
                innovative digital solutions. Currently pursuing my BCA degree, I specialize in 
                full-stack development and AI/ML technologies.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to solve real-world 
                problems through code. I enjoy working with modern frameworks and exploring the 
                possibilities of artificial intelligence.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                  Creative Thinker
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                  Team Player
                </span>
              </div>
            </div>

            {/* Right Column - Education */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-purple-500/20 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <GraduationCap className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-400">
                  Bachelor of Computer Applications (BCA)
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Jagannath University, Jaipur</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} className="text-green-400" />
                    <span>Expected: 2026</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-sm text-purple-300">
                    Currently in my final year, focusing on advanced software engineering 
                    concepts and AI/ML applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;