import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="w-full py-6 backdrop-blur-lg shadow-md transition-all duration-500
        bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        flex flex-col items-center justify-center"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
        &copy; {new Date().getFullYear()} Sanvi Udhan | All rights reserved
      </p>

      <div className="flex space-x-6 mt-2">
        <a
          href="https://github.com/sanu700"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400 transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="mailto:sanviudhan@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400 transition-colors duration-300"
        >
          Email
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
