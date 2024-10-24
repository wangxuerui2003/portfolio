import Footer from "@/components/Footer";
import Navbar from "@/components/nav/Navbar";
import Achievements from "@/components/sections/Achievements";
import ContactMe from "@/components/sections/ContactMe";
import Experiences from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import SocialMediaBar from "@/components/SocialMediaBar";
// import Testimonials from "@/components/sections/Testimonials";

export default function Page() {
	return (
		<>
			<Navbar />

			<SocialMediaBar />

			<main>
				<Hero />
				<Experiences />
				<Skills />
				<Achievements />
				<Projects />
				{/* <Testimonials /> */}
				<ContactMe />
			</main>

			<Footer />
		</>
	);
}
