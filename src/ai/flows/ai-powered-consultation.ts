'use server';

/**
 * @fileOverview An AI-powered dental consultation flow.
 *
 * - aiPoweredConsultation - A function that takes user's dental concerns and returns personalized recommendations.
 * - AiPoweredConsultationInput - The input type for the aiPoweredConsultation function.
 * - AiPoweredConsultationOutput - The return type for the aiPoweredConsultation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredConsultationInputSchema = z.object({
  concerns: z
    .string()
    .describe('A description of the dental concerns of the user.'),
});
export type AiPoweredConsultationInput = z.infer<typeof AiPoweredConsultationInputSchema>;

const AiPoweredConsultationOutputSchema = z.object({
  recommendations: z.string().describe('Personalized recommendations for treatments and preventive care based on the user concerns.'),
});
export type AiPoweredConsultationOutput = z.infer<typeof AiPoweredConsultationOutputSchema>;

export async function aiPoweredConsultation(input: AiPoweredConsultationInput): Promise<AiPoweredConsultationOutput> {
  return aiPoweredConsultationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredConsultationPrompt',
  input: {schema: AiPoweredConsultationInputSchema},
  output: {schema: AiPoweredConsultationOutputSchema},
  prompt: `You are a helpful AI assistant specialized in providing dental care recommendations.
  Based on the user's concerns, provide personalized recommendations for treatments and preventive care.

  User Concerns: {{{concerns}}}
  `,
});

const aiPoweredConsultationFlow = ai.defineFlow(
  {
    name: 'aiPoweredConsultationFlow',
    inputSchema: AiPoweredConsultationInputSchema,
    outputSchema: AiPoweredConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
