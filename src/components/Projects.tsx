const Projects = () => {
  const projects = [
    {
      title: "Projet Web 01",
      description:
        "Création d'une interface moderne avec une expérience utilisateur optimisée.",
      stack: "Next.js • Tailwind CSS",
    },
    {
      title: "Projet Web 02",
      description: "Développement d'un site vitrine responsive et performant.",
      stack: "React • TypeScript",
    },
    {
      title: "Projet Web 03",
      description: "Intégration d'une maquette design en application web.",
      stack: "Figma • Front-end",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Quelques projets réalisés.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border overflow-hidden"
            >
              <div className="h-52 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Aperçu du projet</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-gray-600">{project.description}</p>

                <p className="mt-4 text-sm text-gray-500">{project.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
