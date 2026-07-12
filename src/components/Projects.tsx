import Reveal from "@/components/Reveal";
const Projects = () => {
  const projects = [
    {
      title: "Site vitrine premium",
      category: "Web Design • Développement",
      description:
        "Création d'une expérience web moderne pensée pour valoriser une marque et améliorer sa présence digitale.",
      stack: "Next.js / Tailwind CSS",
    },
    {
      title: "Plateforme digitale",
      category: "Application Web",
      description:
        "Conception d'une interface rapide et intuitive adaptée aux besoins des utilisateurs.",
      stack: "React / TypeScript",
    },
    {
      title: "Refonte digitale",
      category: "UX • Front-end",
      description:
        "Modernisation complète d'une identité web avec une approche centrée expérience utilisateur.",
      stack: "Design / Front-end",
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
            Portfolio
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Des expériences digitales conçues avec précision.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
                  <div className="flex h-full items-center justify-center text-gray-400 transition duration-500 group-hover:scale-105">
                    Aperçu projet
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-blue-600">{project.category}</p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-600">{project.description}</p>

                  <p className="mt-5 text-sm text-gray-400">{project.stack}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
