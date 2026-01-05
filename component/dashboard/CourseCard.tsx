import { Clock, BookOpen, Users, Star } from "lucide-react";
import DashboardButton from "../shared/Button";

interface CourseCardProps {
  title: string;
  desc: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  weeks: number;
  rating: number;
  enrollments: string; // e.g., "13k", "5.2k"
  icon: React.ReactNode;
}

export default function CourseCard({
  title,
  desc,
  level,
  lessons,
  weeks,
  rating,
  enrollments,
  icon,
}: CourseCardProps) {
  const levelColors = {
    Beginner: "bg-green-500/20 text-green-400",
    Intermediate: "bg-purple-500/20 text-purple-400",
    Advanced: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300">
      <div className="mb-6">{icon}</div>

      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-300 mb-6">{desc}</p>

      <div className="flex flex-wrap gap-4 text-sm mb-6">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-gray-400" />
          <span>{lessons} lessons</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gray-400" />
          <span>{weeks} weeks</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Star size={18} className="text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Users size={16} />
          <span>{enrollments}</span>
        </div>
      </div>

      <span
        className={`inline-block px-3 py-1 text-xs rounded-full mb-6 ${levelColors[level]}`}
      >
        {level}
      </span>

      <DashboardButton className="mt-2 w-full bg-purple text-black font-medium transition">
        View Course
      </DashboardButton>
    </div>
  );
}