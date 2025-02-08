import pp from './assets/Profile_pic.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src={pp} 
            alt="Profile" 
            className="rounded-lg shadow-2xl w-2/3 h-auto object-cover ml-32 mr 10"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            With over 5 years of experience in web development, I've had the privilege of working with diverse clients
            and technologies. My journey in tech started with a passion for creating user-centric solutions that make
            a real difference.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <ul className="space-y-2 text-gray-400">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Machine Learning</li>
                <li>API Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;