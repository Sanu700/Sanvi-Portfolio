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
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 lg:px-14 pt-28 pb-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient blobs */}
      <div className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,114,182,0.10) 0%, transparent 70%)", top: "-12%", left: "-12%", filter: "blur(42px)" }} />
      <div className="absolute w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(199,210,254,0.22) 0%, transparent 70%)", bottom: "0%", right: "-8%", filter: "blur(44px)" }} />
      <motion.div
        className="absolute left-[8%] top-[23%] hidden h-12 w-12 rounded-full border border-slate-200 bg-gradient-to-br from-pink-100 via-white to-sky-100 md:block"
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[18%] right-[14%] hidden h-16 w-16 rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-violet-100 via-white to-amber-100 md:block"
        animate={{ y: [0, 16, 0], rotate: [8, -5, 8], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-[15%] top-[36%] text-pink-300/70">✦</div>
      <div className="absolute right-[9%] top-[28%] text-fuchsia-300/70">✧</div>
      <div className="absolute bottom-[24%] left-[47%] text-pink-300/60">✦</div>

      {/* Left — text */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="lg:w-1/2 text-center lg:text-left space-y-5 relative z-10"
      >
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full glass gradient-border"
            style={{ color: "#ec4899" }}>
            ✦ Open to Summer 2026 Internships
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[#1E1B2E] tracking-[-0.045em]">
          Hi, I'm{" "}
          <span className="font-pacifico gradient-text-warm animate-gradient">Sanvi Udhan</span>
        </h1>

        {/* Typing animation */}
        <div className="flex items-center gap-2 justify-center lg:justify-start h-8">
          <span className="text-pink-500 text-base">›</span>
          <span className="text-[#4B5563] text-base font-medium">{displayed}</span>
          <span className="typing-cursor" />
        </div>

        <p className="section-copy text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
          I build full-stack products and AI-powered systems that solve real-world problems. I love turning ideas into impactful, user-friendly experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
          <a href="#projects" className="btn-primary">View Work <ArrowRight size={15} /></a>
          <a href="#contact" className="btn-outline"><Mail size={15} /> Contact Me</a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5 justify-center lg:justify-start pt-2">
          {[
            { icon: <Github size={18} />,   href: "https://github.com/Sanu700",            label: "GitHub" },
            { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/sanvi-udhan",   label: "LinkedIn" },
            { icon: <Mail size={18} />,     href: "mailto:udhansanvi@gmail.com",           label: "Email" },
          ].map(({ icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-100 bg-white/70 text-[#4B5563] shadow-sm transition-colors duration-300 hover:text-pink-500">
              {icon}
            </motion.a>
          ))}
          {/* Stats pills */}
          <div className="flex flex-wrap gap-2 ml-0 sm:ml-2">
            <span className="glass gradient-border rounded-full px-3 py-1 text-xs text-[#4B5563]">⭐ 6 Stars</span>
            <span className="glass gradient-border rounded-full px-3 py-1 text-xs text-[#4B5563]">🚀 1K+ Users</span>
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
          <div className="absolute inset-0 rounded-[2rem] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(219,39,119,0.14) 0%, transparent 70%)", transform: "scale(1.25)", filter: "blur(22px)" }} />
          <div className="absolute -right-8 top-8 z-20 hidden max-w-[190px] rotate-3 rounded-3xl border border-slate-200 bg-white/90 p-3 text-left shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:block">
            <p className="font-pacifico text-xs leading-5 text-[#DB2777]">
              "Code is how I solve problems.<br />
              Creativity is how I make them beautiful."
            </p>
          </div>
          {/* Gradient border */}
          <div className="relative rounded-[2rem] p-[4px]"
            style={{ background: "linear-gradient(135deg, #ec4899, #f472b6, #e879f9)" }}>
            <img
              src={avatar}
              alt="Sanvi Udhan"
              className="rounded-[1.8rem] w-full object-cover shadow-[0_24px_64px_rgba(15,23,42,0.12)]"
              style={{ maxWidth: "360px", maxHeight: "430px" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
