import { motion } from "framer-motion";
import { Bot, Braces, Database, Hammer, Users } from "lucide-react";

const roles = [
  { title: "Backend Engineering", icon: <Database size={17} color="#db2777" /> },
  { title: "Full Stack Development", icon: <Braces size={17} color="#7c3aed" /> },
  { title: "AI Engineering", icon: <Bot size={17} color="#475569" /> },
  { title: "Developer Tools", icon: <Hammer size={17} color="#db2777" /> },
  { title: "Building products used by thousands", icon: <Users size={17} color="#7c3aed" /> },
];

export default function LookingFor() {
  return (
    <section className="px-6 pb-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <span className="eyebrow">What I'm Looking For</span>
          <h2 className="section-title mt-3 text-2xl md:text-3xl">Roles where product sense meets engineering depth.</h2>
        </motion.div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {roles.map(({ title, icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="rounded-[1.25rem] border border-slate-200 bg-white/85 p-4 text-center shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                {icon}
              </div>
              <h3 className="text-sm font-semibold leading-snug text-[#1E1B2E]">{title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
