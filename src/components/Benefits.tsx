import React from 'react';
import CheckIcon from './icons/CheckIcon';

const benefits = [
  {
    title: 'Long-Lasting Fragrance',
    description: 'Our unique oil-based formula ensures the scent lingers on your skin for over 12 hours.',
  },
  {
    title: 'Exquisite Ingredients',
    description: 'Crafted from rare, ethically sourced botanicals from around the world for a truly luxurious feel.',
  },
  {
    title: 'Hypoallergenic Formula',
    description: 'Designed for sensitive skin, our perfume is free from harsh chemicals and allergens.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif mb-4">Why You'll Love Aura</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          We've poured our hearts into creating a scent that doesn't just smell good, but feels like a second skin.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-600 p-3 rounded-full">
                  <CheckIcon />
                </div>
              </div>
              <h3 className="text-2xl font-semibold font-serif mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
