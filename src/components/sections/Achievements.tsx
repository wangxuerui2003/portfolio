"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function Achievements() {
  // shadcn carousel
  //
  return (
    <section
      id="achievements"
      className="w-full h-[80vh] flex flex-col justify-start mt-12 lg:mt-24 items-center bg-background2"
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
      <div className="mx-auto max-w-xs lg:max-w-full mt-6 lg:mt-12">
        <Carousel
          className="lg:w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="w-full lg:basis-1/3">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/CS50x-certificate.png"
                    width={256}
                    height={256}
                    alt="CS50x Certificate"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
