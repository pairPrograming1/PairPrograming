
"use client";
import { useState } from "react";

export function FAQItem({ item, categoryIndex, itemIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const fullIndex = `${categoryIndex}-${itemIndex}`;

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-border-color rounded-lg overflow-hidden">
      <button
        onClick={toggleItem}
        className="w-full px-4 py-4 text-left bg-background hover:bg-hover-bg transition-colors flex justify-between items-center"
      >
        <span className="font-semibold text-white text-sm lg:text-base">
          {item.question}
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-4 py-4 bg-card-bg border-t border-border-color">
          <div className="text-secondary-text text-sm lg:text-base leading-relaxed whitespace-pre-line">
            {item.answer}
          </div>
        </div>
      )}
    </div>
  );
}
