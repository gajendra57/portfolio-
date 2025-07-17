import React from 'react';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fadeIn">
            <img
              src="/gajendra%20singh%20copy%20copy.jpg"
              alt="Gajendra Singh Rajawat"
              className="w-32 h-32 mx-auto rounded-full border-4 border-purple-400 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp">
            <span className="text-white">Gajendra Singh</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Rajawat
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideUp delay-200">
            Software Engineer & Web Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 animate-slideUp delay-300">
            AI/ML Enthusiast | Crafting Digital Experiences
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slideUp delay-400">
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={16} className="text-purple-400" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={16} className="text-purple-400" />
              <span>gs0414536@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone size={16} className="text-purple-400" />
              <span>+91 95888 68607</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slideUp delay-500">
            <button
              onClick={scrollToNext}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Explore My Work
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToNext} className="text-purple-400 hover:text-purple-300 transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;