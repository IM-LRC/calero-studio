"use client";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const [active, setActive] = useState("");
  const navLinks = [
    { name: "Studio", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Réalisations", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-black/5" />

      <div
        className="
          absolute
          top-full
          left-0
          h-32
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
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`
  relative
  transition-all
  duration-300
  ${active === link.id ? "text-black" : "text-gray-600 hover:text-black"}
`}
              >
                {link.name}

                <span
                  className={`
    absolute
    -bottom-2
    left-0
    h-[2px]
    w-full
    origin-left
    bg-blue-600
    transition-all
    duration-1000
    ease-out
    ${active === link.id ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
  `}
                />
              </a>
            </li>
          ))}
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
          <span className="relative z-10">Démarrer un projet</span>

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
