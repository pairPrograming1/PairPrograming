import { TEAM } from "@/app/data/team";
import { useTranslations, useLocale } from "next-intl";
import { getLocalizedItem } from "@/app/lib/i18n-helpers";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const STEP_ICONS = [Search, PenTool, Code2, Rocket];

function TeamCard({ name, role, description, expertise, location }) {
  return (
    <div className="bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200">
      {/* Avatar */}
      <div className="w-14 h-14 rounded-pill bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
        <span className="text-primary font-semibold text-lg">
          {name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>

      {/* Name & Role */}
      <h3 className="text-card-title text-ink mb-1">{name}</h3>
      <p className="text-body-sm text-primary font-medium mb-3">{role}</p>

      {/* Description */}
      <p className="text-body-sm text-ink-subtle mb-4">{description}</p>

      {/* Location */}
      {location && (
        <p className="text-caption text-ink-tertiary mb-4">{location}</p>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {expertise.map((skill) => (
          <span
            key={skill}
            className="bg-canvas text-ink-muted text-[12px] font-mono px-2.5 py-1 rounded-sm border border-hairline"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Nosotros() {
  const t = useTranslations("about");
  const locale = useLocale();

  const STATS = [
    { number: "20+", label: t("statsProjects") },
    { number: "2022", label: t("statsFounded") },
    { number: "100%", label: t("statsClients") },
    { number: "6", label: t("statsCountries") },
  ];

  const steps = ["01", "02", "03", "04"];

  return (
    <section className="py-section px-8">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            {t("eyebrow")}
          </span>
          <h1 className="display-lg text-ink mb-6">{t("heading")}</h1>
          <p className="text-body-lg text-ink-subtle max-w-[600px] mx-auto">
            {t("lead")}
          </p>
        </div>

        {/* Historia */}
        <div className="bg-surface-1 border border-hairline rounded-xl p-8 md:p-12 mb-16">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            {t("historyEyebrow")}
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-body-lg text-ink-muted mb-4">
                {t("historyP1")}
              </p>
              <p className="text-body text-ink-subtle">
                {t("historyP2")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-canvas border border-hairline rounded-lg p-4 text-center"
                >
                  <div className="headline text-ink mb-1">
                    {stat.number}
                  </div>
                  <div className="text-caption text-ink-subtle">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div className="mb-16">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            {t("teamEyebrow")}
          </span>
          <h2 className="headline text-ink mb-8">
            {t("teamHeading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEAM.map((member) => {
              const localized = getLocalizedItem(member, locale);
              return <TeamCard key={member.name} {...localized} />;
            })}
          </div>
        </div>

        {/* Metodología */}
        <div className="bg-surface-1 border border-hairline rounded-xl p-8 md:p-12">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            {t("methodEyebrow")}
          </span>
          <h2 className="headline text-ink mb-8">{t("methodHeading")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={step}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-primary" />
                    <span className="font-mono text-[13px] font-medium text-primary tracking-[0.4px]">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-card-title text-ink mb-2" style={{ fontSize: 18 }}>
                    {t(`step${step}`)}
                  </h3>
                  <p className="text-body-sm text-ink-subtle">
                    {t(`step${step}Desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
