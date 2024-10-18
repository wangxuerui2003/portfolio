import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CarouselCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageUnoptimized,
  link,
  linkDescription,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageUnoptimized?: boolean;
  link?: string;
  linkDescription?: string;
}) {
  return (
    <CarouselItem className="lg:basis-1/3">
      <Card className="max-h-1/2 lg:h-full flex flex-col items-center">
        <CardHeader className="text-xl font-bold">{title}</CardHeader>
        <CardContent className="flex flex-col items-center justify-between p-6 gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                src={imageSrc}
                width={512}
                height={512}
                alt={imageAlt}
                className="hover:cursor-zoom-in"
                unoptimized={imageUnoptimized ?? false}
              />
            </DialogTrigger>
            <DialogContent className="max-w-7xl border-0 bg-white p-0">
              <div className="relative h-[calc(100vh-220px)] w-full rounded-md bg-white shadow-md">
                <Image
                  src={imageSrc}
                  width={512}
                  height={512}
                  alt={imageAlt}
                  className="h-full w-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
          <p className="text-md">{description}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          {link && <ProjectLink href={link}>{linkDescription}</ProjectLink>}
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button className="h-12 px-8 mx-4 my-2 py-3 text-lg font-semibold" asChild>
      <Link href={href} target="_blank">
        {children}
      </Link>
    </Button>
  );
}
