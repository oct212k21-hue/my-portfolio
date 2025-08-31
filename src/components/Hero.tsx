import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const roles = ['Software Developer', 'Backend Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        // Pause after typing is complete
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && updatedText === '') {
        // Move to the next role after deleting
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <main id="about" className="relative px-6 py-12 md:px-12 lg:px-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-48 w-1 h-32 bg-orange-400 rotate-45 opacity-60"></div>
        <div className="absolute top-60 right-32 w-1 h-24 bg-orange-400 rotate-12 opacity-40"></div>
        <div className="absolute bottom-32 right-64 w-1 h-20 bg-orange-400 rotate-75 opacity-50"></div>
        <div className="absolute top-96 left-32 w-px h-16 bg-purple-400 rotate-45 opacity-30"></div>
        <div className="absolute bottom-48 left-48 w-px h-12 bg-purple-400 rotate-12 opacity-40"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-40 right-80 w-2 h-2 bg-orange-400 rotate-45 opacity-60"></div>
        <div className="absolute top-80 right-96 w-1 h-1 bg-purple-400 opacity-50"></div>
        <div className="absolute bottom-60 left-80 w-1 h-1 bg-orange-400 opacity-40"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I am<br />
              <span className="text-white">Hanuman Sai Majeti</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-purple-400 font-semibold mt-4 h-12 flex items-center">
              <span>{text}</span>
              <span className="animate-blink border-l-2 border-purple-400 h-8 ml-1" aria-hidden="true"></span>
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            I’m a Java Backend Developer with 2 years of experience designing and delivering scalable microservices and RESTful APIs using Spring Boot. I have a proven track record of building high-quality solutions, developing new features, optimizing performance, and enhancing product capabilities. Skilled in modern backend technologies such as Kafka, Docker, Kubernetes, and CI/CD pipelines, I’m actively seeking Software Developer or Backend Developer roles where I can apply my expertise, drive innovation, and continue growing professionally while contributing to impactful products.
          </p>

          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1n_WXsHh6sP1kfqRsBz0h78RZDFRj3BML/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Check Resume
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              <img 
                src="https://i.postimg.cc/hvH6SN0n/1000287815.jpg"
                alt="Hanuman Sai Majeti - Java Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative ring around image */}
            <div className="absolute -inset-4 rounded-full border border-purple-500 opacity-20"></div>
            <div className="absolute -inset-8 rounded-full border border-purple-400 opacity-10"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
