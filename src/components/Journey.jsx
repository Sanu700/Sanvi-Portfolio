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
      <div className="text-center mb-10 relative z-10">
        <span className="eyebrow">Timeline</span>
        <h2 className="section-title text-3xl md:text-4xl mt-3">
          Journey & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="section-copy mt-4 max-w-2xl mx-auto text-sm">
          A reflection of growth, leadership, and creativity — from impactful internships to lifelong milestones.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div
          className="absolute left-4 top-0 h-full w-px rounded-full md:left-1/2 md:-translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(236,72,153,0.38), rgba(232,121,249,0.28), transparent)" }}
        />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex w-full ${item.side === "left" ? "md:justify-start" : "md:justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className={`relative ml-10 w-full md:ml-0 md:w-1/2 ${item.side === "left" ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
              <span
                className={`absolute top-6 h-3.5 w-3.5 rounded-full border-4 border-white bg-[#EC4899] shadow-[0_0_0_7px_rgba(236,72,153,0.10)] ${item.side === "left" ? "left-[-31px] md:left-auto md:right-[-7px]" : "left-[-31px] md:left-[-7px]"}`}
              />
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 18px 42px rgba(15,23,42,0.08)" }}
                transition={{ duration: 0.3 }}
                className="glass gradient-border rounded-[1.4rem] p-5"
              >
                <div className={`mb-3 flex items-center gap-2 ${item.side === "left" ? "md:justify-end" : ""}`}>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DB2777]">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1E1B2E] leading-snug">{item.title}</h3>
                <p
                  className="section-copy mt-2 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;