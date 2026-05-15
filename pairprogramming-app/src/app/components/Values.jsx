import { useTranslations } from "next-intl";
import {
  Star, Users, Lightbulb, TrendingUp, Target, Headphones,
} from "lucide-react";

const VALUE_KEYS = [
  { n: "01", icon: Star, key: "v01" },
  { n: "02", icon: Users, key: "v02" },
  { n: "03", icon: Lightbulb, key: "v03" },
  { n: "04", icon: TrendingUp, key: "v04" },
  { n: "05", icon: Target, key: "v05" },
  { n: "06", icon: Headphones, key: "v06" },
];

function ValueCard({ n, icon: Icon, title, text }) {
  return (
    <div className="bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200">
      {/* Eyebrow */}
      <span className="font-mono text-[13px] font-medium text-primary tracking-[0.4px] uppercase block mb-3">
        {n}
      </span>

      {/* Title */}
      <h3 className="text-card-title text-ink mb-2">{title}</h3>

      {/* Text */}
      <p className="text-body-sm text-ink-subtle">{text}</p>
    </div>
  );
}

export default function Values() {
  const t = useTranslations("values");

  return (
    <section className="py-section px-8">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            {t("eyebrow")}
          </span>
          <h2 className="display-md text-ink">
            {t("heading")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUE_KEYS.map((v) => (
            <ValueCard
              key={v.n}
              n={v.n}
              icon={v.icon}
              title={t(`${v.key}Title`)}
              text={t(`${v.key}Text`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
