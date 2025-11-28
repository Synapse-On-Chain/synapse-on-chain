import SectionWithCards from "./SectionWithCards";

export const EcosystemMomentum = () => {
  const ecosystemMomentum = [
    {
      tag: "700K+",
      title: "Synapse community touchpoints",
      text: "Discord, Telegram, and GitHub reach accelerating every launch.",
    },
    {
      tag: "$5M+",
      title: "Grant pipeline in motion",
      text: "Funding conversations across SUI, Base, and Pond ecosystems.",
    },
    {
      tag: "120+",
      title: "Partner quests shipped",
      text: "Gamified campaigns co-created with Web3 DAOs and startups.",
    },
    {
      tag: "72 days",
      title: "Top learner streak",
      text: "Proof that streak mechanics keep energy high.",
    },
  ];

  return (
    <SectionWithCards
      title="Ecosystem momentum"
      description="Sustained community energy, funding alignment, and partner collaboration fuel the growth of Synapse."
      cards={ecosystemMomentum}
      actionText="Partner with Synapse"
      columns="md:grid-cols-2 lg:grid-cols-4"
      tagSize="large"
    />
  );
};
