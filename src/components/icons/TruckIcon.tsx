import React from 'react';

const TruckIcon: React.FC = () => {
  return (
    <svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16l2 2h4l2-2v-7l-2-2h-6v2" />
    </svg>
  );
};

export default TruckIcon;
