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
              src="images/pavlo-talpa-ADKsjO-uwpo-unsplash.jpg" 
              alt="Lifestyle with perfume"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <img 
              src="images/perfume-6223754_1280.jpg" 
              alt="Google Drive Image" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visuals;
