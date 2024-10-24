"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NavLink from "./NavLink";
import NavLinkMobile from "./NavLinkMobile";
import React, { useEffect } from "react";

export default function Navbar() {
	const [isSheetOpen, setIsSheetOpen] = React.useState(false);
	const [scrollPercentage, setScrollPercentage] = React.useState(0);

	const handleNavLinkClick = () => {
		setIsSheetOpen(false);
	};

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const docHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrollPercent = (scrollTop / docHeight) * 100;
		setScrollPercentage(scrollPercent);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="sticky top-0 flex h-24 w-full shrink-0 items-center z-10 bg-background px-8 md:px-24 py-4 shadow-lg opacity-95">
			<div className="fixed top-0 left-0 w-full h-2">
				<div
					className="h-full bg-primary"
					style={{ width: `${scrollPercentage}%` }}
				></div>
			</div>
			<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
				<div className="w-full flex justify-between items-center lg:hidden">
					<Link
						href="#hero"
						className="mr-6 lg:hidden"
						prefetch={false}
						onClick={handleNavLinkClick}
					>
						<div className="flex items-center">
							<ProfilePicture />
							<h2 className="ml-4 text-xl font-bold">Ray Wang</h2>
						</div>
						<span className="sr-only">Ray Wang</span>
					</Link>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="lg:hidden">
							<MenuIcon />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
				</div>
				<SheetContent side="left">
					<div className="grid gap-2 py-6">
						<NavLinkMobile onClick={handleNavLinkClick} href="#hero">
							About
						</NavLinkMobile>
						<NavLinkMobile onClick={handleNavLinkClick} href="#experience">
							Experience
						</NavLinkMobile>
						<NavLinkMobile onClick={handleNavLinkClick} href="#skills">
							Skills
						</NavLinkMobile>
						<NavLinkMobile onClick={handleNavLinkClick} href="#achievements">
							Achievements
						</NavLinkMobile>
						<NavLinkMobile onClick={handleNavLinkClick} href="#projects">
							Projects
						</NavLinkMobile>
						{/* <NavLinkMobile onClick={handleNavLinkClick} href="#testimonials">
							Testimonials
						</NavLinkMobile> */}
						<NavLinkMobile onClick={handleNavLinkClick} href="#contact-me">
							Contact
						</NavLinkMobile>
					</div>
				</SheetContent>
			</Sheet>
			<Link href="#hero" className="mr-6 hidden lg:flex" prefetch={false}>
				<div className="flex items-center transition hover:scale-105 ease-linear duration-75">
					<ProfilePicture />
					<h2 className="ml-4 text-xl font-bold">Ray Wang</h2>
				</div>
				<span className="sr-only">Ray Wang</span>
			</Link>
			<nav className="ml-auto hidden lg:flex gap-6">
				<NavLink href="#experience">Experience</NavLink>
				<NavLink href="#skills">Skills</NavLink>
				<NavLink href="#achievements">Achievements</NavLink>
				<NavLink href="#projects">Projects</NavLink>
				{/* <NavLink href="#testimonials">Testimonials</NavLink> */}
				<NavLink href="#contact-me">Contact</NavLink>
			</nav>
		</header>
	);
}

function MenuIcon() {
	return (
		<svg
			className="h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function ProfilePicture() {
	return (
		<Image
			src="/images/profile-picture-rounded-zoomed.png"
			width="64"
			height="64"
			alt="Ray Wang's Profile Picture"
			// className="transition hover:scale-105 ease-linear rounded-full"
		/>
	);
}
