"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="overflow-x-hidden fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0B061D]/60 backdrop-blur-xl px-4 py-2">
          <a href="#home" className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-pink" />
            <div className="leading-tight">
              <p className="text-xs text-soft-lavender">Synapse Academy</p>
              <p className="text-sm font-semibold text-white">
                Synapse On Chain
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <a
              href="#about"
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 bg-purple/20 text-soft-lavender hover:bg-purple/30"
            >
              Learn <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#program" className="text-soft-lavender hover:text-white">
              Build
            </a>
            <a
              href="#community"
              className="inline-flex items-center gap-1 text-soft-lavender hover:text-white"
            >
              Connect <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href="/login"
              className="ml-6 text-soft-lavender hover:text-white"
            >
              Log in
            </a>
            <a
              href="#cta"
              className="rounded-full bg-pink text-white px-4 py-2 font-medium hover:brightness-110"
            >
              Get Started
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40" aria-hidden={!open}>
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-50 w-72 ${
          open ? "translate-x-0" : "translate-x-full"
        } bg-[#0B061D] border-l border-white/10 backdrop-blur-xl transition-transform duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-pink" />
            <span className="text-sm text-white font-semibold">Menu</span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 py-4 flex flex-col gap-3 text-sm">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-1 text-soft-lavender hover:text-white"
          >
            Learn
          </a>
          <a
            href="#program"
            onClick={() => setOpen(false)}
            className="text-soft-lavender hover:text-white"
          >
            Build
          </a>
          <a
            href="#community"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-1 text-soft-lavender hover:text-white"
          >
            Connect
          </a>
          <a
            href="/login"
            onClick={() => setOpen(false)}
            className="text-soft-lavender hover:text-white"
          >
            Log in
          </a>
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="rounded-full bg-pink text-white px-4 py-2 font-medium text-center"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
