import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Sigma } from "lucide-react";

const topics = [
  "Arrays & Hashing",
  "2 Pointers",
  "Sliding Window",
  "Stacks",
  "Sorting Algorithms",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Greedy Algorithm",
  "Linked Lists",
];

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-14 px-6">
      <div className="section-shell">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Problem Solving</span>

          <h2 className="section-title text-3xl md:text-4xl mt-3">
            Sharpening the{" "}
            <span className="gradient-text">fundamentals</span>
          </h2>

          <p className="section-copy mt-3 max-w-xl mx-auto text-sm">
            Building daily DSA practice alongside shipped products — because
            strong fundamentals make better engineers.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass glass-hover gradient-border rounded-[1.4rem] p-6 flex h-full flex-col justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-xl">
                  <Sigma size={20} color="#db2777" />
                </span>

                <h3 className="font-semibold text-[#1E1B2E]">
                  Currently grinding DSA
                </h3>
              </div>

              <p className="section-copy text-sm leading-relaxed">
                Working through core data structures and algorithms patterns :-
                arrays, trees, graphs, and dynamic programming - with solutions
                tracked in a dedicated repo and progress logged on LeetCode.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-5">
              <a
                href="https://leetcode.com/Sanvi2112"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs"
              >
                <ExternalLink size={13} />
                LeetCode Profile
              </a>

              <a
                href="https://github.com/Sanu700"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs"
              >
                <Github size={13} />
                DSA Repo
              </a>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass glass-hover gradient-border rounded-[1.4rem] p-6 flex h-full flex-col"
          >
            <h3 className="font-semibold text-[#1E1B2E] mb-5 flex items-center gap-2 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50">
                <Code2 size={16} color="#7c3aed" />
              </span>
              Topics in focus
            </h3>

            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <motion.span
                  key={topic}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="skill-pill text-xs px-4 py-2 rounded-full font-medium"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(226,232,240,0.95)",
                    color: "#4B5563",
                  }}
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}