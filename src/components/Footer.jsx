export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-pink-100 dark:border-pink-900/30 bg-white/45 dark:bg-[#080611]/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-pacifico text-lg gradient-text-warm">Sanvi Udhan</span>
        <p className="text-[#4B5563] dark:text-slate-400 text-xs text-center">
          Built with curiosity, lots of coffee, and an unhealthy number of pink gradients 🌸
        </p>
        <p className="text-[#4B5563] dark:text-slate-400 text-xs">© 2026 Sanvi Udhan</p>
      </div>
    </footer>
  );
}

