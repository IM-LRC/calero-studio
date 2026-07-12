const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
          Contact
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
          Construisons ensemble votre prochain projet digital.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Une idée, une entreprise à développer ou un projet web à créer ?
          CALERO Studio vous accompagne de la conception au développement.
        </p>

        <a
          href="mailto:leocalvo.dev@gmail.com"
          className="
        group
        relative
        mt-10
        inline-flex
        overflow-hidden
        rounded-full
        bg-black
        px-8
        py-4
        text-white
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
      </div>
    </section>
  );
};

export default Contact;
