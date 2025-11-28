import SectionWithCards from "./SectionWithCards";

const AboutSection = () => {
  const cards = [
    {
      tag: "SYN VELOCITY",
      title: "Instant settlement",
      highlight: "~400ms",
      unit: "finality",
      text: "Every quest, streak, and mentor review finalizes near-instantly on SUI, so rewards stay aligned with progress.",
      linkText: "Understand finality",
    },
    {
      tag: "LEARNER THROUGHPUT",
      title: "Global scale",
      highlight: "297k",
      unit: "quests/day",
      text: "Distributed infrastructure scales with demand so classrooms, DAOs, and accelerators stay responsive during spikes.",
      linkText: "See infrastructure",
    },
    {
      tag: "PREDICTABLE COSTS",
      title: "Reward certainty",
      highlight: "0.02",
      unit: "SUI avg",
      text: "Low, predictable fees keep SYN conversions accessible, even during discovery campaigns and hackathons.",
      linkText: "Token economics",
    },
    {
      tag: "COMMUNITY GROWTH",
      title: "Engaged cohorts",
      highlight: "82%",
      unit: "completion",
      text: "Adaptive streak multipliers and peer feedback sustain high completion for multi-week quests worldwide.",
      linkText: "Boost retention",
    },
  ];

  return (
    <div className="overflow-x-hidden" id="about">
      <SectionWithCards
        bg="#120024"
        title="Scalable learning, instant rewards"
        description="Gamified modules, streak multipliers, and automated SYN rewards create a feedback loop that keeps builders motivated from onboarding through advanced specialization."
        actionText="Join the Beta waitlist"
        cards={cards}
        columns="md:grid-cols-2 lg:grid-cols-4"
      />
    </div>
  );
};

export default AboutSection;
