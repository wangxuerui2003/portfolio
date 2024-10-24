"use client";

import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CarouselCard from "../CarouselCard";

export default function Achievements() {
	return (
		<section
			id="achievements"
			className="w-full flex flex-col justify-start mt-12 lg:mt-24 items-center bg-background2 py-12 lg:py-24"
		>
			<div className="flex items-center gap-4">
				<h1 className="font-bold text-4xl lg:text-6xl">Achievements</h1>
				<Image
					src="/icons/checklist.png"
					width={64}
					height={64}
					alt="Achievements"
				/>
			</div>
			<div className="mx-auto w-fit max-w-xs lg:max-w-screen-lg mt-6 lg:mt-12">
				<Carousel
					className="lg:w-full"
					opts={{
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 3000,
						}),
					]}
				>
					<CarouselContent>
						<CarouselCard
							title="CS50 Certificate of completion"
							description="Harvard University introduction to Computer Science course with lectures + problem
          sets + final project."
							imageSrc="/images/CS50x-certificate.png"
							imageAlt="CS50x Certificate"
							link="https://github.com/wangxuerui2003/CS50x"
							linkDescription="Checkout Github"
						/>
						<CarouselCard
							title="AWS Certified Cloud Practitioner"
							description="The introductory level certification to AWS Cloud."
							imageSrc="/images/AWS Certified Cloud Practitioner certificate.png"
							imageAlt="AWS Certified Cloud Practitioner Certificate"
							link="https://cp.certmetrics.com/amazon/en/public/verify/credential/MM4QH7EJ52V1QR5J"
							linkDescription="Verify Certificate"
						/>
						<CarouselCard
							title="Ethereum Kuala Lumpur 2023 Hackathon"
							description="Our team Spin For Good won the 1st prize in the main track"
							imageSrc="/images/ETHKL-pic.jpg"
							imageAlt="ETHKL 2023 Hackathon"
							link="https://devfolio.co/projects/spin-for-good-213b"
							linkDescription="Checkout Project"
						/>
						<CarouselCard
							title="42KL Peer-Defence Hackathon"
							description="An internal 42KL hackathon and my team built a statistical dashboard tool and won the 2nd place."
							imageSrc="/images/42-peer-defence-hackathon-pic.jpg"
							imageAlt="42KL Peer-Defence Hackathon"
							link="https://github.com/wangxuerui2003/42Stats."
							linkDescription="Checkout Github"
						/>
						<CarouselCard
							title="42 Abu Dhabi Global Sustainability Hackathon"
							description="A global sustainability themed hackathon within all 42 campuses worldwide and my team built a few ML models to predict sales and food waste."
							imageSrc="/images/42AbuDhabi-Hackathon-certificate.png"
							imageAlt="42 Abu Dhabi Global Sustainability Hackathon"
							link="https://github.com/wangxuerui2003/42Abu-Dhabi-Global-Hackathon"
							linkDescription="Checkout Github"
						/>
					</CarouselContent>
					<CarouselPrevious className="hidden lg:flex" />
					<CarouselNext className="hidden lg:flex" />
				</Carousel>
			</div>
		</section>
	);
}
