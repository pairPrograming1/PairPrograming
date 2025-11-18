
"use client";
import { useState } from "react";
import { Card } from "../ui/Card";
import { FAQCategory } from "./FAQCategory";

export function FAQCategories({ categories }) {
  return (
    <div className="space-y-8">
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
