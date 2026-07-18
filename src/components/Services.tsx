import Reveal from "@/components/Reveal";

const Services = () => {
  const services = [
    {
      title: "Création de sites web",
      description:
        "Des expériences web modernes pensées pour valoriser votre activité.",
    },
    {
      title: "Développement sur mesure",
      description:
        "Des solutions web personnalisées pensées pour répondre à vos objectifs.",
    },
    {
      title: "Design & expérience utilisateur",
      description:
        "Des interfaces élégantes conçues pour offrir une expérience fluide.",
    },
  ];

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-20 max-w-3xl text-center md:text-left">
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
              key={service.title}
              className="
                group
                flex
                flex-col
                gap-6
                py-10
                md:flex-row
                md:items-start
                md:justify-between
              "
            >
              <h3
                className="
                  text-2xl
                  font-semibold
                  transition
                  group-hover:text-blue-600
                "
              >
                {service.title}
              </h3>

              <p className="max-w-xl text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
