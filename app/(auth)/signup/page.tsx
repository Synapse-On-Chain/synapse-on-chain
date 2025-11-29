"use client";

import Header from "@/component/landing/Header";
import Footer from "@/component/landing/Footer";

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B061D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/landing/hero-bg-2.png')] bg-cover bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-linear-to-b from-[#15002B]/40 to-[#0B061D]" />

      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs tracking-[0.3em] text-soft-lavender">SYNAPSE ACADEMY</p>
            <h1 className="mt-3 text-2xl md:text-4xl font-semibold">Create your Synapse On Chain account</h1>
            <p className="mt-3 text-soft-lavender max-w-2xl">Set your learning goals, sync your contracts, grow streaks, and start earning SYN rewards for every milestone you reach.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <p className="text-pink font-semibold">Structured onboarding</p>
                <p className="mt-2 text-soft-lavender text-sm">Onboard with synched goals, contract growth, and clear quest flow.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <p className="text-pink font-semibold">Ecosystem rewards</p>
                <p className="mt-2 text-soft-lavender text-sm">Earn SYN for completed missions with transparent ledger conversions.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <p className="text-pink font-semibold">Mentor network</p>
                <p className="mt-2 text-soft-lavender text-sm">Connect with mentors for reviews, escalations, and skill proofs.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <p className="text-pink font-semibold">Streak boosts</p>
                <p className="mt-2 text-soft-lavender text-sm">Maintain streaks with adaptive multipliers to stay on track.</p>
              </div>
            </div>
          </div>

          <div>
            <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 lg:p-8 w-full max-w-md ml-auto">
              <label className="block text-sm text-soft-lavender">Full name</label>
              <input type="text" placeholder="e.g., Ada Lovelace" className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-soft-lavender/60" />

              <label className="block text-sm text-soft-lavender mt-4">Email address</label>
              <input type="email" placeholder="name@domain.com" className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-soft-lavender/60" />

              <label className="block text-sm text-soft-lavender mt-4">Organization or community</label>
              <input type="text" placeholder="e.g., University chapter" className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-soft-lavender/60" />

              <label className="block text-sm text-soft-lavender mt-4">Primary focus</label>
              <select className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white">
                <option>DeFi</option>
                <option>NFTs</option>
                <option>Community growth</option>
                <option>Protocol dev</option>
                <option>Education</option>
              </select>

              <label className="block text-sm text-soft-lavender mt-4">Password</label>
              <input type="password" placeholder="Create a strong password" className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-soft-lavender/60" />

              <label className="flex items-center gap-2 text-xs text-soft-lavender mt-4">
                <input type="checkbox" className="accent-pink" />
                I agree to receive updates, SYN rewards notices, and ecosystem announcements.
              </label>

              <button type="submit" className="mt-6 w-full rounded-full bg-pink text-white py-3 font-medium">Create account</button>

              <p className="mt-3 text-[11px] text-soft-lavender/80">By continuing, you agree to Synapse Academy’s terms of use and privacy policy.</p>
              <p className="mt-2 text-xs text-soft-lavender">Already part of the network? <a className="text-purple" href="/login">Log in</a></p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
