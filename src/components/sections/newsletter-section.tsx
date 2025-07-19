"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function NewsletterSection() {
    const { toast } = useToast();
    const form = useForm<NewsletterFormValues>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: { email: "" },
    });

    const onSubmit: SubmitHandler<NewsletterFormValues> = (data) => {
        console.log("Newsletter subscription:", data.email);
        toast({
            title: "Subscribed!",
            description: "Thanks for subscribing to our newsletter.",
        });
        form.reset();
    };

    return (
        <section className="py-16 bg-primary/80 text-white">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline mb-4">Stay Updated</h2>
                    <p className="mb-8 text-primary-foreground/80 text-lg">
                        Subscribe to our newsletter for dental health tips, special offers, and clinic updates.
                    </p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-grow">
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Your email address"
                                                className="bg-white text-gray-800 h-12 text-base"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-left text-white/90" />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                                Subscribe
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
