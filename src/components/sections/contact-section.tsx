import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { ComponentProps } from 'react';

const workingHours = [
    { day: "Monday", hours: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
    { day: "Friday", hours: "8:00 AM - 4:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
];

export function ContactSection(props: ComponentProps<'section'>) {
    return (
        <section {...props} className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We&apos;re here to answer your questions and help you schedule your next dental visit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="animate-fade-in">
                        <CardHeader>
                            <CardTitle className="font-headline">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><MapPin /></div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Address</h4>
                                    <p className="text-gray-600">123 Dental Street<br/>Health City, HC 12345</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Phone /></div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">(123) 456-7890<br/>Emergency: (123) 456-7891</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Mail /></div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">info@smilecare.com</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                        <CardHeader>
                            <CardTitle className="font-headline">Working Hours</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            {workingHours.map(item => (
                                <div key={item.day} className="flex justify-between pb-2 border-b last:border-b-0">
                                    <span className="font-medium text-gray-700">{item.day}</span>
                                    <span className="text-gray-600">{item.hours}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden animate-fade-in" style={{animationDelay: '0.4s'}}>
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036865!2d-73.9878449241646!3d40.74844097138959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689876425931!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{ minHeight: '300px', border:0 }}
                            allowFullScreen
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Card>
                </div>
            </div>
        </section>
    );
}
