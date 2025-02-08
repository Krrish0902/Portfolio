import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-900">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500">© 2025 AnanthaKrishnan. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/Krrish0902" className="text-gray-500 hover:text-violet-500 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ananthakrrishnan" className="text-gray-500 hover:text-violet-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://mail.google.com/" className="text-gray-500 hover:text-violet-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;