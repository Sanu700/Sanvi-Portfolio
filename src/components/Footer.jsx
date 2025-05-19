import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-4 bg-white dark:bg-gray-800 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Sanvi Udhan | All rights reserved
      </p>
    </motion.footer>
  );
};

export default Footer;
