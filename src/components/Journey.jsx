import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Trophy, Star, Palette, Camera, Mic } from "lucide-react";

const Journey = () => {
  const timeline = [
    {
      year: "2025",
      title: "Full-Stack Developer Intern – Slash Experiences",
      icon: <Briefcase size={22} />,
      description: `💻 <b>Built a full-stack event booking & collaboration platform</b> from scratch using <b>React, Supabase, Node.js, and Razorpay API</b>.<br/>• Developed a <b>secure booking & payment system</b>, improving reliability and reducing drop-offs.<br/>• Enhanced UX with a <b>modern profile page</b> and interactive social features.<br/>• Optimized logic for <b>25% faster load times</b> and smoother responsiveness.`,
      side: "left",
    },
    {
      year: "2025",
      title: "Workflow Automation Intern – Zerocostwater Platform",
      icon: <Code size={22} />,
      description: `⚙️ Worked on <b>end-to-end process automation</b> using <b>n8n, Zapier, and REST APIs</b>.<br/>• Designed modular backend workflows for <b>real-time tracking & analytics</b>.<br/>• Connected multiple systems into seamless pipelines, focusing on <b>efficiency and scalability</b>.`,
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
      title: "Meme Making Competition Winner (Teachers' Day)",
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
      year: "2020–2021",
      title: "Best Sportsperson of the Year",
      icon: <Trophy size={22} />,
      description: `🏆 Honored for <b>excellence in athletics, swimming, and skating</b> at the district level.`,
      side: "left",
    },
    {
      year: "2015–2021",
      title: "6× Best Athlete & Best All-Rounder Trophies",
      icon: <Star size={22} />,
      description: `🌟 Recognized for <b>consistent performance</b> and balancing <b>sports, academics, and leadership</b>.`,
      side: "right",
    },
    {
      year: "2016–2021",
      title: "First Place – School Debates (English & Hindi)",
      icon: <Mic size={22} />,
      description: `🗣️ Awarded <b>first place in English and Hindi debates</b> for strong public speaking and argumentation.`,
      side: "left",
    },
  ];

  return (
    <section id="journey" className="relative py-20 px-6 overflow-hidden">
      <div className="text-center mb-12 relative z-10">
        <span className="text-xs font-medium tracking-widest uppercase text-pink-400/60">Timeline</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Journey & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-white/40 mt-4 max-w-2xl mx-auto text-sm">
          A reflection of growth, leadership, and creativity — from impactful internships to lifelong milestones.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-px h-full rounded-full"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(244,114,182,0.5), rgba(192,132,252,0.5), transparent)" }}
        />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex ${item.side === "left" ? "justify-start" : "justify-end"} w-full`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className={`relative w-full sm:w-1/2 ${item.side === "left" ? "pr-10 text-right" : "pl-10 text-left"}`}>
              <motion.div
                className={`absolute top-5 ${item.side === "left" ? "right-[-18px]" : "left-[-18px]"} glass gradient-border p-2.5 rounded-full z-10`}
                style={{ background: "rgba(13,10,26,0.9)" }}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span style={{ color: "#c084fc" }}>{item.icon}</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(244,114,182,0.1)" }}
                transition={{ duration: 0.3 }}
                className="glass gradient-border rounded-2xl p-6"
              >
                <h3 className="text-base font-semibold text-white leading-snug">{item.title}</h3>
                <p
                  className="mt-2 text-white/50 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <span className="block mt-3 text-xs font-medium text-pink-400/70 uppercase tracking-widest">
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