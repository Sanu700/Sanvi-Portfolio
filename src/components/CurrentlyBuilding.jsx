import { motion } from "framer-motion";
import { Code2, Network } from "lucide-react";

const items = [
  {
    title: "DSA Practice",
    detail: "Building daily depth in data structures, algorithms, and problem-solving patterns.",
    icon: <Code2 size={17} color="#db2777" />,
  },
  {
    title: "Software Developer Intern @ Jodo",
    detail: "Currently building backend services and production systems in fintech.",
    icon: <Code2 size={17} color="#7C3AED" />,
  },
  {
    title: "Distributed Systems & System Design",
    detail: "Learning scalable architectures, reliability patterns, and trade-off thinking.",
    icon: <Network size={17} color="#38bdf8" />,
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="px-6 pb-6 -mt-10 sm:-mt-14">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass rounded-[1.5rem] p-4 sm:p-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="lg:w-52">
              <span className="eyebrow">Currently Building</span>
              <h2 className="section-title mt-2 text-xl dark:text-white">Focused momentum</h2>
            </div>
            <div className="grid flex-1 gap-3 md:grid-cols-3">
              {items.map(({ title, detail, icon }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="soft-gradient-surface relative overflow-hidden rounded-[1.25rem] border border-slate-200 dark:border-slate-800 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
                >
                  <div className="gradient-line absolute inset-x-0 top-0 h-0.5 opacity-70" />
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/10">
                    {icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[#1E1B2E] dark:text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#4B5563] dark:text-slate-300">{detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

