import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NavLink from "./NavLink";
import NavLinkMobile from "./NavLinkMobile";

export default function Navbar() {
  return (
    <header className="sticky flex h-24 w-full shrink-0 items-center px-24 py-4 shadow-lg">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#home" className="mr-6 hidden lg:flex" prefetch={false}>
            <ProfilePicture />
            <span className="sr-only">Ray Wang</span>
          </Link>
          <div className="grid gap-2 py-6">
            <NavLinkMobile href="#home">Home</NavLinkMobile>
            <NavLinkMobile href="#skills">Skills</NavLinkMobile>
            <NavLinkMobile href="#achievements">Achievements</NavLinkMobile>
            <NavLinkMobile href="#projects">Projects</NavLinkMobile>
            <NavLinkMobile href="#testimonials">Testimonials</NavLinkMobile>
            <NavLinkMobile href="#contact">Contact</NavLinkMobile>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#home" className="mr-6 hidden lg:flex" prefetch={false}>
        <div className="flex items-center transition hover:scale-105 ease-linear duration-75">
          <ProfilePicture />
          <h2 className="ml-4 text-xl font-bold">Ray Wang</h2>
        </div>
        <span className="sr-only">Ray Wang</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#achievements">Achievements</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#testimonials">Testimonials</NavLink>
        <NavLink href="#contact">Contact</NavLink>
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
