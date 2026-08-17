import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "DSA", id: "problem-solving" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", ...navItems.map(item => item.id)];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/78 shadow-[0_12px_40px_rgba(236,72,153,0.08)] backdrop-blur-xl" : "bg-white/35 backdrop-blur-sm"
      }`}
      style={{ borderBottom: scrolled ? "1px solid rgba(244,114,182,0.13)" : "1px solid transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a href="#hero" whileHover={{ scale: 1.03 }}
          className="font-pacifico text-xl gradient-text-warm">
          Sanvi Udhan
        </motion.a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link font-poppins ${active === item.id ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <a href="/resume.pdf" download
            className="btn-primary text-sm py-2 px-5">
            Resume ↓
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-full border border-pink-100 bg-white/70 p-2 text-[#1E1B2E] transition-colors hover:text-pink-500"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-pink-100 bg-white/90 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`}
                  className={`text-sm font-poppins transition-colors ${active === item.id ? "text-pink-500" : "text-[#4B5563] hover:text-[#1E1B2E]"}`}
                  onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="/resume.pdf" download className="btn-primary text-sm text-center justify-center">
                Resume ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
