import Reveal from "@/components/Reveal";

const About = () => {
  return (
    <section id="about" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
              À propos
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Derrière CALERO Studio.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              CALERO Studio est un studio digital indépendant fondé par Léo,
              spécialisé dans la création de sites web modernes, performants et
              sur mesure.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
