"use client";
import { Card } from "../ui/Card";
import { FAQItem } from "./FAQItem";
import {
  Rocket,
  Workflow,
  Wallet,
  Timer,
  HelpCircle,
} from "lucide-react";

const categoryIcons = {
  "Servicios y Desarrollo": Rocket,
  "Proceso y Metodologia": Workflow,
  "Proceso y Metodología": Workflow,
  "Precios y Pagos": Wallet,
  "Tiempos y Entregas": Timer,
};

export function FAQCategory({ category, categoryIndex }) {
  const Icon = categoryIcons[category.title] || HelpCircle;

  return (
    <Card
      padding="lg"
      className="fade-in border border-border-color/80 bg-card-bg/70 backdrop-blur-sm"
      style={{ animationDelay: `${categoryIndex * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-color">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-primary">
            {category.title}
          </h2>
        </div>
        <span className="hidden sm:inline-flex text-xs font-semibold text-secondary-text border border-border-color rounded-full px-2.5 py-1 bg-background-secondary/60">
          {category.questions.length} preguntas
        </span>
      </div>

      <div className="space-y-3">
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