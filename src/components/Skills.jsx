import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "HTML",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Supabase",   logo: "/supabase.png" },
];

const categories = [
  {
    title: "Frontend",
    emoji: "🎨",
    color: "#FFF7FB",
    border: "rgba(226,232,240,0.95)",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    emoji: "⚡",
    color: "#F8F7FF",
    border: "rgba(226,232,240,0.95)",
    skills: ["Node.js", "FastAPI", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    title: "AI / ML",
    emoji: "🤖",
    color: "#FFF8F1",
    border: "rgba(251,146,60,0.22)",
    skills: ["Python", "scikit-learn", "pandas", "NumPy", "Gemini LLM"],
  },
  {
    title: "Languages",
    emoji: "💻",
    color: "#EFF8FF",
    border: "rgba(96,165,250,0.22)",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Tools",
    emoji: "🛠",
    color: "#F8FAFC",
    border: "rgba(148,163,184,0.24)",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Figma"],
  },
  {
    title: "Soft Skills",
    emoji: "🌟",
    color: "#FFFBEA",
    border: "rgba(250,204,21,0.24)",
    skills: ["Team Leadership", "Project Management", "Public Speaking", "Problem Solving"],
  },
];

const Skills = () => (
  <motion.section
    id="skills"
    className="min-h-screen flex flex-col items-center py-20 px-6"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Heading */}
    <motion.div className="text-center mb-10"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span className="eyebrow">Skills</span>
      <h2 className="section-title text-3xl md:text-4xl mt-3">
        Technologies I Enjoy <span className="gradient-text">Building With</span>
      </h2>
    </motion.div>

    {/* Icon carousel */}
    <div className="w-full overflow-hidden mb-10 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #fdfbff, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #fdfbff, transparent)" }} />
      <div className="animate-scroll">
        {[...logos, ...logos].map((skill, i) => (
          <motion.div key={i} whileHover={{ y: -6, scale: 1.12 }}
            className="flex flex-col items-center justify-center min-w-[88px] select-none mx-1.5">
            <div className="glass gradient-border rounded-2xl p-2.5 w-14 h-14 flex items-center justify-center mb-2 bg-white"
              style={{ transition: "box-shadow 0.3s" }}>
              <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <p className="text-xs text-[#4B5563] font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Gradient divider */}
    <div className="w-2/3 h-px mb-10 rounded-full"
      style={{ background: "linear-gradient(to right, transparent, rgba(226,232,240,0.9), rgba(244,114,182,0.18), transparent)" }} />

    {/* Skill category cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full">
      {categories.map((cat, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="glass glass-hover rounded-[1.4rem] p-5 gradient-border"
          style={{ background: cat.color, borderColor: cat.border }}
        >
          <h3 className="text-sm font-semibold text-[#1E1B2E] mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/75">{cat.emoji}</span> {cat.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, j) => (
              <motion.span key={j} whileHover={{ scale: 1.08, y: -2 }}
                className="skill-pill text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${cat.border}`,
                  color: "#4B5563",
                }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
