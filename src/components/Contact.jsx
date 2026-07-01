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
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title text-3xl md:text-4xl mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-copy mt-4 max-w-xl mx-auto text-sm">
            Have an exciting opportunity or just want to say hi? I'd love to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="glass gradient-border rounded-[1.5rem] p-6 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[#4B5563] text-xs uppercase tracking-widest mb-2 block">Name</label>
                <input type="text" placeholder="Your name" className="glass-input" required />
              </div>
              <div>
                <label className="text-[#4B5563] text-xs uppercase tracking-widest mb-2 block">Email</label>
                <input type="email" placeholder="your@email.com" className="glass-input" required />
              </div>
              <div>
                <label className="text-[#4B5563] text-xs uppercase tracking-widest mb-2 block">Message</label>
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
              { icon: <Mail size={17} style={{ color: "#f472b6" }} />,     label: "Email",    value: "udhansanvi@gmail.com",         href: "mailto:udhansanvi@gmail.com",          color: "#f472b6" },
              { icon: <Github size={17} style={{ color: "#c084fc" }} />,   label: "GitHub",   value: "github.com/Sanu700",           href: "https://github.com/Sanu700",          color: "#c084fc" },
              { icon: <Linkedin size={17} style={{ color: "#60a5fa" }} />, label: "LinkedIn", value: "linkedin.com/in/sanvi-udhan",  href: "https://linkedin.com/in/sanvi-udhan-21a84a2b4", color: "#60a5fa" },
            ].map(({ icon, label, value, href, color }) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                whileHover={{ x: 5 }}
                className="glass glass-hover gradient-border rounded-[1.25rem] p-4 flex items-center gap-3 block"
                style={{ textDecoration: "none" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white"
                  style={{ border: `1px solid ${color}25` }}>
                  {icon}
                </div>
                <div>
                  <div className="text-[#4B5563] text-xs uppercase tracking-widest">{label}</div>
                  <div className="text-[#1E1B2E] text-sm mt-0.5">{value}</div>
                </div>
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="glass gradient-border rounded-[1.25rem] p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" style={{ animation: "pulse 2s infinite" }} />
                <span className="text-green-400 text-xs uppercase tracking-widest">Available</span>
              </div>
              <p className="section-copy text-xs">Open to Summer 2026 Internships</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
