import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-purple-400">G</span>ajendra
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/gajendra57" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gajendra-singh-a00473372" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/___gajsa_banna___/" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-purple-500/20">
            <nav className="flex flex-col space-y-4 p-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-purple-500/20">
                <a href="https://github.com/gajendra57" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/gajendra-singh-a00473372" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/___gajsa_banna___/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;