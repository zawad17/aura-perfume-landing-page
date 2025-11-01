import React, { useState, useEffect } from 'react';
import ShieldCheckIcon from './icons/ShieldCheckIcon';
import TruckIcon from './icons/TruckIcon';

// Fix: Define a type for the time left object to help TypeScript infer the state's shape.
type TimeLeft = {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31T23:59:59") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const formatTime = (time: number | undefined) => (time || 0).toString().padStart(2, '0');

  return (
    <div className="flex justify-center space-x-4 my-4">
      {timeLeft.hours !== undefined && (
        <>
        <div className="text-center"><div className="text-3xl font-bold">{formatTime(timeLeft.hours)}</div><div className="text-xs">Hours</div></div>
        <div className="text-3xl font-bold">:</div>
        <div className="text-center"><div className="text-3xl font-bold">{formatTime(timeLeft.minutes)}</div><div className="text-xs">Minutes</div></div>
        <div className="text-3xl font-bold">:</div>
        <div className="text-center"><div className="text-3xl font-bold">{formatTime(timeLeft.seconds)}</div><div className="text-xs">Seconds</div></div>
        </>
      )}
    </div>
  );
};


const Pricing: React.FC = () => {
  return (
    <section id="order" className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="bg-white/10 p-10 rounded-lg shadow-2xl backdrop-blur-sm">
          <h2 className="text-4xl font-bold font-serif mb-2">Get Your Bottle of Aura</h2>
          <p className="text-pink-300 font-semibold mb-4">Limited Time Offer Ends Soon!</p>
          <CountdownTimer />
          <div className="my-6">
            <span className="text-5xl font-bold mr-3">$79.99</span>
            <span className="text-2xl text-gray-400 line-through">$120.00</span>
          </div>
          <p className="text-gray-300 mb-6">Use code <span className="font-bold bg-pink-600/50 px-2 py-1 rounded">AURA20</span> for an extra 20% off!</p>
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-transform duration-300 hover:scale-105 text-lg">
            Place Your Order Now
          </button>
          <div className="flex justify-center items-center space-x-8 mt-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <TruckIcon />
              <span>Fast Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;