const Services = () => {
  const services = [
    {
      title: "Création de sites web",
      description:
        "Sites vitrines modernes pensés pour présenter votre activité et convertir vos visiteurs.",
    },
    {
      title: "Intégration front-end",
      description:
        "Transformation de maquettes Figma en interfaces rapides, propres et responsives.",
    },
    {
      title: "Expérience utilisateur",
      description:
        "Des interfaces simples, élégantes et adaptées aux besoins de vos utilisateurs.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Des solutions web adaptées à vos projets.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
