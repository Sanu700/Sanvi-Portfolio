import { motion } from "framer-motion";

export default function EngineeringPhilosophy() {
  return (
    <section className="px-6 py-10 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-shell"
      >
        <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white px-6 py-9 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:px-9">
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-slate-100 blur-3xl" />
          <div className="absolute -bottom-32 left-12 h-56 w-56 rounded-full bg-pink-50 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="eyebrow">Engineering Philosophy</span>
            <h2 className="section-title mt-3 text-3xl md:text-4xl">Simple solutions that scale beautifully.</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-[#4B5563]">
              <p>I enjoy building software that balances performance, usability, and maintainability.</p>
              <p>
                Whether it's an ML pipeline, backend API, or full-stack application, I love understanding the problem
                first and designing the simplest solution that scales.
              </p>
              <p className="font-medium text-[#1E1B2E]">
                The best products aren't the ones with the most features; they're the ones that solve the right problem
                beautifully.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
