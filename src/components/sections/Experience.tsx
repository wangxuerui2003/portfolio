import Image from "next/image";

export default function Experiences() {
	return (
		<section
			id="experience"
			className="flex flex-col justify-start items-center bg-background2 w-full py-12 lg:py-24 gap-3"
		>
			<div className="flex items-center gap-4">
				<h1 className="font-bold text-4xl lg:text-6xl">Experience</h1>
				<Image
					src="/icons/parchment.png"
					width={64}
					height={64}
					alt="Experience"
				/>
			</div>
			<div className="flex flex-col justify-between items-center mt-6 lg:mt-12">
				<ExperienceCard
					header="Laravel Developer Intern"
					timePeriod="(May 2024 - Aug 2024)"
					imageSrc="/images/alphacloud-logo.jpeg"
					imageAlt="Alphacloud Logo"
					description="Alphacloud is a Digital Transformation provider in Malaysia.
				In my internship I involved in the full stack web developers team using Laravel,
				as well as building a Desktop app for a client's physical store with .NET C#.
				"
				/>
			</div>
		</section>
	);
}

function ExperienceCard({
	header,
	timePeriod,
	imageSrc,
	imageAlt,
	description,
}: {
	header: string;
	timePeriod: string;
	imageSrc: string;
	imageAlt: string;
	description: string;
}) {
	return (
		<div className="bg-card w-3/4 lg:w-1/2 p-8 rounded-lg flex flex-col justify-center items-start space-y-4 shadow-md">
			<div>
				<Image
					className="rounded-md"
					src={imageSrc}
					alt={imageAlt}
					width={84}
					height={84}
				/>
				<p className="text-sm lg:text-md">Alphacloud Sdn. Bhd.</p>
			</div>
			<div>
				<h2 className="font-bold text-xl lg:text-2xl">{header}</h2>
				<p className="text-sm lg:text-md">{timePeriod}</p>
			</div>
			<p className="font-thin text-sm lg:text-md">{description}</p>
		</div>
	);
}
