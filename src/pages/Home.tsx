import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
 
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 70%)",
        }}
      />

      <motion.h1
        className="text-5xl font-bold relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-yellow-300">Raviteja Gavireddy</span>
      </motion.h1>

      <motion.h2
        className="text-2xl mt-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A <span className="text-yellow-300">
          <Typewriter words={["Full Stack Developer", "React.js Enthusiast", "Flask Expert", "Tech Innovator"]} loop />
        </span>
      </motion.h2>

      <motion.p
        className="max-w-xl mt-4 text-lg text-gray-200 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Passionate about building scalable, high-performance web applications and collaborating in
        agile environments to develop intuitive, efficient solutions.
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Link
          to="/projects"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          View My Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
        >
          Contact Me
        </Link>
      </motion.div>
      <motion.div
        className="absolute bottom-20 text-sm text-gray-400 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        ✨ Explore my world of innovation ✨
      </motion.div>
    </section>
  );
};

export default Home;
