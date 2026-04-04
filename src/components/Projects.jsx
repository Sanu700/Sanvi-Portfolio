import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RepoLens",
    subtitle: "GitHub Analytics Platform",
    description: "Full-stack developer tool that analyzes any GitHub repo in real time — commit trends, contributor leaderboards, language breakdown, health scores.",
    tags: ["React", "Node.js", "GitHub API", "Vercel"],
    liveLink: "https://repo-lens-ivory.vercel.app",
    githubLink: "https://github.com/Sanu700/RepoLens",
    metric: "⭐ 6 Stars",
    accent: "#f472b6",
    featured: true,
  },
  {
    title: "Slash Experiences",
    subtitle: "Live Product · 1,000+ Users",
    description: "Full-stack experience gifting platform serving 1,000+ users across India. Led a 6-member team. React + Supabase + Razorpay. 99.9% uptime.",
    tags: ["React", "TypeScript", "Supabase", "Razorpay"],
    liveLink: "https://slashexperiences.in/",
    githubLink: "https://github.com/Sanu700/Slash",
    image: "/slash.jpg",
    metric: "🚀 1,000+ Users",
    accent: "#c084fc",
    featured: true,
  },
  {
    title: "AI Credit Risk Dashboard",
    subtitle: "ML + Business Intelligence",
    description: "End-to-end ML pipeline — Random Forest AUC 0.80, 1,000-scenario Monte Carlo simulation, Gemini LLM executive summaries. Interactive React dashboard.",
    tags: ["Python", "scikit-learn", "FastAPI", "React"],
    liveLink: "https://ai-credit-risk-intelligence.vercel.app",
    githubLink: "https://github.com/Sanu700/AI-Credit-Risk-Intelligence",
    metric: "🤖 AUC 0.80",
    accent: "#60a5fa",
    featured: false,
  },
  {
    title: "Monte Carlo Stress Testing",
    subtitle: "Financial Risk Engine",
    description: "1,000-scenario Monte Carlo simulation using PD-LGD-EAD framework. Computes 95% & 99% VaR to quantify tail-risk under recession scenarios.",
    tags: ["Python", "NumPy", "SciPy", "pandas"],
    githubLink: "https://github.com/Sanu700/Stress-Testing-Loss-Forecasting-Engine",
    metric: "📊 99% VaR",
    accent: "#e879f9",
    featured: false,
  },
  {
    title: "Cinepedia",
    subtitle: "Movie Review Platform",
    description: "Full-stack movie review platform with Google OAuth, real-time rating aggregation, and Supabase PostgreSQL schema supporting 10K+ records.",
    tags: ["React", "TypeScript", "Supabase", "OAuth"],
    liveLink: "https://cineepedia.netlify.app",
    githubLink: "https://github.com/Sanu700/Cinepedia",
    image: "/Movie.png",
    metric: "🎬 10K+ Records",
    accent: "#a78bfa",
    featured: false,
  },
  {
   
    title: "Task Dashboard",
    subtitle: "Productivity Web App",
    description: "Full-stack productivity app with gamification elements — custom task boards, progress tracking, streak system, and timers to enhance user focus.",
    tags: ["React", "JavaScript", "CSS3", "Netlify"],
    liveLink: "https://task-dash.netlify.app/",
    githubLink: "https://github.com/Sanu700/task-dashboard",
    image: "/task.webp",
    metric: "✅ Gamified",
    accent: "#34d399",
    featured: false,
  
  },
];

function Modal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(13,10,26,0.88)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 24 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="glass gradient-border rounded-3xl p-8 max-w-lg w-full"
        style={{ background: `linear-gradient(135deg, rgba(13,10,26,0.95), ${project.accent}12)` }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <span className="text-xs px-3 py-1 rounded-full mb-3 inline-block glass"
              style={{ color: project.accent, border: `1px solid ${project.accent}40` }}>
              {project.metric}
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
            <p className="text-sm mt-1" style={{ color: project.accent + "bb" }}>{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors ml-4 mt-1">
            <X size={20} />
          </button>
        </div>
        {project.image && (
          <div className="rounded-xl overflow-hidden mb-5 h-40">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}
        <p className="text-white/55 text-sm leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full glass"
              style={{ color: "rgba(226,232,240,0.6)", border: `1px solid ${project.accent}30` }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2.5 px-5">
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2.5 px-5">
              <Github size={13} /> Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-medium tracking-widest uppercase text-pink-400/60">Work</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Things I've <span className="gradient-text">Built</span>
        </h2>
        <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm">
          From AI pipelines to live products — here's what I've shipped.
        </p>
      </motion.div>

      {/* Featured 2-column */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
        {featured.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(project)}
            className="glass gradient-border rounded-3xl p-7 cursor-pointer group relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.accent}10 0%, rgba(13,10,26,0.6) 100%)`,
              border: `1px solid ${project.accent}25`,
              minHeight: "240px",
            }}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}15, transparent 70%)` }} />

            {project.image && (
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-3xl overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity">
                <img src={project.image} alt="" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="relative z-10">
              <span className="text-xs px-3 py-1 rounded-full glass inline-block mb-4"
                style={{ color: project.accent, border: `1px solid ${project.accent}40` }}>
                {project.metric}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-xs mb-3" style={{ color: project.accent + "99" }}>{project.subtitle}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg text-white/40"
                    style={{ background: "rgba(255,255,255,0.05)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Smaller cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {rest.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelected(project)}
            className="glass gradient-border rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
            style={{ border: `1px solid ${project.accent}20` }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}12, transparent 70%)` }} />
            <div className="relative z-10">
              <span className="text-xs px-2 py-0.5 rounded-full inline-block mb-3"
                style={{ color: project.accent, background: project.accent + "15", fontSize: "10px" }}>
                {project.metric}
              </span>
              <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed mb-3">
                {project.description.slice(0, 90)}...
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded text-white/30"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
