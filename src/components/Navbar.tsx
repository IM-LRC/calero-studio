export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-black/5" />

      <div
        className="
          absolute
          top-full
          left-0
          h-50
          w-full
          bg-gradient-to-b
          from-white/70
          to-transparent
          pointer-events-none
        "
      />

      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          CALERO<span className="text-gray-500">.</span>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <a href="#services" className="hover:opacity-70 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:opacity-70 transition">
              Projets
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:opacity-70 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="
            group
            relative
            overflow-hidden
            rounded-full
            bg-black
            px-5
            py-2
            text-white
            transition
          "
        >
          <span className="relative z-10">
            Démarrer un projet
          </span>

          <span
            className="
              absolute
              inset-0
              translate-y-full
              bg-blue-600
              transition-transform
              duration-700
              group-hover:translate-y-0
            "
          />
        </a>

      </nav>
    </header>
  );
};

export default Navbar;
