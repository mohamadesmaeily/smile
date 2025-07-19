"use client"

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const appointmentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  date: z.date({ required_error: "A date is required."}),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export function AppointmentSection() {
    const { toast } = useToast();

    const form = useForm<AppointmentFormValues>({
        resolver: zodResolver(appointmentFormSchema),
    });

    const onSubmit: SubmitHandler<AppointmentFormValues> = (data) => {
        toast({
            title: "Appointment Requested!",
            description: "We've received your request and will contact you shortly to confirm.",
        });
        console.log(data);
        form.reset({name: "", email: "", phone: ""});
    };

  return (
    <section className="py-16 md:py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary/80 text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold font-headline mb-4 text-background">Schedule Your Appointment</h2>
              <p className="mb-8 text-background/80">
                Ready to take the first step toward a healthier smile? Book online or contact us today.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="bg-primary/50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"><Phone /></div>
                    <div>
                        <p className="font-semibold">Call Us</p>
                        <p className="text-background/80">(123) 456-7890</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="bg-primary/50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"><Mail /></div>
                    <div>
                        <p className="font-semibold">Email Us</p>
                        <p className="text-background/80">info@smilecare.com</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="bg-primary/50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"><MapPin /></div>
                    <div>
                        <p className="font-semibold">Visit Us</p>
                        <p className="text-background/80">123 Dental Street, Health City</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold font-headline text-gray-800 mb-6">Book Online</h3>
               <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                   <FormField control={form.control} name="service" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                            <SelectContent>
                                <SelectItem value="general-checkup">General Checkup</SelectItem>
                                <SelectItem value="teeth-cleaning">Teeth Cleaning</SelectItem>
                                <SelectItem value="cosmetic-dentistry">Cosmetic Dentistry</SelectItem>
                                <SelectItem value="orthodontics">Orthodontics</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                   )} />
                   <FormField control={form.control} name="date" render={({ field }) => (
                     <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button variant={"outline"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                        {field.value ? (format(field.value, "PPP")) : (<span>Pick a date</span>)}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date() || date < new Date("1900-01-01")} initialFocus />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                     </FormItem>
                   )} />
                  <Button type="submit" className="w-full" size="lg">Request Appointment</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
