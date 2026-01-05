import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  subtitle: string;
  color: "pink" | "pink2" | "purple" | "yellow";
}

const accentMap = {
  pink: "text-[#FA2E94]",
  pink2: "text-[#FF0A85]",
  purple: "text-[#9F1FEF]",
  yellow: "text-[#EAB308]"
};

export default function StatCard({
  icon: Icon,
  value,
  subtitle,
  color = "purple"
}: StatCardProps) {
  return (
    <div className="relative rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple/20 blur-3xl" />

      <Icon className={`${accentMap[color]}`} />

      <h3 className={`mt-2 text-3xl font-bold ${accentMap[color]}`}>
        {value}
      </h3>

      <p className="mt-1 text-xs #F1EBFF99">{subtitle}</p>
    </div>
  );
}
