import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { ComponentProps } from 'react';
import Link from 'next/link';

export function HeroSection(props: ComponentProps<'section'>) {
  return (
    <section {...props} className="hero-gradient pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-gray-800 mb-4 leading-tight">
              Your Perfect Smile Starts Here
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              At SmileAI Dental Clinic, we provide exceptional dental care with the latest technology and a compassionate approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact">
                    <Button size="lg" className="animate-pulse">
                        Book an Appointment
                    </Button>
                </Link>
                <Link href="#about">
                    <Button size="lg" variant="outline" className="bg-white/50">
                        Learn More
                    </Button>
                </Link>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Image
              src="https://placehold.co/600x450.png"
              alt="Dentist with a patient"
              data-ai-hint="dentist patient"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
