import Reveal from "@/components/Reveal";

const Hero = () => {
  return (
    <section className="min-h-[75vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6">
        <Reveal>
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-600">
              CALERO Studio
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Sites web
              <span className="text-gray-400"> modernes et performants.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              CALERO conçoit des expériences digitales qui allient design,
              performance et simplicité.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-black
                  px-8
                  py-4
                  text-white
                  transition
                "
              >
                <span className="relative z-10">Parler de mon projet</span>

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

              <a
                href="#projects"
                className="
                  rounded-full
                  border
                  border-gray-300
                  px-8
                  py-4
                  transition
                  hover:border-black
                "
              >
                Voir les réalisations
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
