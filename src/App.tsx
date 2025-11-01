import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialOffer from './components/SpecialOffer';
import Benefits from './components/Benefits';
import Visuals from './components/Visuals';
import SocialProof from './components/SocialProof';
import ProductDetails from './components/ProductDetails';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 animate-gradient opacity-50"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SpecialOffer />
          <Benefits />
          <Visuals />
          <SocialProof />
          <ProductDetails />
          <Pricing />
          <FAQ />
          <About />
          <Contact />
        </main>
        <FloatingCTA />
      </div>
    </div>
  );
};

export default App;
