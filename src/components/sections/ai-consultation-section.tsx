"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { aiPoweredConsultation } from '@/ai/flows/ai-powered-consultation';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  concerns: z.string().min(10, {
    message: "Please describe your concerns in at least 10 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export function AiConsultationSection() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState('');
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      concerns: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setRecommendations('');
    try {
      const result = await aiPoweredConsultation({ concerns: data.concerns });
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error("AI consultation failed:", error);
      toast({
        title: "Error",
        description: "Could not get recommendations. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary/10" id="ai-consultation">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/20 text-primary p-3 rounded-full w-fit mb-2">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-gray-800">AI-Powered Consultation</CardTitle>
                  <CardDescription className="text-lg">
                    Get instant, personalized dental advice. Describe your concerns below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="concerns"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Your Dental Concerns</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'I have a sharp pain in my upper right tooth when I drink something cold...'"
                            className="resize-none min-h-[120px] bg-white text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Get Recommendations'
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Form>
            {recommendations && (
              <div className="p-6 border-t">
                <h3 className="text-xl font-bold font-headline mb-4">Our Recommendations:</h3>
                <div className="prose prose-sm max-w-none text-gray-600 whitespace-pre-wrap">
                  {recommendations}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
