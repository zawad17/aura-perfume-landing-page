import React from 'react';

const Visuals: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold font-serif mb-4">An Experience for the Senses</h2>
            <p className="text-gray-300 mb-6">
              Aura is designed to evoke emotion and create lasting memories. It's the perfect companion for both everyday moments and special occasions. See how it fits into your life.
            </p>
            <img 
              src="https://picsum.photos/id/1084/600/400" 
              alt="Lifestyle with perfume"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <img 
              src="https://picsum.photos/id/119/600/800" 
              alt="Close-up of perfume bottle"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visuals;
