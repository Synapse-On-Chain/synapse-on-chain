import React from "react";

const featuresLeft = [
    {
        title: "Analytics snapshot",
        text: "Monitor streak health, cohort retention, and SYN emissions from a single dashboard.",
        highlight: "Live in 18 cohorts",
        color: "text-pink"
    },
    {
        title: "Automation recipes",
        text: "Deploy no-code triggers that release SYN, NFTs, or credentials as soon as tasks finalize.",
        highlight: "50+ templates",
        color: "text-purple"
    }
];

const featuresRight = [
    {
        title: "Program studio",
        text: "Design modular quests, assessment rubrics, and skill badges with analytics that surface mastery in real time."
    },
    {
        title: "Automation core",
        text: "Trigger SYN payouts, streak boosts, and mentor escalations with no-code logic blocks running on SUI smart contracts."
    },
    {
        title: "Move labs",
        text: "Prototype smart contracts, run audits, and mint proof-of-skill NFTs directly from Synapse sandboxes."
    }
];

const ProgramSection = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B061D] text-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

                {/* LEFT MAIN PANEL */}
                <div className="relative rounded-3xl p-10 md:p-14 bg-linear-to-br from-[#3A0057]/40 to-[#15002B]/60 border border-white/10 backdrop-blur">
                    {/* Gradient Blobs */}
                    <div className="absolute -top-10 -right-10 w-52 h-52 bg-pink/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-purple/30 rounded-full blur-3xl"></div>

                    <p className="text-xs tracking-[0.3em] text-pink">PROGRAM CREATION</p>

                    <h2 className="mt-4 text-2xl md:text-4xl font-bold leading-tight text-white">
                        Launch classrooms, accelerators, and DAOs
                        <br />with automation built in.
                    </h2>

                    <p className="mt-4 text-soft-lavender text-base md:text-lg leading-relaxed">
                        Synapse Studio packages mission design, credential minting, and analytics so you can focus on guiding learners while SYN keeps incentives aligned.
                    </p>

                    {/* Mini features inside left block */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {featuresLeft.map((item, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 p-5 shadow-xl">
                                <h4 className="text-sm font-medium">{item.title}</h4>
                                <p className="mt-2 text-sm text-soft-lavender">{item.text}</p>
                                <p className={`mt-4 text-lg font-semibold ${item.color}`}>
                                    {item.highlight}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT FEATURES LIST */}
                <div className="flex flex-col gap-6">
                    {featuresRight.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-3xl p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur"
                        >
                            <h4 className="text-lg font-medium mb-2 text-white">{item.title}</h4>
                            <p className="text-soft-lavender text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProgramSection;
