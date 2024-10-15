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
        A 42 Malaysia graduate and a full-stack developer. I&apos;m passionate
        about building good looking and easy to use web and mobile apps.
      </p>
    </section>
  );
}
