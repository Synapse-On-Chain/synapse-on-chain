const gridText = [
  {
    id: 1,
    text: "Curriculum engineered with Nexora Group and Weiss_fi for real protocol depth.",
  },
  {
    id: 2,
    text: "SYN points redeemable for SUI tokens: 1,000 SYN = 1 SUI with transparent ledgers.",
  },
  {
    id: 3,
    text: "Social verification across X, Discord, Telegram, GotHub and LinkedIn for bonus rewards.",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#240242] overflow-hidden flex items-center justify-center"
    >
      {/* Background Images Side-by-Side */}
      <div className="absolute inset-0 flex flex-col lg:flex-row w-full">
        <div className="hidden md:block lg:basis-1/2 h-full bg-[url('/landing/hero-bg-2.png')] bg-cover bg-no-repeat" />
        <div className="hidden lg:block bg-gray-200/10 opacity-90 backdrop-blur-lg lg:w-px h-full"></div>
        <div className="w-full lg:basis-1/2 h-full bg-[url('/landing/hero-bg-1.png')] bg-cover bg-no-repeat" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-purple/20 to-purple/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center pt-40 md:pt-0 max-w-7xl px-5 text-soft-lavender">
        <p className="text-[12px] tracking-[0.25em] text-soft-lavender font-medium mb-6 border border-pink/30 rounded-full px-4 py-1 w-fit mx-auto">
          SYNAPSE ON CHAIN
        </p>

        <h1 className="mt-8 text-4xl md:text-6xl text-white font-bold">
          Mind first wallet next
        </h1>

        <p className="mt-8 text-base md:text-lg text-[#CFC4DE] leading-relaxed">
          Synapse On Chain is the Web3-powered learn-and-earn platform built on
          SUI. We blend adaptive quests, streak mechanics, and tokenized rewards
          so every learner graduates with proof-of-skill and liquid incentives.
        </p>

        <div className="mt-10 text-sm md:text-base font-semibold flex items-center gap-4 justify-center">
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-purple text-white hover:bg-[#8C1BD6] transition"
          >
            Start building
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition"
          >
            Access dashboard
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pb-30 md:pb-0 gap-4 w-full text-sm mt-30">
          {gridText.map((cont) => (
            <div
              key={cont.id}
              className="p-5 shadow-lg backdrop-blur bg-white/10 rounded-2xl"
            >
              <p className="text-start">{cont.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
