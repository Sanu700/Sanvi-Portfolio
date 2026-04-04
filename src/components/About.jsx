import { motion } from "framer-motion";

const stats = [
  { value: "1,000+", label: "Users Served" },
  { value: "2",      label: "Internships" },
  { value: "6+",     label: "Projects Shipped" },
  { value: "AUC 0.80", label: "ML Model Score" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-xs font-medium tracking-widest uppercase text-pink-400/60">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            More than just <span className="gradient-text">code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            {[
              { emoji: "🎓", title: "The Student", text: "Pre-final year Mechanical Engineering student at BITS Pilani, Hyderabad, with a Minor in Computation & Intelligence (AI/ML). I went deep on software because it's where I found my craft." },
              { emoji: "⚡", title: "The Builder", text: "I've shipped production apps used by 1,000+ real users, built ML pipelines with measurable business impact, and led engineering teams — not side projects, but real shipped work." },
              { emoji: "🏆", title: "The Leader", text: "Athletics Captain at BITS Hyderabad leading 40 members. I presented research at an international conference and consistently take ownership from idea to deployment." },
            ].map((block, i) => (
              <motion.div key={block.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass glass-hover gradient-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{block.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1.5 text-sm">{block.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{block.text}</p>
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
                className="glass glass-hover gradient-border rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-1.5">{stat.value}</div>
                <div className="text-white/35 text-xs uppercase tracking-widest font-poppins">{stat.label}</div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-2 glass gradient-border rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold mb-1">BITS Pilani, Hyderabad</div>
                  <div className="text-white/40 text-sm">B.E. Mechanical Engg · Minor AI/ML</div>
                </div>
                <div className="text-right">
                  <div className="text-white/40 text-xs mb-1">CGPA</div>
                  <div className="text-3xl font-bold gradient-text">7.61</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
