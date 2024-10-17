import Navbar from "@/components/nav/Navbar";
import Achievements from "@/components/sections/Achievements";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Achievements />
        <section id="projects"></section>
        <section id="testimonials"></section>
        <section id="contact-me"></section>
      </main>

      <footer></footer>
    </>
  );
}
