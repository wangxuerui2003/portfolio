import Image from "next/image";

export default function ContactMe() {
	return (
		<section
			id="contact-me"
			className="w-full h-[80vh] px-6 lg:px-24 bg-background2 flex flex-col justify-start items-center flex-grow gap-6"
		>
			<div className="flex mt-12 lg:mt-24 items-center gap-4">
				<h1 className="font-bold text-4xl lg:text-6xl">Contact Me</h1>
				<Image src="/icons/contact.png" width={64} height={64} alt="Projects" />
			</div>
		</section>
	);
}
