import pp from './Assets/Profile_pic.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src={pp} 
            alt="Profile" 
            className="rounded-lg shadow-2xl w-full sm:w-2/3 h-auto object-cover mx-auto sm:ml-24 sm:mr-10"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
           A web developer and tech enthusiast passionate about building innovative and user-friendly applications.
          Currently pursuing my BTech, I enjoy learning new technologies and solving real-world problems through code. 
          Always eager to collaborate and explore new ideas!
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