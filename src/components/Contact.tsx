const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-black px-8 py-16 text-white md:px-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Contact
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            Un projet web en tête ? Créons quelque chose de remarquable.
          </h2>

          <p className="mt-6 max-w-xl text-gray-300">
            Vous avez une idée, un projet ou besoin d'un site moderne ?
            Contactez CALERO Studio pour en discuter.
          </p>

          <a
            href="mailto:leocalvo.dev@gmail.com"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:opacity-80"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
