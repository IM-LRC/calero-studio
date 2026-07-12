import Reveal from "@/components/Reveal";
const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6">
        <Reveal>
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-600">
              CALERO Studio
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Nous créons des expériences web
              <span className="text-gray-400"> modernes et performantes.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              CALERO Studio accompagne les entreprises et les projets ambitieux
              dans la création de sites web élégants, rapides et pensés pour
              convertir.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-black px-8 py-4 text-center text-white transition hover:opacity-80"
              >
                Voir nos projets
              </a>

              <a
                href="#contact"
                className="rounded-full border px-8 py-4 text-center transition hover:bg-black hover:text-white"
              >
                Démarrer un projet
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
