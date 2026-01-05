"use client";

import {
  Brain,
  LucideIcon,
  Zap,
  BookOpen,
  CheckSquare,
  LayoutGrid,
  Trophy,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemsProps {
  name: string;
  href: string;
  icon: LucideIcon;
}

const items: ItemsProps[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { name: "Rewards", href: "/dashboard/rewards", icon: Zap },
  { name: "Leaderboard", href: "/dashboard/leaderboard", icon: Trophy },
  { name: "Community", href: "/dashboard/community", icon: Users },
];

export default function SidebarSection({
  setOpen,
}: {
  setOpen?: (open: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* ===== Logo / Header ===== */}
      <p className="text-sm uppercase tracking-widest text-soft-lavender px-4 py-5 md:p-6 md:py-7 border-b border-white/20 mb-6 flex items-center gap-2">
        <Brain className="w-6 h-6 text-pink" /> Synapse Academy
      </p>

      {/* ===== Main Navigation ===== */}
      <div className="flex-1 space-y-2">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen?.(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition mx-4 md:mx-6
                ${
                  active
                    ? "bg-purple/35 text-purple"
                    : "hover:bg-white/10 text-white"
                }
              `}
            >
              <item.icon size={18} />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* ===== Bottom Actions ===== */}
      <div className="space-y-2 pt-4 mb-6 border-t border-white/15">
        <Link
          href="/dashboard/settings"
          onClick={() => setOpen?.(false)}
          className="flex items-center gap-3 px-4 py-3 mx-4 md:mx-6 rounded-xl hover:bg-white/10 transition"
        >
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </Link>

        <button
          onClick={() => {
            setOpen?.(false);
          }}
          className="flex items-center gap-3 px-4 py-3 mx-4 md:mx-6 rounded-xl text-red-400 hover:bg-red-500/10 transition w-[80%]"
        >
          <LogOut size={18} />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
}
