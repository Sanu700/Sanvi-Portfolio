import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";

const filters = ["All", "Featured", "Full Stack", "Backend", "AI/ML", "Research"];

const projects = [
  {
    title: "VendorBridge",
    subtitle: "Vendor-supplier marketplace · 48hr hackathon build",
    impact: "Helping businesses discover, compare, and connect with reliable vendors faster.",
    description: "A vendor-supplier marketplace built in a 48-hour hackathon, focused on practical discovery and connection workflows.",
    tags: ["React", "Firebase", "Product Design"],
    categories: ["Featured", "Full Stack", "Backend"],
    liveLink: "https://vendor-bridge-wine.vercel.app/",
    githubLink: "https://github.com/Sanu700/VendorBridge",
    metric: "⚡ 48hr Build",
    featured: true,
    accent: "#DB2777",
    details: {
      problem: "Vendor discovery is often fragmented across spreadsheets, messages, and unverified listings.",
      architecture: "React frontend with Firebase for auth, real-time data, and vendor profile storage — built end-to-end within a 48-hour hackathon window.",
      challenges: "Designing a simple UX for a marketplace-style product without overloading users with filters and states, under a tight hackathon timeline.",
      learnings: "Product clarity matters as much as implementation depth when workflows involve multiple user types — especially when time is limited.",
      techStack: "React, Firebase",
      impact: "Shipped a working marketplace prototype end-to-end within the hackathon timebox.",
      future: "Add richer verification signals, saved vendor shortlists, analytics, and role-based dashboards.",
    },
  },
  {
    title: "RepoLens",
    subtitle: "GitHub Analytics Platform",
    impact: "Turns any GitHub repository into readable engineering health insights.",
    description: "Full-stack developer tool that analyzes commit trends, contributor leaderboards, language breakdown, and health scores.",
    tags: ["React", "Node.js", "GitHub API", "Vercel"],
    categories: ["Featured", "Full Stack", "Backend"],
    liveLink: "https://repo-lens-ivory.vercel.app",
    githubLink: "https://github.com/Sanu700/RepoLens",
    metric: "⭐ 6 Stars",
    featured: true,
    accent: "#BE185D",
    details: {
      problem: "Repository activity is hard to evaluate quickly when contributors, languages, and commits are spread across GitHub views.",
      architecture: "React UI consumes a Node API layer that normalizes GitHub API responses into analytics-friendly summaries.",
      challenges: "Handling API limits, partial data, and keeping the interface readable for both technical and non-technical viewers.",
      learnings: "Developer tools feel better when metrics are contextual, not just displayed as raw numbers.",
      techStack: "React, Node.js, GitHub API, Vercel",
      impact: "A polished tool for quickly understanding project momentum and repository health.",
      future: "Add trend comparisons, exportable reports, and deeper pull-request analytics.",
    },
  },
  {
    title: "Slash Experiences",
    subtitle: "Live Product · 1,000+ Users",
    impact: "Production gifting platform serving 1,000+ users across India.",
    description: "Full-stack experience gifting platform with Supabase, Razorpay, social features, and responsive booking flows.",
    tags: ["React", "TypeScript", "Supabase", "Razorpay"],
    categories: ["Featured", "Full Stack", "Backend"],
    liveLink: "https://slashexperiences.in/",
    githubLink: "https://github.com/Sanu700/Slash",
    metric: "🚀 1,000+ Users",
    featured: true,
    accent: "#A855F7",
    details: {
      problem: "Customers needed a smoother way to discover, book, and gift curated experiences online.",
      architecture: "React and TypeScript frontend connected to Supabase data, authentication, and Razorpay payment flows.",
      challenges: "Balancing payment reliability, responsive UX, and production constraints for real users.",
      learnings: "Shipping to real users sharpened decisions around error states, performance, and maintainability.",
      techStack: "React, TypeScript, Supabase, Razorpay",
      impact: "Served 1,000+ users with production uptime and measurable UX improvements.",
      future: "Improve recommendation flows, admin analytics, and personalized user journeys.",
    },
  },
  {
    title: "AI Credit Risk",
    subtitle: "ML + Business Intelligence",
    impact: "Explains credit risk through models, scenarios, and executive summaries.",
    description: "End-to-end ML pipeline with Random Forest AUC 0.80, Monte Carlo simulation, Gemini summaries, and a React dashboard.",
    tags: ["Python", "scikit-learn", "FastAPI", "React"],
    categories: ["AI/ML", "Full Stack"],
    liveLink: "https://ai-credit-risk-intelligence.vercel.app",
    githubLink: "https://github.com/Sanu700/AI-Credit-Risk-Intelligence",
    metric: "🤖 AUC 0.80",
    featured: false,
    accent: "#FB7185",
    details: {
      problem: "Credit risk outputs can be accurate but difficult for business teams to interpret and act on.",
      architecture: "Python ML pipeline with FastAPI services and a React dashboard for scenario exploration.",
      challenges: "Connecting model metrics to clear business narratives without hiding uncertainty.",
      learnings: "ML products need explainability, evaluation discipline, and thoughtful interface design.",
      techStack: "Python, scikit-learn, FastAPI, React, Gemini LLM",
      impact: "Combined predictive modeling, simulations, and LLM summaries into one decision-support flow.",
      future: "Add model monitoring, richer feature explainability, and portfolio-level comparisons.",
    },
  },
  {
    title: "Cinepedia",
    subtitle: "Movie Review Platform",
    impact: "A full-stack review experience with auth, ratings, and scalable records.",
    description: "Movie review platform with Google OAuth, real-time rating aggregation, and Supabase PostgreSQL schema for 10K+ records.",
    tags: ["React", "TypeScript", "Supabase", "OAuth"],
    categories: ["Full Stack", "Backend"],
    liveLink: "https://cineepedia.netlify.app",
    githubLink: "https://github.com/Sanu700/Cinepedia",
    metric: "🎬 10K+ Records",
    featured: false,
    accent: "#A78BFA",
    details: {
      problem: "Movie discovery and reviews need fast interaction, clear ratings, and trusted user identity.",
      architecture: "React frontend with Supabase authentication, PostgreSQL data, and rating aggregation logic.",
      challenges: "Keeping auth, database reads, and user-generated content interactions responsive.",
      learnings: "Schema design directly affects how smooth product features feel in the UI.",
      techStack: "React, TypeScript, Supabase, OAuth",
      impact: "Supports a full review workflow with real-time rating aggregation and a large record set.",
      future: "Add watchlists, recommendation filters, and richer moderation tools.",
    },
  },
  {
  title: "Task Dashboard",
  subtitle: "Task Management Platform",
  impact: "A focused productivity experience combining task tracking, Pomodoro sessions, and achievement-based motivation.",
  description: "Productivity dashboard with task CRUD, 25/5 Pomodoro timer, achievement badges, progress tracking, and persistent local storage.",
  tags: ["React", "JavaScript", "CSS", "localStorage"],
  categories: ["Full Stack", "Productivity"],
  liveLink: "https://task-dash.netlify.app",
  githubLink: "https://github.com/Sanu700/task-dashboard",
  metric: "⏱️ 25/5 Focus Cycle",
  featured: false,
  accent: "#FB7185",
  details: {
    problem: "Managing tasks consistently requires more than a checklist—it also needs focused work sessions and visible progress.",
    architecture: "React frontend with modular task, Pomodoro, achievement, and progress-tracking components using localStorage for persistence.",
    challenges: "Connecting task completion, timer sessions, productivity statistics, and achievement logic into one simple workflow.",
    learnings: "Learned how component-based architecture and persistent client-side state can support a complete productivity experience.",
    techStack: "React 18, JavaScript, CSS Modules, localStorage, Netlify",
    impact: "Combines task management, focused work sessions, progress tracking, and gamification into a lightweight productivity platform.",
    future: "Add user authentication, cloud synchronization, custom timer settings, and deeper productivity analytics.",
  },
},
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState("");

  const visibleProjects = projects.filter(project => (
    activeFilter === "All" || project.categories.includes(activeFilter)
  ));

  return (
    <section
      id="projects"
      className="projects-section relative overflow-hidden px-6 py-12 sm:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-6 text-center"
      >
        <span className="eyebrow">Work</span>
        <h2 className="section-title mt-3 text-3xl md:text-4xl">
          Things I've <span className="gradient-text">Built</span>
        </h2>
        <p className="section-copy mx-auto mt-3 max-w-2xl text-xs sm:text-sm">
          From AI pipelines to live products — here's what I've shipped.
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto mb-6 flex max-w-4xl flex-wrap justify-center gap-2">
        {filters.map(filter => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-all ${
              activeFilter === filter
                ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_10px_28px_rgba(236,72,153,0.22)]"
                : "border border-pink-100/80 bg-white/70 text-[#4B5563] hover:-translate-y-0.5 hover:border-pink-200 hover:text-pink-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="relative z-10 mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const isExpanded = expanded === project.title;
            const isLarge = index < 2;

            return (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                whileHover={{ y: -5 }}
                className={`project-card group relative overflow-hidden rounded-[1.45rem] ${
                  isLarge ? "min-h-[230px] p-6 lg:col-span-2" : "min-h-[172px] p-5 lg:col-span-1"
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${project.accent}10 0%, transparent 55%, rgba(168,85,247,0.06) 100%)` }}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    {project.featured && (
                      <span
                        className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                        style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}10` }}
                      >
                        Featured
                      </span>
                    )}
                    <span
                      className="rounded-full border px-2.5 py-1 text-[10px] font-medium text-[#4B5563]"
                      style={{ borderColor: `${project.accent}25`, background: "rgba(255,255,255,0.7)" }}
                    >
                      {project.metric}
                    </span>
                  </div>

                  <div className={isLarge ? "max-w-[76%]" : ""}>
                    <h3 className={`${isLarge ? "text-lg" : "text-base"} font-bold tracking-tight text-[#1E1B2E]`}>{project.title}</h3>
                    <p className="mt-1 text-[10px] font-medium" style={{ color: project.accent }}>{project.subtitle}</p>
                    <p className={`${isLarge ? "line-clamp-3" : "line-clamp-3"} mt-4 text-xs leading-relaxed text-[#4B5563]`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, isLarge ? 4 : 2).map(tag => (
                      <span key={tag} className="rounded-lg bg-white/80 px-2.5 py-1 text-[10px] text-[#4B5563]" style={{ border: `1px solid ${project.accent}18` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 grid gap-3 border-t border-pink-100 pt-5 sm:grid-cols-2">
                          {[
                            ["Problem", project.details.problem],
                            ["Architecture", project.details.architecture],
                            ["Challenges", project.details.challenges],
                            ["Key Learnings", project.details.learnings],
                            ["Tech Stack", project.details.techStack],
                            ["Impact", project.details.impact],
                            ["Future Improvements", project.details.future],
                          ].map(([label, text]) => (
                            <div key={label} className={label === "Future Improvements" ? "sm:col-span-2" : ""}>
                              <h4 className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: project.accent }}>{label}</h4>
                              <p className="section-copy mt-1.5 text-xs leading-relaxed">{text}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? "" : project.title)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-pink-100 bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-[#4B5563] transition hover:border-pink-200 hover:text-pink-600"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Close" : "Expand"}
                      <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown size={12} />
                      </motion.span>
                    </button>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-outline px-3 py-1.5 text-[10px]">
                        <Github size={12} /> GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary px-3 py-1.5 text-[10px]">
                        <ExternalLink size={12} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
