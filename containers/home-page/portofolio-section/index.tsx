// components/PortfolioSection.tsx
'use client';

import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";


const PortfolioSection: React.FC = () => {
  const clients = [
    '/images/client/ascagc.png',
    '/images/client/chandra-asri.png',
    '/images/client/doulton.jpg',
    '/images/client/dovechem.png',
    '/images/client/krakatau.jpg',
    '/images/client/nikomas.png',
    '/images/client/pelindo.png',
    '/images/client/pln.jpg',
    '/images/client/pupuk-indonesia.jpg',
    '/images/client/sokonindo.png',
    '/images/client/tene.png'
  ];

  const exampleWorks = [
    '/images/example-works/example-work-1.jpeg',
    '/images/example-works/example-work-2.jpeg', 
    '/images/example-works/example-work-3.jpeg', 
    '/images/example-works/example-work-4.jpeg', 
    '/images/example-works/example-work-5.jpeg', 
    '/images/example-works/example-work-6.jpeg', 
    '/images/example-works/example-work-7.jpeg', 
    '/images/example-works/example-work-8.jpeg', 
    '/images/example-works/example-work-9.jpeg', 
    '/images/example-works/example-work-10.jpeg', 
  ];

  return (
    <section className="bg-light-grey py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Client Carousel */}
        <div className="mx-6">
          <h2 className="text-3xl text-center font-bold text-[#163868] mb-8">Our Client</h2>
          <Carousel 
            className='w-full'
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              })
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={client} alt={`Work ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

         {/* Example Work Section - Responsive Layout */}
         <div className="flex flex-col mt-16 md:flex-row md:items-center md:space-x-8">
          {/* Title on left (1/3) for desktop, top for mobile */}
          <div className="mr-6 md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-[#163868] md:text-left text-center">Portofolio Kegiatan Kalibrasi</h2>
          </div>

          {/* Carousel on right (2/3) for desktop, bottom for mobile */}
          <div className="md:w-2/3">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {exampleWorks.map((work, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      {/* Removed the Card component that was causing the white bars */}
                      <div className="overflow-hidden aspect-square w-full rounded-md">
                        <img
                          src={work || "/placeholder.svg"}
                          alt={`Work ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end mt-4 space-x-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;