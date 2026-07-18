import Reveal from "@/components/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
                Contact
              </p>

              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                Construisons ensemble votre prochain projet.
              </h2>

              <p className="mt-6 max-w-md text-lg text-gray-600">
                Une idée, un site à créer ou une refonte ? Échangeons autour de
                votre projet.
              </p>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Votre nom"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-black
                "
              />

              <input
                type="email"
                placeholder="Votre email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-black
                "
              />

              <input
                type="text"
                placeholder="Sujet"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-black
                "
              />

              <textarea
                placeholder="Parlez-moi de votre projet..."
                rows={5}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-black
                "
              />

              <button
                type="submit"
                className="
                  rounded-full
                  bg-black
                  px-8
                  py-4
                  text-white
                  transition
                  hover:bg-blue-600
                "
              >
                Envoyer
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
