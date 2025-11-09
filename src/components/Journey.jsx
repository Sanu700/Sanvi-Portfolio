import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Trophy,
  Star,
  Palette,
  Camera,
  Mic,
} from "lucide-react";

const Journey = () => {
  const timeline = [
    {
      year: "2025",
      title: "Full-Stack Developer Intern – Slash Experiences",
      icon: <Briefcase size={22} />,
      description: `💻 <b>Built a full-stack event booking & collaboration platform</b> from scratch using <b>React, Supabase, Node.js, and Razorpay API</b>.  
• Developed a <b>secure booking & payment system</b>, improving reliability and reducing drop-offs.  
• Enhanced UX with a <b>modern profile page</b> and interactive social features.  
• Optimized logic for <b>25% faster load times</b> and smoother responsiveness.`,
      side: "left",
    },
    {
      year: "2025",
      title: "Workflow Automation Intern – Zerocostwater Platform",
      icon: <Code size={22} />,
      description: `⚙️ Worked on <b>end-to-end process automation</b> using <b>n8n, Zapier, and REST APIs</b>.  
• Designed modular backend workflows for <b>real-time tracking & analytics</b>.  
• Connected multiple systems into seamless pipelines, focusing on <b>efficiency and scalability</b>.`,
      side: "right",
    },
    {
      year: "2025",
      title: "Athletics Captain – BITS Hyderabad",
      icon: <Trophy size={22} />,
      description: `🏃‍♀️ Leading the athletics team in intercollegiate events while promoting <b>teamwork, discipline, and performance</b>.`,
      side: "left",
    },
    {
      year: "2024",
      title: "Meme Making Competition Winner (Teachers’ Day)",
      icon: <Mic size={22} />,
      description: `🎭 Won the <b>Meme Making Competition</b> for creativity, humor, and originality.`,
      side: "right",
    },
    {
      year: "2023–2024",
      title: "Design Team – Esports Club, BITS Hyderabad",
      icon: <Palette size={22} />,
      description: `🎨 Designed event posters & digital graphics using <b>Canva, Figma, and Photoshop</b>, enhancing campus event engagement.`,
      side: "left",
    },
    {
      year: "2023–2024",
      title: "Photography Club Member",
      icon: <Camera size={22} />,
      description: `📸 Covered major campus events, mastering <b>photo editing, composition, and storytelling</b>.`,
      side: "right",
    },
    {
      year: "2021–2022",
      title: "Best Sportsperson of the Year",
      icon: <Trophy size={22} />,
      description: `🏆 Honored for <b>excellence in athletics, swimming, and skating</b> at the district level.`,
      side: "left",
    },
    {
      year: "2021–2022",
      title: "6× Best Athlete & Best All-Rounder Trophies",
      icon: <Star size={22} />,
      description: `🌟 Recognized for <b>consistent performance</b> and balancing <b>sports, academics, and leadership</b>.`,
      side: "right",
    },
    {
      year: "2021–2022",
      title: "First Place – School Debates (English & Hindi)",
      icon: <Mic size={22} />,
      description: `🗣️ Awarded <b>first place in English and Hindi debates</b> for strong public speaking and argumentation.`,
      side: "left",
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-20 blur-3xl"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          Journey & Achievements
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A reflection of growth, leadership, and creativity — from impactful
          internships to lifelong milestones.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Glowing vertical line */}
        {/* Center glowing animated line */}
<motion.div
  className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[3px] sm:w-[4px] h-full 
             bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full 
             shadow-[0_0_25px_rgba(168,85,247,0.7)]"
  animate={{
    backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
  style={{
    backgroundSize: "100% 300%",
    filter: "drop-shadow(0 0 8px rgba(147,51,234,0.8))",
    zIndex: 0,
  }}
></motion.div>


        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-16 flex ${
              item.side === "left" ? "justify-start" : "justify-end"
            } w-full`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className={`relative w-full sm:w-1/2 ${
                item.side === "left" ? "pr-10 text-right" : "pl-10 text-left"
              }`}
            >
              {/* Icon bubble */}
              <motion.div
                className={`absolute top-6 ${
                  item.side === "left" ? "right-[-18px]" : "left-[-18px]"
                } bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border-2 border-purple-400`}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-gray-700 dark:text-gray-300 text-[1rem] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <span className="block mt-3 text-sm font-medium text-purple-600 dark:text-purple-300">
                  {item.year}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
