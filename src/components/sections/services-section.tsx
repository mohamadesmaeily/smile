import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooth, Star, Baby, Ambulance } from 'lucide-react';
import Link from 'next/link';
import { BracesIcon } from '../icons/braces-icon';
import { ImplantIcon } from '../icons/implant-icon';
import type { ComponentProps } from 'react';

const services = [
  {
    icon: Tooth,
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, fillings, and preventive care to maintain optimal oral health.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'dental tools clean'
  },
  {
    icon: Star,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and other treatments to enhance your smile\'s appearance.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'perfect white smile'
  },
  {
    icon: BracesIcon,
    title: 'Orthodontics',
    description: 'Braces and aligners to correct misaligned teeth and improve your bite.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'woman dental braces'
  },
  {
    icon: ImplantIcon,
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth that look and function like natural teeth.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'dental implant model'
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly and comforting environment.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'child dentist happy'
  },
  {
    icon: Ambulance,
    title: 'Emergency Care',
    description: 'Immediate treatment for dental emergencies to relieve pain and prevent complications.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'dental emergency pain'
  },
];

export function ServicesSection(props: ComponentProps<'section'>) {
  return (
    <section {...props} className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-800 mb-4">
            Our Dental Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive dental care for the whole family, from routine checkups to specialized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  data-ai-hint={service.aiHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/20 text-primary p-3 rounded-full">
                        <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="#" className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
