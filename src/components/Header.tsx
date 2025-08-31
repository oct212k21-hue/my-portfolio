import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full px-6 py-4 md:px-12 lg:px-16 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors duration-200">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition-colors duration-200">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-purple-400 transition-colors duration-200">Experience</button>
          <button onClick={() => scrollToSection('education')} className="hover:text-purple-400 transition-colors duration-200">Education</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors duration-200">Contact</button>
        </div>

        {/* LinkedIn Profile Button */}
        <div>
          <a
            href="https://www.linkedin.com/in/hanuman-sai-majeti-07a856193/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-500 text-purple-400 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition-all duration-200"
          >
            LinkedIn Profile
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
