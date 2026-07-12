const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h3 className="text-xl font-bold">
            CALERO<span className="text-gray-500">.</span>
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Développement web & intégration.
          </p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#services" className="hover:opacity-70 transition">
            Services
          </a>

          <a href="#projects" className="hover:opacity-70 transition">
            Projets
          </a>

          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </nav>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CALERO Studio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
