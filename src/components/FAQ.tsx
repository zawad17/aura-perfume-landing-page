import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "How long does the scent last?",
      answer: "Aura is an Eau de Parfum, formulated with a high concentration of fragrance oils. It is designed to last for 8-12 hours on the skin."
    },
    {
      question: "What is your delivery time?",
      answer: "Standard delivery takes 3-5 business days within the country. International shipping times may vary. All orders are processed within 24 hours."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund, no questions asked."
    },
    {
      question: "Is this perfume suitable for sensitive skin?",
      answer: "Yes! Aura is hypoallergenic and has been dermatologically tested. It is free from parabens and phthalates, making it safe for sensitive skin."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold font-serif mb-8 text-center">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              title={faq.question}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              <p>{faq.answer}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
