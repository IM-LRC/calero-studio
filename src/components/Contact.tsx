const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-black px-8 py-16 md:px-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Construisons ensemble votre prochain projet digital.
          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            Une idée, une entreprise à développer ou un projet web à créer ?
            CALERO Studio vous accompagne de la conception au développement.
          </p>

          <a
            href="mailto:leocalvo.dev@gmail.com"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-medium text-black transition hover:opacity-80"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
