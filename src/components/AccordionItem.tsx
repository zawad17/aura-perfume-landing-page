import React from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = ({ title, children, isOpen, onClick }: AccordionItemProps) => (
  <div className="border-b border-white/20">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-5 text-left text-lg font-semibold"
    >
      <span>{title}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDownIcon />
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="pb-5 text-gray-300">{children}</div>
    </div>
  </div>
);

export default AccordionItem;
