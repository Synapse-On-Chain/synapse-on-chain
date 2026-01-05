import { Zap } from "lucide-react";

const tasks = [
  { title: "Complete Quiz", reward: "100 SYN" },
  { title: "Submit Project", reward: "500 SYN" },
  { title: "Daily Streak", reward: "50 SYN" },
];

export default function ActiveTasks() {
  return (
    <div className="rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur">
      <h3 className="text-lg font-semibold mb-1">Active Tasks</h3>
      <p className="text-sm text-[#D0BEF4] mb-6">
        Complete for rewards
      </p>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
          >
            <div>
              <p className="text-sm font-medium">{task.title}</p>
              <p className="text-xs text-pink">{task.reward}</p>
            </div>

            <Zap color="#EAB308" size={18} />
          </div>
        ))}
      </div>
    </div>
  );
}