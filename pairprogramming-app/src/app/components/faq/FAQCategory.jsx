// components/faq/FAQCategory.jsx
"use client";
import { useState } from "react";
import { Card } from "../ui/Card";
import { FAQItem } from "./FAQItem";

export function FAQCategory({ category, categoryIndex }) {
  return (
    <Card
      padding="lg"
      className="fade-in"
      style={{ animationDelay: `${categoryIndex * 0.1}s` }}
    >
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-3">{category.icon}</span>
        <h2 className="text-xl lg:text-2xl font-bold text-primary">
          {category.title}
        </h2>
      </div>

      <div className="space-y-4">
        {category.questions.map((item, itemIndex) => (
          <FAQItem
            key={itemIndex}
            item={item}
            categoryIndex={categoryIndex}
            itemIndex={itemIndex}
          />
        ))}
      </div>
    </Card>
  );
}
