import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Details', href: '#details' },
    { name: 'Order', href: '#order' },
  ];
  
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-70 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif text-white">Aura</h1>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
             <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-gray-300 hover:text-white transition-colors duration-300">{link.name}</a>
          ))}
        </nav>
        <a href="#order" onClick={(e) => scrollTo(e, '#order')} className="hidden md:inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105">
          Order Now
        </a>
      </div>
    </header>
  );
};

export default Header;
