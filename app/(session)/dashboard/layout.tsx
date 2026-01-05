"use client";

import DesktopSidebar from "@/component/dashboard/DesktopSidebar";
import MobileSidebar from "@/component/dashboard/MobileSidebar";
import TopBar from "@/component/dashboard/TopBar";
import { useState } from "react";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

   const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0B061D] text-white flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 border-r border-white/10">
        <DesktopSidebar />
      </aside>

      {/* Mobile Sidebar */}
      <MobileSidebar open={open} setOpen={setOpen}  />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopBar setOpen={setOpen} />
        <main className="px-6 md:px-10 py-8 max-w-[1600px] w-full mx-auto mt-15 sm:mt-20 md:mt-25">
          {children}
        </main>
      </div>
    </div>
  );
}
