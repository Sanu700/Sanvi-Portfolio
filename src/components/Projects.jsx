import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";

const filters = ["All", "Featured", "Full Stack", "Backend", "AI / ML", "Productivity"];

const projects = [
  {
    title: "ToxicBuddy",
    subtitle: "Live Product · NLP Moderation",
    impact: "Deployed conversational toxicity analysis platform for detecting and reducing harmful communication.",
    description: "End-to-end NLP moderation platform that analyzes messages and conversations, identifies toxic patterns, provides user-level insights, and suggests more constructive rewrites.",
    tags: ["React", "Python", "FastAPI", "scikit-learn"],
    categories: ["Featured", "AI / ML", "Full Stack"],
    liveLink: "YOUR_TOXICBUDDY_LIVE_URL",
    githubLink: "https://github.com/Sanu700/ToxicBuddy",
    metric: "🛡️ Real-time Toxicity Analysis",
    featured: true,
    accent: "#F97316",
    details: {
      problem: "Online conversations can quickly become hostile, while existing moderation tools often focus on flagging harmful messages without helping users communicate more constructively.",
      architecture: "React frontend connected to a Python backend and NLP inference pipeline for message classification, conversation analysis, toxicity scoring, and rewrite suggestions.",
      challenges: "Designing an interpretable toxicity analysis workflow while keeping inference responsive and presenting complex ML predictions through a simple user experience.",
      learnings: "Built practical experience across NLP classification, model evaluation, API design, data aggregation, and deploying an ML-powered product.",
      techStack: "React, Python, FastAPI, scikit-learn, NLP",
      impact: "Transforms raw conversation data into actionable toxicity insights and constructive rewrite suggestions through a deployed web application.",
      future: "Improve multi-label classification, conversation escalation detection, model accuracy, and real-time moderation capabilities."
    }
  },
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
    categories: ["Featured", "AI / ML", "Full Stack"],
    liveLink: "https://ai-credit-risk-intelligence.vercel.app",
    githubLink: "https://github.com/Sanu700/AI-Credit-Risk-Intelligence",
    metric: "🤖 AUC 0.80",
    featured: true,
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
    accent: "#EC4899",
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

  const visibleProjects = projects.filter(project => {
    if (activeFilter === "All") return true;
    const cleanFilter = activeFilter.replace(/\s+/g, "").toLowerCase();
    return project.categories.some(
      cat => cat.replace(/\s+/g, "").toLowerCase() === cleanFilter
    );
  });

  return (
    <section
      id="projects"
      className="projects-section relative overflow-hidden px-6 py-14 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-8 text-center"
      >
        <span className="eyebrow">Work</span>
        <h2 className="section-title mt-3 text-3xl md:text-4xl">
          Things I've <span className="gradient-text">Built</span>
        </h2>
        <p className="section-copy mx-auto mt-3 max-w-2xl text-xs sm:text-sm">
          From AI pipelines to live products — here's what I've shipped.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="relative z-10 mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-2">
        {filters.map(filter => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_10px_28px_rgba(236,72,153,0.22)] scale-105"
                  : "border border-pink-100/80 dark:border-pink-900/30 bg-white/70 dark:bg-white/5 text-[#4B5563] dark:text-slate-300 hover:-translate-y-0.5 hover:border-pink-300 dark:hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Uniform Grid Layout */}
      <motion.div
        layout
        className="relative z-10 mx-auto grid max-w-6xl gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const isExpanded = expanded === project.title;

            return (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="project-card group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] p-6 transition-all duration-300 border border-pink-100/70 dark:border-pink-900/30"
              >
                {/* Accent Background Glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${project.accent}15 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <span
                            className="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                            style={{
                              color: project.accent,
                              borderColor: `${project.accent}35`,
                              background: `${project.accent}12`,
                            }}
                          >
                            Featured
                          </span>
                        )}
                      </div>
                      <span
                        className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium text-[#4B5563] dark:text-slate-300 bg-white/80 dark:bg-slate-800/80"
                        style={{ borderColor: `${project.accent}30` }}
                      >
                        {project.metric}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-bold tracking-tight text-[#1E1B2E] dark:text-white">
                      {project.title}
                    </h3>
                    <p
                      className="mt-1 text-xs font-semibold"
                      style={{ color: project.accent }}
                    >
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-[#4B5563] dark:text-slate-300 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map(tag => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/90 dark:bg-white/10 px-2.5 py-1 text-[10px] font-medium text-[#4B5563] dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
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
                        <div className="mt-5 space-y-3 border-t border-pink-100/80 dark:border-slate-800 pt-4">
                          {[
                            ["Problem", project.details.problem],
                            ["Architecture", project.details.architecture],
                            ["Challenges", project.details.challenges],
                            ["Learnings", project.details.learnings],
                            ["Tech Stack", project.details.techStack],
                            ["Impact", project.details.impact],
                            ["Future", project.details.future],
                          ].map(([label, text]) => (
                            <div
                              key={label}
                              className="rounded-xl bg-slate-50/80 dark:bg-slate-800/40 p-3 border border-pink-100/50 dark:border-pink-900/20"
                            >
                              <h4
                                className="text-[10px] font-bold uppercase tracking-wider"
                                style={{ color: project.accent }}
                              >
                                {label}
                              </h4>
                              <p className="mt-1 text-xs leading-relaxed text-[#4B5563] dark:text-slate-300">
                                {text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Action Footer */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? "" : project.title)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-pink-100 dark:border-pink-900/40 bg-white/90 dark:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-[#4B5563] dark:text-slate-200 transition hover:border-pink-300 dark:hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Close" : "Expand"}
                      <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown size={12} />
                      </motion.span>
                    </button>

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline px-3 py-1.5 text-[11px]"
                      >
                        <Github size={12} /> GitHub
                      </a>
                    )}

                    {project.liveLink && !project.liveLink.includes("YOUR_") && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary px-3 py-1.5 text-[11px]"
                      >
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
