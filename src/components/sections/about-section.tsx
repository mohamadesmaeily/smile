import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import type { ComponentProps } from 'react';

const features = [
  'Experienced Team',
  'Modern Equipment',
  'Pain-Free Treatments',
  'Flexible Payment',
];

export function AboutSection(props: ComponentProps<'section'>) {
  return (
    <section {...props} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Dental Clinic Interior"
              data-ai-hint="dental clinic interior"
              width={600}
              height={600}
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-800 mb-6">
              About SmileAI Dental Clinic
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Founded in 2010, SmileAI Dental Clinic has been providing exceptional dental care to our community for over a decade. Our mission is to deliver high-quality, personalized dental services in a comfortable and welcoming environment.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that everyone deserves a healthy, beautiful smile, and we&apos;re committed to making dental care accessible and affordable for all our patients.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
