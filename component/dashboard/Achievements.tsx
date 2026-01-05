import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <div className="rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur">
      <h3 className="text-lg font-semibold mb-1">Achievements</h3>
      <p className="text-sm text-[#D0BEF4] mb-6">
        Your recent badges
      </p>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square sm:h-25 lg:h-auto rounded-xl bg-purple/20 flex items-center justify-center"
          >
            <Award size={18} className="text-purple" />
          </div>
        ))}
      </div>
    </div>
  );
}
