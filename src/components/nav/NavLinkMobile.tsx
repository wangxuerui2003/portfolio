import Link from "next/link";

export default function NavLinkMobile({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="flex w-full items-center py-2 text-lg font-semibold"
      prefetch={false}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
