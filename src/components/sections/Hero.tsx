import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] flex flex-col justify-center gap-6 text-center items-center px-8 md:px-24"
    >
      <Image
        className="fixed inset-0 z-[-1]"
        src="/images/hero-background.svg"
        alt="About background image"
        layout="fill"
        objectFit="cover"
      />
      <h1 className="font-bold text-3xl md:text-6xl">Hey, I&apos;m Ray Wang</h1>
      <p className="mt-4 text-lg md:text-2xl">
        A{" "}
        <a
          href="https://42kl.edu.my/"
          target="_blank"
          className="hover:underline text-green-500"
        >
          42 Malaysia
        </a>{" "}
        graduate and a full-stack web developer. I&apos;m passionate about
        building good looking and easy to use web and mobile apps.
      </p>

      <div className="mt-8">
        <Link
          href="#skills"
          className="w-14 h-6 px-8 mx-4 my-2 py-3 text-lg font-semibold bg-primary rounded-md transition-all hover:bg-secondary"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="w-14 h-6 px-8 mx-4 my-2 py-3 text-lg font-semibold bg-primary rounded-md transition-all hover:bg-secondary"
        >
          Projects
        </Link>
      </div>

      <ScrollDownEffect width={36} height={36} className="mt-8" />
    </section>
  );
}

function ScrollDownEffect({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("animate-scroll-down", className)}
    >
      <path
        d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
