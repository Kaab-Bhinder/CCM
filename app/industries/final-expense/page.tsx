import type { Metadata } from "next";
import IndustryTemplate, { type IndustryData } from "@/components/IndustryTemplate";

export const metadata: Metadata = {
  title: "Final Expense",
  description: "Reach senior consumers researching final expense coverage through Close Crew's vetted publisher network — respectful, high-trust, consent-based outreach.",
};

const d: IndustryData = {
  crumb: "FINAL EXPENSE",
  title: "Final Expense",
  heroDesc: "Close Crew connects advertisers with a vetted publisher network reaching senior consumers researching final expense coverage — through a respectful, high-trust outreach process.",
  img: "/images/ind-fe.jpg",
  whyHeading: "Why Final Expense Partners Choose Close Crew",
  feats: [
    { title: "Senior-Focused Audience", desc: "Publishers reach consumers specifically researching final expense and burial coverage, not broad life insurance traffic." },
    { title: "High-Trust Conversations", desc: "Final expense is a sensitive purchase. Our network prioritizes publishers and creative that build trust before the call ever connects." },
    { title: "Respectful, Consent-Based Outreach", desc: "Every contact is grounded in verified consent, so advertisers connect with consumers who genuinely want to talk." },
  ],
  bandText: "Sensitive-Market Conversations, Done Respectfully",
  ctaHeading: "Ready to Scale Your\nFinal Expense Pipeline?",
  ctaSub: "Tell us your target audience and volume goals — we'll show you how the network can help you hit them.",
};

export default function Page() {
  return <IndustryTemplate d={d} />;
}
