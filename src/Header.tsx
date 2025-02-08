import React from 'react';

const Header = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-violet-500">Krrish.dev</a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-400 hover:text-violet-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-violet-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-violet-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;