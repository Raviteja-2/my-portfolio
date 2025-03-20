import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaTimes } from "react-icons/fa";
import { SiReact, SiFlask, SiPostgresql, SiJavascript, SiPython, SiNodedotjs, SiGithub } from "react-icons/si";

const BriefcaseIcon = FaBriefcase as React.ElementType;
const TimesIcon = FaTimes as React.ElementType;
const GraduationCapIcon = FaGraduationCap as React.ElementType;
const ReactIcon = SiReact as React.ElementType;
const FlaskIcon = SiFlask as React.ElementType;
const PostgreSQLIcon = SiPostgresql as React.ElementType;
const JavaScriptIcon = SiJavascript as React.ElementType;
const PythonIcon = SiPython as React.ElementType;
const NodeIcon = SiNodedotjs as React.ElementType;
const GitHubIcon = SiGithub as React.ElementType;
const experiences = [
  {
    title: "Full Stack Developer",
    company: "MSys Tech India Pvt Ltd",
    duration: "July 2024 – Dec 2024",
    description: [
      "Developed and optimized the AILDD platform, improving data accessibility for pharmaceutical professionals.",
      "Built dynamic and responsive React.js user interfaces for an enhanced user experience.",
      "Designed and implemented RESTful APIs using Python and Flask, ensuring seamless data integration.",
      "Collaborated with cross-functional teams to integrate complex datasets and improve performance.",
    ],
  },
  {
    title: "Full Stack Web Developer (Intern)",
    company: "DevTown",
    duration: "April 2024 – June 2024",
    description: [
      "Developed and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Worked with version control (Git, GitHub) and Agile methodologies to collaborate effectively.",
      "Optimized application performance and ensured mobile-friendly, scalable solutions.",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "Aurigene Pharmaceutical Services",
    duration: "Aug 2023 – Nov 2023",
    description: [
      "Deployed and managed an enterprise-grade PostgreSQL database storing billions of chemical compound records.",
      "Developed a user-friendly React.js + Flask UI, enabling seamless data extraction and analysis.",
      "Created a Python-based data extraction tool to process chemical information from PDFs, images, and Word documents.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Electrical and Electronics Engineering",
    institution: "Vignan’s Institute of Information Technologies",
    duration: "2018 - 2023",
    gpa: "7.02/10",
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Bhashyam IIT Jr. College",
    duration: "2017 - 2019",
    gpa: "9.32/10",
  },
  {
    degree: "Board of Secondary Education",
    institution: "Bhashyam High School",
    duration: "2016 - 2017",
    gpa: "9.2/10",
  },
];
const About: React.FC = () => {
    const [resumeOpen, setResumeOpen] = useState(false);
  return (
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-6 relative">
      <div className="container mx-auto">

        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 tracking-wide text-yellow-400 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>


        <motion.p
          className="max-w-5xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm a Full Stack Developer skilled in React.js, Python Flask, PostgreSQL, and Node.js, with expertise in frontend UI development and backend API integration. 
          Passionate about building scalable, high-performance web applications and collaborating in agile environments to develop intuitive, efficient solutions.
        </motion.p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-yellow-400 mb-6">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-yellow-400 hover:bg-gray-700 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-4">
                    <BriefcaseIcon size={30} className="text-yellow-400" />
                    <h4 className="text-2xl font-bold">{exp.title}</h4>
                  </div>
                  <h5 className="text-lg text-gray-400">{exp.company} | {exp.duration}</h5>
                  <ul className="text-gray-300 mt-2 list-disc pl-5">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-blue-400 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-400 hover:bg-gray-700 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-4">
                    <GraduationCapIcon size={30} className="text-blue-400" />
                    <h4 className="text-2xl font-bold">{edu.degree}</h4>
                  </div>
                  <h5 className="text-lg text-gray-400">{edu.institution} | {edu.duration}</h5>
                  <p className="text-gray-300 mt-2">GPA: {edu.gpa}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

    
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4  }}
        >
          <h3 className="text-3xl font-bold text-center mb-6">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <ReactIcon size={50} className="text-blue-400" />
              <span className="mt-2">React.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FlaskIcon size={50} className="text-gray-500" />
              <span className="mt-2">Flask</span>
            </div>
            <div className="flex flex-col items-center">
              <PostgreSQLIcon size={50} className="text-blue-600" />
              <span className="mt-2">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center">
              <JavaScriptIcon size={50} className="text-yellow-300" />
              <span className="mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <PythonIcon size={50} className="text-yellow-400" />
              <span className="mt-2">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <NodeIcon size={50} className="text-green-500" />
              <span className="mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <GitHubIcon size={50} className="text-white" />
              <span className="mt-2">GitHub</span>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4  }}
        >
      <div className="flex justify-center gap-x-6 mt-12">
  <motion.button 
    onClick={() => setResumeOpen(true)}
    className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition text-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    View Resume
  </motion.button>

  <motion.a
    href="/Resume_Gavireddy.pdf"
    download="Resume_Gavireddy.pdf"
    className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition text-lg text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    Download Resume
  </motion.a>
</div>

{resumeOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70">
    <div className="bg-white p-8 rounded-lg relative w-[80vw] h-[90vh] flex flex-col">
      <button 
        className="absolute top-4 right-4 text-black text-3xl cursor-pointer"
        onClick={() => setResumeOpen(false)}
      >
        ✖
      </button>

      <iframe src="/Resume_Gavireddy.pdf" className="w-full h-full border-0"></iframe>
    </div>
  </div>
)}



</motion.div>

    </section>
  );
};

export default About;
