import React from 'react';
import StarIcon from './icons/StarIcon';

const reviews = [
  {
    name: 'Jessica M.',
    rating: 5,
    comment: "I've never received so many compliments on my perfume before! The scent is so unique and lasts all day. I feel so confident wearing Aura."
  },
  {
    name: 'Sarah L.',
    rating: 5,
    comment: "Absolutely in love. The bottle is gorgeous on my vanity, and the fragrance is even better. It's my new signature scent, for sure."
  },
  {
    name: 'Emily R.',
    rating: 4,
    comment: "A beautiful, sophisticated scent. It's a bit strong at first but settles into a lovely warm fragrance. The free sample was a nice touch!"
  },
];

const SocialProof: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif mb-12">Hear From Our Customers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-left">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{review.comment}"</p>
              <p className="font-bold text-white">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
