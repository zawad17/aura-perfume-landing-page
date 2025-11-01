import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const ProductDetails: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const details = [
    {
      title: "Ingredients & Materials",
      content: "Top Notes: Bergamot, Pink Peppercorn. Heart Notes: Jasmine, Rose Absolute. Base Notes: Sandalwood, Vanilla, Musk. Our perfume is vegan, cruelty-free, and crafted in a recyclable glass bottle."
    },
    {
      title: "How to Use",
      content: "For a long-lasting scent, apply to pulse points: wrists, neck, and behind the ears. A little goes a long way. Avoid rubbing the wrists together after application as it can break down the fragrance."
    },
    {
      title: "Delivery & Return Info",
      content: "We offer free 3-5 day shipping on all orders. Not in love? We have a 30-day hassle-free return policy. Simply contact our support team to initiate a return."
    }
  ];

  return (
    <section id="details" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold font-serif mb-8 text-center">The Finer Details</h2>
        <div>
          {details.map((item, index) => (
            <AccordionItem 
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              <p>{item.content}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
