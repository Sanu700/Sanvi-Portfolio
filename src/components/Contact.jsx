import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-xs font-medium tracking-widest uppercase text-pink-400/60">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm">
            Looking for Summer 2026 internships in SWE · Full-Stack · ML. Open to collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="glass gradient-border rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white/35 text-xs uppercase tracking-widest mb-2 block">Name</label>
                <input type="text" placeholder="Your name" className="glass-input" required />
              </div>
              <div>
                <label className="text-white/35 text-xs uppercase tracking-widest mb-2 block">Email</label>
                <input type="email" placeholder="your@email.com" className="glass-input" required />
              </div>
              <div>
                <label className="text-white/35 text-xs uppercase tracking-widest mb-2 block">Message</label>
                <textarea rows={4} placeholder="Tell me about the opportunity..."
                  className="glass-input resize-none" required />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center">
                {sent ? "✓ Sent!" : <><Send size={14} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4">
            {[
              { icon: Mail,     label: "Email",    value: "udhansanvi@gmail.com",         href: "mailto:udhansanvi@gmail.com",          color: "#f472b6" },
              { icon: Github,   label: "GitHub",   value: "github.com/Sanu700",           href: "https://github.com/Sanu700",          color: "#c084fc" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sanvi-udhan",  href: "https://linkedin.com/in/sanvi-udhan-21a84a2b4", color: "#60a5fa" },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                whileHover={{ x: 5 }}
                className="glass glass-hover gradient-border rounded-2xl p-5 flex items-center gap-4 block"
                style={{ textDecoration: "none" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center glass"
                  style={{ border: `1px solid ${color}25` }}>
                  <Icon size={17} style={{ color }} />
                </div>
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-widest">{label}</div>
                  <div className="text-white/65 text-sm mt-0.5">{value}</div>
                </div>
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="glass gradient-border rounded-2xl p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" style={{ animation: "pulse 2s infinite" }} />
                <span className="text-green-400 text-xs uppercase tracking-widest">Available</span>
              </div>
              <p className="text-white/35 text-xs">Open to Summer 2026 Internships</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
