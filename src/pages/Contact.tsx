import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const GithubIcon = FaGithub as React.ElementType;
const LinkedinIcon = FaLinkedin as React.ElementType;
const EnvelopeIcon = FaEnvelope as React.ElementType;
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again!");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 mb-4 bg-gray-700 rounded text-white"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>

            {status && <p className="mt-4 text-center text-yellow-400">{status}</p>}
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
            <p className="text-gray-400 mb-6">Feel free to reach out via social media!</p>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/Raviteja-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <GithubIcon size={30} />
              </a>
              <a
                href="https://linkedin.com/in/gavireddy-ravi-teja-4a641b1a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition duration-300"
              >
                <LinkedinIcon size={30} />
              </a>
              <a
                href="mailto:gavireddyraviteja01@gmail.com"
                className="text-red-400 hover:text-red-300 transition duration-300"
              >
                <EnvelopeIcon size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
