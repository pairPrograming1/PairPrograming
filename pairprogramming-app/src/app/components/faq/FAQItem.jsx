"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQItem({ item, categoryIndex, itemIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-border-color rounded-lg overflow-hidden hover:border-primary/30 transition-colors duration-300">
      <button
        onClick={toggleItem}
        className="w-full px-4 py-4 text-left bg-card-bg hover:bg-hover-bg transition-colors duration-300 flex justify-between items-center gap-4 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background outline-none"
      >
        <span className="font-semibold text-white text-sm lg:text-base">
          {item.question}
        </span>
        
        <ChevronDown 
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 bg-background border-t border-border-color">
          <div className="text-secondary-text text-sm lg:text-base leading-relaxed whitespace-pre-line">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}