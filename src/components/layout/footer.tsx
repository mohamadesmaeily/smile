import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Twitter, Tooth } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Dentists', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'General Dentistry', href: '#services' },
    { name: 'Cosmetic Dentistry', href: '#services' },
    { name: 'Orthodontics', href: '#services' },
    { name: 'Dental Implants', href: '#services' },
    { name: 'Pediatric Dentistry', href: '#services' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Tooth className="h-8 w-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold font-headline">Smile<span className="text-primary/80">AI</span></h3>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional dental care with compassion and advanced technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-gray-400 hover:text-primary transition-colors">
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-headline">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-headline">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-headline">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p className="flex items-start"><MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" /><span>123 Dental Street, Health City, HC 12345</span></p>
              <p className="flex items-center"><Phone className="h-5 w-5 mr-3 text-primary" /> (123) 456-7890</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-3 text-primary" /> info@smilecare.com</p>
              <p className="flex items-center"><Clock className="h-5 w-5 mr-3 text-primary" /> Mon-Fri: 8AM-5PM</p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SmileAI Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
