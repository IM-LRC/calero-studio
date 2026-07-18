import Reveal from "@/components/Reveal";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Projet interne",
      category: "Design • Développement",
      description:
        "Création d'une identité digitale minimaliste et d'une expérience web performante.",
      stack: "Next.js / Tailwind CSS",
      image: "/projects/project-1.png",
    },
    {
      title: "Dashboard Web",
      category: "Application Web",
      description:
        "Conception d'une interface moderne pensée pour simplifier la gestion des données.",
      stack: "React / TypeScript",
      image: "/projects/project-2.png",
    },
    {
      title: "Refonte d'interface",
      category: "UX • Front-end",
      description:
        "Modernisation d'une expérience web avec une approche centrée sur l'utilisateur.",
      stack: "Design / Front-end",
      image: "/projects/project-3.png",
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
            Réalisations
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Des projets conçus avec précision.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="group transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
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
