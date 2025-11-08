"use client";

import { ArrowRight } from "lucide-react";

interface Card {
    tag?: string;
    title: string;
    highlight?: string;
    unit?: string;
    text: string;
    linkText?: string;
}

interface SectionWithCardsProps {
    title: string;
    description: string;
    actionText?: string;
    onAction?: () => void;
    cards?: Card[];
    bg?: string;
    columns?: string;
    tagSize?: "small" | "large";
}

const SectionWithCards = ({
    title,
    description,
    actionText,
    onAction,
    cards = [],
    bg = "#120024",
    columns = "md:grid-cols-2 lg:grid-cols-4",
    tagSize = "small"
}: SectionWithCardsProps) => {
    return (
        <section className={`relative w-full py-24`} style={{ backgroundColor: bg }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">

                {/* Title */}
                <div className="text-start">
                    <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>

                    <div className="flex items-start md:items-center justify-between gap-6 mt-4">
                        <p className="text-soft-lavender text-base leading-relaxed max-w-3xl">
                            {description}
                        </p>

                        {actionText && (
                            <span
                                onClick={onAction}
                                className="text-pink text-sm flex items-center gap-1 cursor-pointer hover:text-soft-lavender transition-colors"
                            >
                                {actionText} <ArrowRight size={15} />
                            </span>
                        )}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className={`grid grid-cols-1 ${columns} gap-6 mt-16`}>
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5 hover:bg-white/10 transition"
                        >
                            {card.tag && (
                                <p
                                    className={
                                        tagSize === "large"
                                            ? "text-4xl font-bold text-pink leading-tight"
                                            : "text-xs tracking-[0.25em] text-pink"
                                    }
                                >
                                    {card.tag}
                                </p>
                            )}


                            <h3 className="mt-4 text-lg font-medium text-white">{card.title}</h3>

                            {card.highlight && (
                                <p className="mt-2 text-3xl font-semibold text-pink">
                                    {card.highlight}
                                    {card.unit && (
                                        <span className="text-xs text-soft-lavender ml-1">{card.unit}</span>
                                    )}
                                </p>
                            )}

                            <p className="mt-3 text-sm text-soft-lavender leading-relaxed">
                                {card.text}
                            </p>

                            {card.linkText && (
                                <button
                                    type="button"
                                    className="mt-6 text-sm text-purple hover:underline flex items-center gap-2"
                                >
                                    {card.linkText} <ArrowRight size={16} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SectionWithCards;
