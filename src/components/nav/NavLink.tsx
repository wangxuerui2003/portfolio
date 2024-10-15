import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-semibold focus:outline-none disabled:pointer-events-none disabled:opacity-50 transition-all hover:transform hover:-translate-y-0.5 duration-75 hover:scale-105"
      prefetch={false}
    >
      {children}
    </Link>
  );
}
