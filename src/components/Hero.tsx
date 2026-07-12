const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
          CALERO Studio
        </p>

        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight">
          Création de sites web modernes pour des projets ambitieux.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Nous concevons des expériences digitales rapides, élégantes et
          adaptées aux besoins des entreprises.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-black px-6 py-3 text-white">
            Voir mes projets
          </button>

          <button className="rounded-full border px-6 py-3">
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
