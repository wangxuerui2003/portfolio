import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Page() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<Skills />
				<section id="achievements"></section>
				<section id="projects"></section>
				<section id="testimonials"></section>
				<section id="contact-me"></section>
			</main>

			<footer></footer>
		</>
	);
}
