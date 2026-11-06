import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Pricing />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
