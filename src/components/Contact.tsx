import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-16 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">Get In Touch</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Let's connect!
        </p>

        {/* Contact Card */}
        <div className="bg-white text-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-4 text-center">
            Let's work together
          </h3>
          <p className="text-slate-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            As a Software Developer with expertise in Java backend development, I'm passionate about building scalable systems and contributing to innovative projects. Whether you're looking for collaboration, have questions about my work, or want to discuss opportunities, I'd love to hear from you.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            {/* Email Section */}
            <a href="mailto:hanumansaimajeti@gmail.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 transition-colors duration-200">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">Email</p>
                <p className="text-slate-500">hanumansaimajeti@gmail.com</p>
              </div>
            </a>
          </div>
          
          {/* Connect Section */}
          <div className="text-center mb-10">
            <h4 className="text-xl font-semibold text-slate-700 mb-6">Connect with me</h4>
            <div className="flex justify-center items-center gap-4">
              <a 
                href="https://github.com/hanumansaimajet"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium text-slate-700 transition-all duration-200 border border-slate-200"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/hanuman-sai-majeti-07a856193/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg font-medium text-blue-700 transition-all duration-200 border border-blue-200"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-6">
            <p className="flex items-center justify-center gap-2 text-slate-500">
              <Heart className="w-5 h-5 text-purple-400" />
              Ready to collaborate and build something amazing together!
              <Heart className="w-5 h-5 text-purple-400" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
