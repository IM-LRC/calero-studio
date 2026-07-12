export const Navbar = () => {
  return (
    <header className="w-full border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
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

        {/* Bouton */}
        <a
          href="#contact"
          className="rounded-full bg-black px-5 py-2 text-sm text-white hover:opacity-80 transition"
        >
          Démarrer un projet
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
