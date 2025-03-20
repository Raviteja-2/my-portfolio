import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-10">
      <p>© 2024 Raviteja | Built with React & TypeScript</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/gavireddy-ravi-teja-4a641b1a4 " target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
