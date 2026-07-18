import Reveal from "@/components/Reveal";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Création de sites web",
      description:
        "Des sites vitrines modernes, rapides et adaptés à votre activité.",
    },
    {
      number: "02",
      title: "Développement sur mesure",
      description:
        "Des interfaces web performantes conçues avec des technologies modernes.",
    },
    {
      number: "03",
      title: "Design & expérience utilisateur",
      description:
        "Des interfaces simples et élégantes pensées pour vos utilisateurs.",
    },
  ];

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
              Services
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Des solutions digitales pensées pour durer.
            </h2>
          </div>
        </Reveal>

        <div className="divide-y border-y">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between"
            >
              <div className="flex gap-8">
                <span className="text-sm text-gray-400">{service.number}</span>

                <h3 className="text-2xl font-semibold transition group-hover:text-blue-600">
                  {service.title}
                </h3>
              </div>

              <p className="max-w-xl text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
