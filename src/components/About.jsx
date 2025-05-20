import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* ✅ Original Unchanged Description */}
        <motion.div
          className="text-left max-w-2xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">About Me</h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <span className='font-bold'>Hi, I'm Sanvi 👋</span><br /> A passionate <span className="font-bold">Full Stack Web Developer, Python Developer, and Canva Designer,</span><br /> currently pursuing Mechanical Engineering at <span className='font-bold'>BITS Pilani, Hyderabad Campus.</span><br /> I specialize in building user-friendly websites and creating impactful digital experiences.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I have strong skills in programming languages like <span className="font-bold">C, C++, and Python</span>, and I’m highly skilled in Full-Stack Development. I work with technologies such as <span className="font-bold">HTML, CSS, JavaScript</span> for Frontend and <span className="font-bold">Node.js, React.js</span> for Backend.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’ve worked with <span className="font-bold">PostgreSQL</span> for databases and integrated services like <span className="font-bold">Google OAuth</span> to simplify user authentication. I’ve even built an <span className="font-bold">AI-based Voice Assistant</span> using Python! 🚀
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Outside of tech, I’m a part-time Memer and a passionate designer using <span className="font-bold">Canva</span> and <span className="font-bold">Figma</span>. I also love capturing moments as a photographer 📸 and editing them to turn them into works of art.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I proudly serve as the Athletics Team Captain at my college 🏃‍♀️, where I balance my love for sports, leadership, and creativity, ensuring everything I do has a lasting impact.
          </p>
        </motion.div>

        {/* ✅ Square Image on Right */}
        <motion.div
          className="flex-shrink-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
  className="flex-shrink-0 ml-20"  // Added left margin to push image right
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
      <img
        src="/avatar.jpg" // Adjust path if needed
        alt="Sanvi"
        className="w-72 h-72 object-cover border-4 border-gray-300 dark:border-gray-600 shadow-xl rounded-xl"
       />
</motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
