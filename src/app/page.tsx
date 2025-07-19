import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { DoctorsSection } from '@/components/sections/doctors-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AppointmentSection } from '@/components/sections/appointment-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FaqSection } from '@/components/sections/faq-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { AiConsultationSection } from '@/components/sections/ai-consultation-section';

export default function Home() {
  return (
    <>
      <HeroSection id="home" />
      <FeaturesSection />
      <ServicesSection id="services" />
      <AboutSection id="about" />
      <AiConsultationSection />
      <DoctorsSection id="doctors" />
      <TestimonialsSection />
      <AppointmentSection />
      <ContactSection id="contact" />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
