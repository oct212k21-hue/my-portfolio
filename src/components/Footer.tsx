import React from 'react';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-8">
          Hanuman Sai Majeti
        </h2>

        {/* Navigation Links */}
        <nav className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg font-medium"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg font-medium"
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/hanuman-sai-majeti-07a856193/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400" />
          </a>
          
          <a 
            href="https://www.instagram.com/hanuman_sai_majeti?igsh=MW44b3RxZ3ZpZXA2Zg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400" />
          </a>
          
          <a 
            href="https://x.com/HANUMANSAI86975?t=0n4pHpcRYgztvWpRPYfHjw&s=35" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400" />
          </a>
          
          <a 
            href="mailto:hanumansaimajeti@gmail.com"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <Mail className="w-5 h-5 text-gray-400 hover:text-purple-400" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-gray-500 text-sm">
            © 2025 Hanuman Sai Majeti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
