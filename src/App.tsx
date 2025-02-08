import React from 'react';
import { Github, Linkedin, Mail, Code2, MonitorSmartphone, Database, ExternalLink, Download } from 'lucide-react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Project';
import Contact from './Contacts';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white ">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;