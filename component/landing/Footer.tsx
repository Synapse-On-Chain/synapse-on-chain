"use client";

import { Brain } from "lucide-react";
import { ReactNode } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps): ReactNode => {
  const contact: FooterLink[] = [
    { label: "hello@synapseonchain.xyz", href: "mailto:hello@synapseonchain.xyz" },
    { label: "+234 813 000 0000", href: "tel:+2348130000000" },
  ];

  const social: FooterLink[] = [
    { label: "@He_is_Zion", href: "https://x.com/He_is_Zion" },
    { label: "@SynapseOnChain", href: "https://x.com/SynapseOnChain" },
  ];

  const partners: string[] = [
    "Nexora Group",
    "Weiss_fi",
    "UNESCO Youth Hackathon",
  ];

  return (
    <footer
      className={`w-full bg-[#0A0015] border-t border-white/10 py-12 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-pink" />
            <div>
              <p className="text-white font-medium">SYNAPSE ACADEMY</p>
              <p className="text-pink text-lg font-semibold leading-tight">
                Synapse On Chain
              </p>
            </div>
          </div>
          <p className="text-soft-lavender text-xs leading-relaxed max-w-xs">
            Synapse On Chain is the learn-and-earn launchpad for emerging builders on the SUI blockchain. Minds first, wallet next.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">CONTACT</h4>
          <ul className="space-y-1">
            {contact.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-soft-lavender hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="text-white font-medium mb-3">FOLLOW</h4>
          <ul className="space-y-1">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-lavender hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h4 className="text-white font-medium mb-3">PARTNERS</h4>
          <ul className="space-y-1">
            {partners.map((partner) => (
              <li key={partner} className="text-soft-lavender">
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center">
        <p className="text-xs text-soft-lavender">
          © 2025 Synapse Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;