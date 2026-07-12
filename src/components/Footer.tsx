const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold">
            CALERO<span className="text-blue-600">.</span>
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Digital studio — Création web moderne.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-black transition">
            Services
          </a>

          <a href="#projects" className="hover:text-black transition">
            Projets
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CALERO Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
