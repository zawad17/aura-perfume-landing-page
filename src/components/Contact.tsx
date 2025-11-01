import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import MapPinIcon from './icons/MapPinIcon';

const Contact: React.FC = () => {
    const scrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <footer className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif mb-4">Ready to Find Your Signature?</h2>
        <p className="text-gray-300 mb-8">Don't wait to experience the magic of Aura.</p>
        <button onClick={(e) => scrollTo(e, '#order')} className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-transform duration-300 hover:scale-105 text-lg inline-block mb-12">
          Order Your Aura Today
        </button>
        
        <div className="border-t border-white/20 pt-10">
            <h3 className="text-2xl font-semibold font-serif mb-6">Contact Us</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <WhatsAppIcon />
                    <span>Chat on WhatsApp</span>
                </a>
                <a href="mailto:support@aura.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <MailIcon />
                    <span>support@aura.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-300">
                    <PhoneIcon />
                    <span>+1 (234) 567-890</span>
                </div>
                 <div className="flex items-center space-x-2 text-gray-300">
                    <MapPinIcon />
                    <span>123 Perfume Lane, Scent City</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
