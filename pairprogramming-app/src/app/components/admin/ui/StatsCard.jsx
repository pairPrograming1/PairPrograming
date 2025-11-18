
import { Card } from "../../ui/Card";

export default function StatsCard({
  icon,
  value,
  label,
  iconColor = "text-blue-400",
}) {
  return (
    <Card padding="sm md:md" className="text-center hover-lift">
      <div className={`text-2xl md:text-3xl ${iconColor} mb-2`}>{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-white">{value}</h3>
      <p className="text-secondary-text text-xs md:text-sm">{label}</p>
    </Card>
  );
}
