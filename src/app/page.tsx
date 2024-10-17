import Navbar from "@/components/nav/Navbar";
import Achievements from "@/components/sections/Achievements";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
// import Testimonials from "@/components/sections/Testimonials";

export default function Page() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<Skills />
				<Achievements />
				<Projects />
				{/* <Testimonials /> */}
				<section id="contact-me"></section>
			</main>

			<footer></footer>
		</>
	);
}
