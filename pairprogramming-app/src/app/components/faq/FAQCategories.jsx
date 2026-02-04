"use client";
import { FAQCategory } from "./FAQCategory";

export function FAQCategories({ categories }) {
  return (
    <div className="space-y-6 lg:space-y-8">
      {categories.map((category, categoryIndex) => (
        <FAQCategory
          key={categoryIndex}
          category={category}
          categoryIndex={categoryIndex}
        />
      ))}
    </div>
  );
}