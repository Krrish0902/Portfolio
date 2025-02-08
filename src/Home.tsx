import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.15),transparent_60%)] z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-violet-500 font-semibold mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AnanthaKrishnan S
            <span className="block text-gray-500 mt-2">Web Developer</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Aspiring Computer Science student with a strong drive, actively seeking internship opportunities to put theoretical knowledge 
            into practice and acquire hands-on experience in the field of software development and engineering.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Krrish0902/DEEPFAKE_DETECTOR" 
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              View Projects
              <ExternalLink size={18}  />
            </a>
            <a 
              href="https://drive.google.com/file/d/1Tfm_Nj_7bWnWW1ojaGMdSl0-kWWSMye_/view?usp=sharing" 
              className="px-6 py-3 border border-gray-800 hover:border-violet-500 rounded-lg font-medium transition-colors duration-300 inline-flex items-center gap-2"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;