"use client";


import { X } from "lucide-react";
import SidebarSection from "./Sidebar";


export default function MobileSidebar({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-72 bg-[#0B061D] border-r border-white/10">
            <SidebarSection setOpen={setOpen} />
          </div>

          <div
            className="flex-1 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <button
            className="absolute top-4 right-4"
            onClick={() => setOpen(false)}
          >
            {<X />}
          </button>
        </div>
      )}
    </>
  );
}
