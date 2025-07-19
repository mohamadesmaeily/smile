import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import type { ComponentProps } from 'react';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'General Dentist',
    bio: 'With over 15 years of experience, Dr. Johnson specializes in preventive dentistry and cosmetic procedures.',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'professional woman smiling'
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Orthodontist',
    bio: 'Specializing in braces and Invisalign, Dr. Chen helps patients achieve perfectly aligned smiles.',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'professional man smiling'
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatric Dentist',
    bio: 'Dr. Rodriguez creates a fun, comfortable environment for children to receive dental care.',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'friendly woman doctor'
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Oral Surgeon',
    bio: 'Specializing in dental implants and complex extractions with minimal discomfort.',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'professional surgeon smiling'
  },
];

export function DoctorsSection(props: ComponentProps<'section'>) {
  return (
    <section {...props} className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-800 mb-4">
            Meet Our Dentists
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our team of highly skilled professionals is dedicated to providing you with the best dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={doctor.name} className="overflow-hidden text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-square">
                <Image
                  src={doctor.image}
                  alt={`Dr. ${doctor.name}`}
                  data-ai-hint={doctor.aiHint}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{doctor.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{doctor.bio}</p>
              </CardContent>
              <CardFooter className="justify-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-primary transition-colors"><Linkedin/></Link>
                <Link href="#" className="text-gray-500 hover:text-primary transition-colors"><Mail/></Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
