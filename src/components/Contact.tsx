"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error();
      }

      setStatus("Merci pour votre message. Je reviens vers vous rapidement.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

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

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
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
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
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
                name="subject"
                value={form.subject}
                onChange={handleChange}
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
                required
                name="message"
                value={form.message}
                onChange={handleChange}
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
                disabled={loading}
                className="
                  rounded-full
                  bg-black
                  px-8
                  py-4
                  text-white
                  transition
                  hover:bg-blue-600
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>

              {status && <p className="text-sm text-gray-600">{status}</p>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
