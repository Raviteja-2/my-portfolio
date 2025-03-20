import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const GithubIcon = FaGithub as React.ElementType;
const ExternalLinkAltIcon = FaExternalLinkAlt  as React.ElementType;
const projects = [
  {
    id: 1,
    title: "Pharmaceutical Company Website",
    description: "Developed a professional website for a pharmaceutical company using React.js with a user-friendly UI/UX.",
    image: "https://via.placeholder.com/400", 
    github: "https://github.com/yourgithub/pharma-website", 
    liveDemo: "https://yourpharmasite.com", 
  },
  {
    id: 2,
    title: "IoT Smart Energy Meter",
    description: "Built an IoT-based energy meter for real-time electricity monitoring using Arduino and Flask.",
    image: "https://via.placeholder.com/400",
    github: "https://github.com/yourgithub/iot-energy-meter",
    liveDemo: "https://iot-energy-demo.com",
  },
  {
    id: 3,
    title: "Drift Voidance P&O MPPT Algorithm",
    description: "Implemented an MPPT algorithm for optimizing power output in photovoltaic systems.",
    image: "https://via.placeholder.com/400",
    github: "https://github.com/yourgithub/mppt-algorithm",
    liveDemo: "https://mppt-demo.com",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  <GithubIcon size={24} className="mr-2" /> GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-400 hover:text-green-300 transition duration-300"
                >
                  <ExternalLinkAltIcon size={20} className="mr-2" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
