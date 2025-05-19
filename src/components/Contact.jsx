import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className={`
        min-h-screen flex flex-col items-center justify-center py-12 px-6
        bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100
        dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
        transition-colors duration-500
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300">
          I'd love to hear from you! Whether it's a project idea, collaboration,
          or just a friendly chat, feel free to reach out.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            bg-white/80 dark:bg-gray-900/70
            rounded-lg p-8 shadow-lg max-w-lg mx-auto space-y-6
            backdrop-blur-sm transition-colors duration-300
          "
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="
                mt-2 w-full p-3 rounded-lg
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-colors duration-300
              "
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="
                mt-2 w-full p-3 rounded-lg
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-colors duration-300
              "
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here"
              rows="5"
              className="
                mt-2 w-full p-3 rounded-lg
                bg-white dark:bg-gray-700
                border border-gray-300 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-colors duration-300
              "
            ></textarea>
          </div>

          <button
            type="submit"
            className="
              w-full py-3 bg-blue-500 text-white font-semibold rounded-lg
              hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-colors duration-300
            "
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center items-center space-x-6">
          <a
            href="https://github.com/sanu700"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            <FaGithub size={24} />
            <span className="font-semibold">GitHub</span>
          </a>

          <div className="h-6 border-r-2 border-gray-400 dark:border-gray-600"></div>

          <a
            href="mailto:sanviudhan@gmail.com"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
            <span className="font-semibold">Email</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;