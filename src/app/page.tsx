import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<header>
				<Image
					src="/images/profile-picture.jpg"
					alt="Profile Picture"
					width={240}
					height={240}
				/>

				<Navbar />
			</header>

			<main>
				<section id="home"></section>
				<section id="skills"></section>
				<section id="achievements"></section>
				<section id="projects"></section>
				<section id="testimonials"></section>
				<section id="contact-me"></section>
			</main>

			<footer></footer>
		</>
	);
}
