import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-4 text-shadow-lg">
            Aura: The Essence of You
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Experience a fragrance that's as unique as your own story. Aura is more than a perfume—it's an unforgettable signature.
          </p>
          <div className="my-8 flex justify-center">
            <img 
              src="https://picsum.photos/id/106/300/400" 
              alt="Perfume Bottle Mockup" 
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20"
            />
          </div>
          <a href="#order" onClick={(e) => scrollTo(e, '#order')} className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-transform duration-300 hover:scale-105 text-lg inline-block">
            Discover Your Scent
          </a>
          <p className="mt-4 text-sm text-gray-400">500+ happy users and counting!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
