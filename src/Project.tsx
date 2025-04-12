import React from 'react';

const Project = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="flex md:grid-cols-3 gap-8 sm:ml-16">
          {[
            {
              title: "Artist Discovery App",
              description: "A React Native based app connecting music lovers with local artists, enabling direct contact without intermediaries.",
              image: "https://images.pexels.com/photos/22185/pexels-photo.jpg",
              tech: ["React Native", "Supabase", "TypeScript"],
              link: "https://github.com/Krrish0902/APP" // Add the link to the project
            },
            {
              title: "DeepFake Detection Tool",
              description: "A React-based web app and Chrome extension leveraging a MobileNetV2 model to detect deepfake images with 77% accuracy.",
              image: "https://aimresearch.co/wp-content/uploads/2024/06/5-AI-DeepFake-Detector-Tools-for-2024-1.jpg",
              tech: ["React", "Python Flask", "CNN"],
              link: "https://github.com/Krrish0902/DEEPFAKE_DETECTOR" // Add the link to the project
            },
            {
              title: "Cache Mapping Simulator",
              description: "Java-based Cache Simulator with a GUI to model Direct Mapped, Fully Associative, and Set Associative caching.",
              image: "https://pikuma.com/images/blog/understanding-computer-cache/thumbnail-990x540.jpg",
              tech: ["Java", "Swing"],
              link: "https://github.com/Krrish0902/DSAproject" // Add the link to the project
            },
          ].map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-950">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-violet-500/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;