import Link from 'next/link';

export default function Navbar() {
	return (
		<nav>
			<Link href="#home">Home</Link>
			<Link href="#skills">Skills</Link>
			<Link href="#achievements">Achievements</Link>
			<Link href="#projects">Projects</Link>
			<Link href="#testimonials">Testimonials</Link>
			<Link href="#contact-me">Contact Me</Link>
		</nav>
	);
}
