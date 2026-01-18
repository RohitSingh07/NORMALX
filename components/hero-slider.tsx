"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export default function HeroSlider() {
  return (
    <section id="home" aria-label="Hero" className="relative">
      <div className="absolute inset-0 -z-10 bg-[url('/modern-office-background.png')] bg-cover bg-center opacity-10" />
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <Carousel className="relative">
          <CarouselContent>
            <CarouselItem>
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-widest text-primary">We Serve Everyone</p>
                  <h1 className="text-3xl md:text-5xl font-semibold text-balance">
                    Whether you are a small company or a large conglomerate. We find you talent which adds to your
                    growth.
                  </h1>
                  <p className="text-muted-foreground">
                    Established in 2014 we are leading service provider in IT solutions and consulting services.
                  </p>
                  <div className="flex gap-3">
                    <Button>READ MORE</Button>
                    <Button variant="outline" asChild>
                      <a href="#services">OUR SERVICES</a>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-border">
                  <Image
                    src="/laptop-and-headphones-on-desk.jpg"
                    alt="Laptop and headphones on a desk"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-widest text-primary">Our Aim</p>
                  <h2 className="text-3xl md:text-5xl font-semibold text-balance">
                    Provide premier quality services to our highly prestigious clients.
                  </h2>
                  <p className="text-muted-foreground">
                    We prepare you for your success model and are constantly passionate about solutions relevant to you.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild>
                      <a href="#contact">Contact Us</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="#about">Learn More</a>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-border">
                  <Image
                    src="/team-collaboration-in-office.jpg"
                    alt="Team collaborating in an office"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur" />
          <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur" />
        </Carousel>
      </div>
    </section>
  )
}
