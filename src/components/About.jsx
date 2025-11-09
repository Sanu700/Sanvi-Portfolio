import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OAuth", logo: "/oauth.jpeg" },
    { name: "REST API", logo: null },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Supabase", logo: "/supabase.png" },
    { name: "Zapier", logo: "/zapier.png" },
    { name: "n8n", logo: "/n8n.png" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", logo: "/canva.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "SEO", logo: "/seo.png" },
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center py-20 px-8 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* LEFT TEXT SECTION */}
        <motion.div
          className="max-w-2xl text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
            🚀 About Me
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <span className="font-bold">Hey there, I’m Sanvi 👋</span> — a{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Developer</span>{" "}
            with a creative mind and a problem-solving heart. I’m passionate about building intuitive, scalable, and visually appealing digital experiences that blend{" "}
            <span className="font-semibold text-pink-500 dark:text-pink-400">design</span> and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">logic</span>.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Currently pursuing{" "}
            <span className="font-bold text-pink-500 dark:text-pink-400">Mechanical Engineering</span>{" "}
            at <span className="font-bold text-indigo-600 dark:text-indigo-400">BITS Pilani, Hyderabad</span>, 
            I’ve developed a strong analytical foundation that complements my passion for coding and product design.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My tech toolkit includes{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">React.js</span>,{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">Node.js</span>,{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">PostgreSQL</span>,{" "}
            and{" "}
            <span className="font-semibold text-amber-500 dark:text-amber-400">OAuth</span>.{" "}
            I’ve built AI-powered applications, full-stack websites, and automation tools using platforms like{" "}
            <span className="font-semibold text-emerald-500 dark:text-emerald-400">Supabase</span>,{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">Zapier</span>, and{" "}
            <span className="font-semibold text-rose-500 dark:text-rose-400">n8n</span>.  
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            When I’m not coding, I’m usually designing something on{" "}
            <span className="font-semibold text-pink-500 dark:text-pink-400">Canva</span> or{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">Figma</span>, 
            leading teams on the field 🏃‍♀️, or pushing my limits as an athlete.  
            I’ve captained the{" "}
            <span className="font-bold text-purple-600 dark:text-purple-400">Athletics Team</span>{" "}
            and earned multiple{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Best Sportsperson</span>{" "}
            and{" "}
            <span className="font-semibold text-pink-500 dark:text-pink-400">All-Rounder</span> awards — 
            experiences that taught me discipline, teamwork, and the power of persistence.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            In short, I’m someone who thrives on challenges — whether it’s debugging code, designing clean UI, or running the last lap of a race.  
            My goal? To craft tech that not only works efficiently but feels *effortless* to use.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-shrink-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/avatar.jpg"
            alt="Sanvi"
            className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-indigo-200 dark:border-gray-700 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      <div className="w-3/4 h-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 my-10 rounded-full"></div>

      {/* SKILLS CAROUSEL */}
      <div className="w-full mt-6 overflow-hidden relative">
        <div className="flex space-x-10 animate-scroll dark:animate-scroll-reverse">
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex flex-col items-center justify-center min-w-[90px] select-none">
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 rounded-full object-contain bg-white/60 dark:bg-gray-700 p-2 shadow-md hover:scale-110 hover:shadow-glow transition-all duration-300"
                />
              ) : (
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold text-xs text-center px-2 leading-tight shadow-md hover:scale-110 transition-transform duration-300">
                  {skill.name}
                </div>
              )}
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 40s linear infinite;
            width: max-content;
          }
          .animate-scroll-reverse {
            display: flex;
            animation: scroll-reverse 40s linear infinite;
            width: max-content;
          }
          .hover\\:shadow-glow:hover {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
        `}
      </style>
    </motion.section>
  );
};

export default About;
