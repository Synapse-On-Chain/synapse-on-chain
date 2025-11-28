import SectionWithCards from "./SectionWithCards";

export const Community = () => {
  const events = [
    {
      tag: "LAGOS · Q2 2025",
      title: "Synapse World Tour",
      text: "IRL build sprint with Nexora Group mentors guiding teams through DeFi missions.",
      linkText: "Join waitlist",
    },
    {
      tag: "VIRTUAL · MONTHLY",
      title: "IMPACT Summit",
      text: "Partner showcases, grant briefings, and live demos from ecosystem builders.",
      linkText: "Reserve a seat",
    },
    {
      tag: "HYBRID · UNIVERSITY CHAPTERS",
      title: "SUI Campus Nights",
      text: "Student-led quests with credential drops, hackathons, and scholarship unlocks.",
      linkText: "Host a chapter",
    },
  ];

  return (
    <div className="overflow-x-hidden" id="community">
      <SectionWithCards
        bg="#0B061D"
        title="Synapse World: community in motion"
        description="From X Spaces to IRL summits, Synapse elevates partner stories and learner achievements with cinematic experiences and token incentives."
        actionText="Request a spotlight"
        cards={events}
        columns="md:grid-cols-3"
      />
    </div>
  );
};
