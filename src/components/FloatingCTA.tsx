import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
      document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={`fixed bottom-6 right-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button 
        onClick={scrollToTop}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FloatingCTA;
