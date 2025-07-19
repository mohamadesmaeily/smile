"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ComponentProps } from 'react';

const faqItems = [
    {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting the dentist every six months for a routine checkup and cleaning. However, some patients may need more frequent visits depending on their oral health needs. Your dentist will recommend the best schedule for you."
    },
    {
        question: "Do you accept dental insurance?",
        answer: "Yes, we accept most major dental insurance plans. Our team will be happy to verify your benefits and help you understand your coverage. We also offer flexible payment options for patients without insurance."
    },
    {
        question: "What should I do in a dental emergency?",
        answer: "If you're experiencing severe pain, swelling, or have suffered dental trauma, please call our emergency line immediately. We'll provide instructions and schedule you for prompt treatment. For knocked-out teeth, keep the tooth moist (preferably in milk) and try to see a dentist within 30 minutes."
    },
    {
        question: "Are dental X-rays safe?",
        answer: "Yes, dental X-rays are very safe. We use digital X-ray technology which reduces radiation exposure by up to 90% compared to traditional film X-rays. The amount of radiation from dental X-rays is extremely small."
    },
    {
        question: "How can I overcome my fear of the dentist?",
        answer: "We understand dental anxiety is common. Our team is specially trained to help nervous patients feel comfortable. We offer sedation options, explain each step of procedures, and allow you to signal if you need a break."
    }
]

export function FaqSection(props: ComponentProps<'section'>) {
    return (
        <section {...props} className="py-16 md:py-24 bg-secondary">
             <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Find answers to common questions about our dental services and procedures.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                       {faqItems.map((item, index) => (
                         <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md px-6 border-none">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                       ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
