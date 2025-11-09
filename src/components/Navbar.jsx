import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Highlights", href: "#highlights" }, // added
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState("#hero");

  return (
    <motion.nav
      className={`w-full py-4 fixed top-0 left-0 z-50 backdrop-blur-lg shadow-md transition-all duration-500 
        ${isDarkMode
          ? "bg-[rgba(20,20,30,0.7)]"
          : "bg-[rgba(255,255,255,0.7)]"
        }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setActive("#hero")}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight 
          text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity duration-300"
        >
          Sanvi&nbsp;Udhan
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-8">
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
                className={`px-4 py-2 rounded-full font-semibold text-[1.05rem] transition-all duration-300
                ${
                  active === link.href
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg scale-105"
                    : isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.1)]"
                    : "text-gray-800 hover:text-purple-700 hover:bg-[rgba(200,200,255,0.2)]"
                }`}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full text-lg hover:scale-110 transition-transform duration-300 
          bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-800"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
