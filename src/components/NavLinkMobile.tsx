import Link from "next/link";

export default function NavLinkMobile({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex w-full items-center py-2 text-lg font-semibold"
      prefetch={false}
    >
      {children}
    </Link>
  );
}
