"use client";

import Header from "@/component/landing/Header";
import Footer from "@/component/landing/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B061D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/landing/hero-bg-1.png')] bg-cover bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-linear-to-b from-[#15002B]/40 to-[#0B061D]" />

      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs tracking-[0.3em] text-soft-lavender">
              SYNAPSE ACADEMY
            </p>
            <h1 className="mt-3 text-2xl md:text-4xl font-semibold">
              Welcome back to Synapse On Chain
            </h1>
            <p className="mt-3 text-soft-lavender max-w-2xl">
              Continue your learn-and-earn journey. Complete missions, protect
              your streak, and redeem tokens when it’s time to celebrate wins.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 max-w-lg">
              <p className="text-pink font-semibold">Daily status newsletter</p>
              <p className="mt-2 text-soft-lavender text-sm">
                Opt into daily status emails that track streak, mission history,
                and mentor insights.
              </p>
              <p className="mt-4 text-xs text-soft-lavender">
                Powered by Synapse partners including Nexora Group, Weiss_fi,
                and Synapse Academy collaborators.
              </p>
            </div>
          </div>

          <div>
            <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 lg:p-8 w-full max-w-md ml-auto">
              <label className="block text-sm text-soft-lavender">
                Email address
              </label>
              <input
                type="email"
                placeholder="name@domain.com"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-soft-lavender/60"
              />

              <div className="mt-4 flex items-center justify-between">
                <label className="block text-sm text-soft-lavender">
                  Password
                </label>
                <a href="#" className="text-purple text-xs">
                  Need support?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-soft-lavender/60"
              />

              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-soft-lavender">
                  <input type="checkbox" className="accent-pink" />
                  Remember me
                </label>
                <a href="#" className="text-purple text-xs">
                  Reset password
                </a>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-pink text-white py-3 font-medium"
              >
                Log in to your dashboard
              </button>

              <p className="mt-3 text-[11px] text-soft-lavender/80">
                By continuing, you agree to Synapse Academy’s terms of use and
                privacy policy.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
