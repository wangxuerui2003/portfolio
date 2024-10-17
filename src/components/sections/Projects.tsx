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

export default function Projects() {
	return (
		<section
			id="projects"
			className="w-full h-[100vh] px-6 lg:px-24 bg-background flex flex-col justify-start items-center flex-grow gap-6"
		>
			<div className="flex mt-12 lg:mt-24 items-center gap-4">
				<h1 className="font-bold text-4xl lg:text-6xl">Projects</h1>
				<Image
					src="/icons/programming.png"
					width={64}
					height={64}
					alt="Projects"
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
							delay: 5000,
						}),
					]}
				>
					<CarouselContent>
						<CarouselCard
							title="Ft-Transcendence"
							description="An online Pong game with pvp, pve, and tournament mode. With additional features like chat, friend system, and more. Built with Django, Vanilla JS and CSS."
							imageSrc="/images/aispong.gif"
							imageAlt="ft_transcendence"
							link="https://tcd.wxuerui.xyz/"
							linkDescription="Checkout Website"
						/>
						<CarouselCard
							title="Webserv"
							description="A Nginx-like web server built with C++."
							imageSrc="/images/nginx.png"
							imageAlt="Webserv"
							link="https://github.com/wangxuerui2003/webserv"
							linkDescription="Checkout Github"
						/>
						<CarouselCard
							title="Cub3D"
							description="A 2.5D game built with pure C and an OpenGL-like graphics library minilibx."
							imageSrc="/images/ETHKL-pic.jpg"
							imageAlt="Cub3D"
							link="https://github.com/wangxuerui2003/cub3D/"
							linkDescription="Checkout Github"
						/>
						<CarouselCard
							title="Minishell"
							description="A bash-like shell built with C, with a beautiful prompt."
							imageSrc="/images/minishell.gif"
							imageAlt="Minishell"
							link="https://github.com/wangxuerui2003/42_minishell"
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
