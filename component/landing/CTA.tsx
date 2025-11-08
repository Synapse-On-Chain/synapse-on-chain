"use client";

import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onRequestAccess?: () => void;
  onLogin?: () => void;
}

const CTASection = ({ onRequestAccess, onLogin }: CTASectionProps) => {
  return (
    <section className="relative w-full py-32 bg-[#120024] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        {/* Tagline */}
        <p className="text-xs tracking-[0.3em] text-soft-lavender uppercase mb-4">
          Minds first, wallet next
        </p>

        {/* Main Headline */}
        <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-white">
          Ready to onboard your community into
          <br />
          <span className="text-white">Web3 education?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-soft-lavender text-base leading-relaxed max-w-2xl mx-auto">
          Join the Synapse On Chain beta for access to launch quests, analytics, and premium
          classrooms tailored to your learners.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button type="button"
            onClick={onRequestAccess}
            className="px-8 py-3 bg-purple text-soft-lavender font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
          >
            Request early access
          </button>

          <button type="button"
            onClick={onLogin}
            className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
          >
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;