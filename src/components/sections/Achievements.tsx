"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Achievements() {
  // shadcn carousel
  //
  return (
    <section
      id="achievements"
      className="w-full h-[100vh] flex flex-col justify-start mt-12 lg:mt-24 items-center bg-background2"
    >
      <div className="flex mt-12 lg:mt-24 items-center gap-4">
        <h1 className="font-bold text-4xl lg:text-6xl">Achievements</h1>
        <Image
          src="/icons/checklist.png"
          width={64}
          height={64}
          alt="Achievements"
        />
      </div>
      <div className="mx-auto max-w-xs lg:max-w-screen-lg mt-6 lg:mt-12">
        <Carousel
          className="lg:w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <ProjectCard
              title="CS50 Certificate of completion"
              description="Harvard University introduction to Computer Science course with lectures + problem
          sets + final project."
              imageSrc="/images/CS50x-certificate.png"
              imageAlt="CS50x Certificate"
              link="https://github.com/wangxuerui2003/CS50x"
              linkDescription="Checkout Github"
            />
            <ProjectCard
              title="AWS Certified Cloud Practitioner"
              description="The introductory level certification to AWS Cloud."
              imageSrc="/images/AWS Certified Cloud Practitioner certificate.png"
              imageAlt="AWS Certified Cloud Practitioner Certificate"
              link="https://cp.certmetrics.com/amazon/en/public/verify/credential/MM4QH7EJ52V1QR5J"
              linkDescription="Verify Certificate"
            />
            <ProjectCard
              title="Ethereum Kuala Lumpur 2023 Hackathon"
              description="Our team Spin For Good won the 1st prize in the main track"
              imageSrc="/images/ETHKL-pic.jpg"
              imageAlt="ETHKL 2023 Hackathon"
              link="https://devfolio.co/projects/spin-for-good-213b"
              linkDescription="Checkout Project"
            />
            <ProjectCard
              title="42KL Peer-Defence Hackathon"
              description="An internal 42KL hackathon and my team built a statistical dashboard tool and won the 2nd place."
              imageSrc="/images/42-peer-defence-hackathon-pic.jpg"
              imageAlt="42KL Peer-Defence Hackathon"
              link="https://github.com/wangxuerui2003/42Stats."
              linkDescription="Checkout Github"
            />
            <ProjectCard
              title="42 Abu Dhabi Global Sustainability Hackathon"
              description="A global sustainability themed hackathon within all 42 campuses worldwide and my team built a few ML models to predict sales and food waste."
              imageSrc="/images/42AbuDhabi-Hackathon-certificate.png"
              imageAlt="42 Abu Dhabi Global Sustainability Hackathon"
              link="https://github.com/wangxuerui2003/42Abu-Dhabi-Global-Hackathon"
              linkDescription="Checkout Github"
            />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  link,
  linkDescription,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  linkDescription?: string;
}) {
  return (
    <CarouselItem className="lg:basis-1/3">
      <Card className="h-full flex flex-col items-center">
        <CardHeader className="text-xl font-bold">{title}</CardHeader>
        <CardContent className="flex flex-col items-center justify-between p-6 gap-3">
          <Image src={imageSrc} width={512} height={512} alt={imageAlt} />
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
    <Link
      href={href}
      target="_blank"
      className="px-8 flex items-center justify-center mx-4 my-2 py-3 text-lg font-semibold bg-primary rounded-md transition-all hover:bg-secondary"
    >
      {children}
    </Link>
  );
}
