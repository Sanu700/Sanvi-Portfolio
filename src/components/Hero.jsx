import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import avatar from "/avatar.jpg";

const roles = ["Full-Stack Developer", "ML Engineer", "BITS Pilani '27", "Problem Solver"];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let i = 0;
    let timer;
    if (typing) {
      timer = setInterval(() => {
        setDisplayed(current.slice(0, i + 1));
        i++;
        if (i === current.length) { clearInterval(timer); setTimeout(() => setTyping(false), 2000); }
      }, 65);
    } else {
      timer = setInterval(() => {
        setDisplayed(prev => {
          if (prev.length <= 1) {
            clearInterval(timer);
            setRoleIdx(r => (r + 1) % roles.length);
            setTyping(true);
            return "";
          }
          return prev.slice(0, -1);
        });
      }, 35);
    }
    return () => clearInterval(timer);
  }, [roleIdx, typing]);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16 py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient blobs */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(219,91,161,0.12) 0%, transparent 70%)", top: "-10%", left: "-15%", filter: "blur(40px)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", bottom: "-10%", right: "-10%", filter: "blur(40px)" }} />

      {/* Left — text */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="lg:w-1/2 text-center lg:text-left space-y-6 relative z-10"
      >
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full glass gradient-border"
            style={{ color: "#f9a8d4" }}>
            ✦ Open to Summer 2026 Internships
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Hi, I'm{" "}
          <span className="font-pacifico gradient-text-warm animate-gradient">Sanvi Udhan</span>
        </h1>

        {/* Typing animation */}
        <div className="flex items-center gap-2 justify-center lg:justify-start h-8">
          <span className="text-white/40 text-lg">›</span>
          <span className="text-white/70 text-lg font-medium">{displayed}</span>
          <span className="typing-cursor" />
        </div>

        <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
          I ship full-stack products used by real users and build data-driven systems — 
          blending clean engineering with creative problem-solving.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
          <a href="#projects" className="btn-primary">View Work <ArrowRight size={15} /></a>
          <a href="#contact" className="btn-outline"><Mail size={15} /> Contact Me</a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5 justify-center lg:justify-start pt-2">
          {[
            { icon: Github,   href: "https://github.com/Sanu700",            label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/sanvi-udhan",   label: "LinkedIn" },
            { icon: Mail,     href: "mailto:udhansanvi@gmail.com",           label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              whileHover={{ y: -3 }}
              className="text-white/30 hover:text-pink-400 transition-colors duration-300">
              <Icon size={18} />
            </motion.a>
          ))}
          {/* Stats pills */}
          <div className="flex gap-2 ml-2">
            <span className="glass gradient-border rounded-full px-3 py-1 text-xs text-white/50">⭐ 6 Stars</span>
            <span className="glass gradient-border rounded-full px-3 py-1 text-xs text-white/50">🚀 1K+ Users</span>
          </div>
        </div>
      </motion.div>

      {/* Right — avatar */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center relative z-10"
      >
        <div className="relative animate-float">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)", transform: "scale(1.4)", filter: "blur(20px)" }} />
          {/* Gradient border */}
          <div className="relative rounded-2xl p-[3px]"
            style={{ background: "linear-gradient(135deg, #f472b6, #c084fc, #818cf8)" }}>
            <img
              src={avatar}
              alt="Sanvi Udhan"
              className="rounded-2xl max-w-sm w-full object-cover shadow-2xl"
              style={{ maxHeight: "420px" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
