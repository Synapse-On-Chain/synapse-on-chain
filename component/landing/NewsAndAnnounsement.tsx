"use client";

import SectionWithCards from "./SectionWithCards";

export const NewsAndAnnouncements = () => {
  const updates = [
    {
      tag: "PARTNERSHIP",
      title: "Synapse On Chain aligns with Weiss_fi for DeFi governance quests",
      text: "Learners co-create DAO tooling while earning SYN rewards that convert to SUI for governance participation.",
      linkText: "Read update",
    },
    {
      tag: "RECOGNITION",
      title: "UNESCO Youth Hackathon spotlights Synapse Academy",
      text: "Global jury applauds the learn-and-earn blueprint onboarding the next wave of Web3 talent.",
      linkText: "Read update",
    },
    {
      tag: "ECOSYSTEM",
      title: "Nexora Group powers Synapse infrastructure on SUI",
      text: "Enterprise-grade availability and predictable fees keep conversions instant for worldwide learners.",
      linkText: "Read update",
    },
  ];

  return (
    <div className="bg-black" id="news">
      <SectionWithCards
        title="News & announcements"
        description="Follow the Synapse narrative as we onboard the next generation into Web3 with meaningful incentives."
        actionText="Explore the newsroom"
        onAction={() => console.log("Navigate to newsroom")}
        cards={updates}
        bg="linear-gradient(to bottom, #0B061D, #0F0A1F)"
        columns="md:grid-cols-3"
      />
    </div>
  );
};
