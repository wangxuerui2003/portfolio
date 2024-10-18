import Image from "next/image";
import Link from "next/link";

export default function SocialMediaLink({
  href,
  iconSrc,
  iconAlt,
}: {
  href: string;
  iconSrc: string;
  iconAlt: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="transition-all hover:scale-125"
    >
      <Image
        src={iconSrc}
        width={38}
        height={38}
        alt={iconAlt}
        className="hover:animate-vibrate"
      />
    </Link>
  );
}
