import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  { value: 1000, suffix: "+", label: "Users Served" },
  { value: 2, suffix: "", label: "Production Internships" },
  { value: 1, suffix: "", label: "International Research Publication" },
  { value: 1, suffix: "", label: "Athletics Captain" },
  { value: 7, suffix: "", label: "Projects Shipped" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function FeaturedHighlights() {
  return (
    <section className="px-6 py-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="soft-gradient-surface section-shell overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-800 shadow-[0_16px_42px_rgba(15,23,42,0.06)] dark:shadow-[0_16px_42px_rgba(0,0,0,0.3)] backdrop-blur"
      >
        <div className="gradient-line h-1 opacity-70" />
        <div className="grid divide-y divide-slate-100 dark:divide-slate-800/80 md:grid-cols-5 md:divide-x md:divide-y-0">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="p-4 text-center"
            >
              <div className="text-xl font-bold tracking-tight text-[#1E1B2E] dark:text-white">
                <Counter value={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563] dark:text-slate-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

