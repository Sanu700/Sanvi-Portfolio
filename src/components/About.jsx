import { motion } from "framer-motion";

const stats = [
  { value: "1,000+", label: "Users Served" },
  { value: "2",      label: "Internships" },
  { value: "7",      label: "Projects Shipped" },
  { value: "AUC 0.80", label: "ML Model Score" },
];

export default function About() {
  return (
    <section id="about" className="py-14 px-6">
      <div className="section-shell">
        <motion.div className="text-center mb-8"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="eyebrow">About Me</span>
          <h2 className="section-title text-3xl md:text-4xl mt-3">
            More than just <span className="gradient-text">code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          <div className="space-y-3">
            {[
              { emoji: "🎓", title: "The Student", text: "Final year Mechanical Engineering student at BITS Pilani, Hyderabad, with a Minor in Computation & Intelligence (AI/ML). I went deep on software because it's where I found my craft." },
              { emoji: "⚡", title: "The Builder", text: "I've shipped production apps used by 1,000+ real users, built ML pipelines with measurable business impact, and led engineering teams — not side projects, but real shipped work." },
              { emoji: "🏆", title: "The Leader", text: "Athletics Captain at BITS Hyderabad leading 40 members. I presented research at an international conference and consistently take ownership from idea to deployment." },
            ].map((block, i) => (
              <motion.div key={block.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass glass-hover gradient-border rounded-[1.4rem] p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/10 text-xl">{block.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-[#1E1B2E] dark:text-white mb-1.5 text-sm">{block.title}</h3>
                    <p className="section-copy text-sm leading-relaxed">{block.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="glass glass-hover gradient-border rounded-[1.4rem] p-5 text-center">
                <div className="text-2xl font-bold gradient-text mb-1.5">{stat.value}</div>
                <div className="text-[#4B5563] dark:text-slate-300 text-xs uppercase tracking-widest font-poppins">{stat.label}</div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-2 glass gradient-border rounded-[1.4rem] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#1E1B2E] dark:text-white font-semibold mb-1">BITS Pilani, Hyderabad</div>
                  <div className="section-copy text-sm">B.E. Mechanical Engg · Minor CNI</div>
                </div>
                <div className="text-right">
                  <div className="text-[#4B5563] dark:text-slate-300 text-xs mb-1">CGPA</div>
                  <div className="text-2xl font-bold gradient-text">7.61</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

