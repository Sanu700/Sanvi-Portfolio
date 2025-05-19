import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "My Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  const [active, setActive] = useState("#hero");

  return (
    <motion.nav
      className="w-full py-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md fixed top-0 left-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setActive("#hero")}
          className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight hover:text-blue-700 transition-colors duration-300"
        >
          Sanvi Udhan
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
            >
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`cursor-pointer px-5 py-3 rounded-full font-extrabold text-lg transition-colors duration-300
                  ${
                    active === link.href
                      ? isDarkMode
                        ? "bg-pink-500 text-white shadow-lg"
                        : "bg-purple-600 text-white shadow-lg"
                      : isDarkMode
                      ? "bg-transparent text-gray-300 hover:bg-pink-300 hover:text-white"
                      : "bg-transparent text-gray-700 hover:bg-purple-200 hover:text-purple-800"
                  }
                `}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-6 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-110 transition-transform duration-300"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;