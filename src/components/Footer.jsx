export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-pacifico text-lg gradient-text-warm">Sanvi Udhan</span>
        <p className="text-white/20 text-xs text-center">
          Designed & built with 💜 · BITS Pilani '27 · Open to SWE Internships
        </p>
        <p className="text-white/20 text-xs">© 2026 Sanvi Udhan</p>
      </div>
    </footer>
  );
}
