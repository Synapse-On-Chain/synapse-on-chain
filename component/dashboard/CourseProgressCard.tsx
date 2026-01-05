interface CourseProgressProps {
  title: string;
  lessons?: number;
  progress: number;
}

export default function CourseProgressCard({
  title,
  lessons,
  progress,
}: CourseProgressProps) {
  return (
    <div className="rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-semibold">{title}</h4>
          {lessons && (
            <p className="text-xs text-soft-lavender">{lessons} lessons</p>
          )}
        </div>

        <span className="text-sm text-soft-lavender">{progress}%</span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-purple to-pink rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
