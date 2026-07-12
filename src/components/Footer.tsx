const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold">
            CALERO<span className="text-blue-600">.</span>
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Digital studio — Création d'expériences web modernes.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <a
            href="mailto:hello@calero.studio"
            className="hover:text-black transition"
          >
            hello@calero.studio
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
