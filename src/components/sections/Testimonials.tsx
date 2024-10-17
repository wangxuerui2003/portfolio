"use client";

import Image from "next/image";

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="w-full h-[100vh] flex flex-col justify-start mt-12 lg:mt-24 items-center bg-background2"
		>
			<div className="flex mt-12 lg:mt-24 items-center gap-4">
				<h1 className="font-bold text-4xl lg:text-6xl">Testimonials</h1>
				<Image
					src="/icons/testimonial.png"
					width={64}
					height={64}
					alt="Achievements"
				/>
			</div>
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-col items-center">
					<div className="relative mt-10 md:mt-24 md:order-2">
						<div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
							<div
								className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
								style={{
									background:
										"linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
								}}
							/>
						</div>
						<div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
							<Testimonial
								name="Ricky Wong"
								occupation="Software Engineer in Experian Malaysia"
								avatar="/avatars/mofyduck.jpeg"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante nec odio
						fermentum."
							/>
							<Testimonial
								name="Ricky Wong"
								occupation="Software Engineer in Experian Malaysia"
								avatar="/avatars/mofyduck.jpeg"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante nec odio
						fermentum."
							/>
							<Testimonial
								name="Ricky Wong"
								occupation="Software Engineer in Experian Malaysia"
								avatar="/avatars/mofyduck.jpeg"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante nec odio
						fermentum."
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto w-fit max-w-xs lg:max-w-screen-lg mt-6 lg:mt-12"></div>
		</section>
	);
}

function Testimonial({
	name,
	occupation,
	avatar,
	text,
}: {
	name: string;
	occupation: string;
	avatar: string;
	text: string;
}) {
	return (
		<div className="flex flex-col overflow-hidden shadow-xl">
			<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
				<div className="flex-1">
					<blockquote className="flex-1">
						<p className="text-lg leading-relaxed text-gray-900 font-pj">
							{text}
						</p>
					</blockquote>
				</div>
				<div className="flex items-center mt-8">
					<Image
						className="flex-shrink-0 object-cover rounded-full w-11 h-11"
						width={42}
						height={42}
						src={avatar}
						alt={name}
					/>
					<div className="ml-4">
						<p className="text-base font-bold text-gray-900 font-pj">{name}</p>
						<p className="mt-0.5 text-sm font-pj text-gray-600">{occupation}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
