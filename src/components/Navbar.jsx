import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Journey", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b" : ""
      }`}
      style={{ borderColor: scrolled ? "rgba(255,255,255,0.06)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a href="#hero" whileHover={{ scale: 1.03 }}
          className="font-pacifico text-xl gradient-text-warm">
          Sanvi Udhan
        </motion.a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link font-poppins">
              {link}
            </a>
          ))}
          <a href="/resume.pdf" download
            className="btn-primary text-sm py-2 px-5">
            Resume ↓
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/60 hover:text-white transition-colors"
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
            className="md:hidden glass border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-white transition-colors text-sm font-poppins"
                  onClick={() => setMenuOpen(false)}>
                  {link}
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
