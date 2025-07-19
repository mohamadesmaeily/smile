import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import type { ComponentProps } from 'react';

const testimonials = [
  {
    name: 'Lisa Thompson',
    since: 'Patient since 2015',
    quote: "I've been coming to SmileAI for years and always receive excellent care. The staff is friendly and professional, and Dr. Johnson is simply the best!",
    image: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait smiling',
    rating: 5,
  },
  {
    name: 'Robert Garcia',
    since: 'Patient since 2018',
    quote: "My Invisalign treatment with Dr. Chen was life-changing. The results are amazing, and the whole process was so comfortable. Highly recommend!",
    image: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait friendly',
    rating: 5,
  },
  {
    name: 'Jennifer Lee',
    since: 'Patient since 2019',
    quote: "My kids actually look forward to their dental visits thanks to Dr. Rodriguez. She makes the experience fun and stress-free for them.",
    image: 'https://placehold.co/100x100.png',
    aiHint: 'mother portrait kind',
    rating: 5,
  },
];

export function TestimonialsSection(props: ComponentProps<'section'>) {
  return (
    <section {...props} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our satisfied patients about their experiences at SmileAI Dental Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="flex flex-col bg-secondary/50 shadow-md animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    data-ai-hint={testimonial.aiHint}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.since}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
