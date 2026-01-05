"use client";

import { Bell, Menu } from "lucide-react";

export default function TopBar({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed top-0 z-40 bg-[#0B061D]/70 backdrop-blur border-b border-white/30 w-full lg:pr-72">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5.5 w-full">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
            onClick={() => setOpen(true)}
          >
            {<Menu />}
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5 sm:gap-6 lg:gap-8 ml-auto">
          <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
            {<Bell size={20} />}
          </button>

          <div className="w-9 h-9 rounded-full bg-purple flex items-center justify-center text-black font-semibold">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
