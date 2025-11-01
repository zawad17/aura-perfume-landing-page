import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold font-serif mb-4">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">
          Aura was born from a simple idea: that perfume should be personal. We grew tired of mass-produced fragrances that all smelled the same. So, we embarked on a journey to create scents that tell a story—your story. Each bottle is a testament to individuality, crafted with passion and the finest ingredients. We believe in the power of scent to build confidence and create memories. Trust in us to deliver an experience, not just a product.
        </p>
      </div>
    </section>
  );
};

export default About;
