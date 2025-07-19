import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Heart, Microscope } from 'lucide-react';
import type { ComponentProps } from 'react';

const features = [
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'We use the latest dental technology for accurate diagnosis and comfortable treatments.',
  },
  {
    icon: Stethoscope,
    title: 'Expert Dentists',
    description: 'Our team consists of highly qualified professionals with years of experience.',
  },
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Your comfort and satisfaction are our top priorities throughout your dental journey.',
  },
];

export function FeaturesSection(props: ComponentProps<'section'>) {
  return (
    <section {...props} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-800 mb-4">
            Why Choose SmileAI?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine cutting-edge technology with personalized care to give you the best dental experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="items-center">
                <div className="bg-primary/20 text-primary p-4 rounded-full w-fit mb-4">
                    <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
