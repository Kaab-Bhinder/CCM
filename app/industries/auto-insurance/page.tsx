import type { Metadata } from "next";
import IndustryTemplate, { type IndustryData } from "@/components/IndustryTemplate";

export const metadata: Metadata = {
  title: "Auto Insurance",
  description: "Connect with high-intent auto insurance shoppers through Close Crew's vetted publisher network and compliance-first, real-time call routing.",
};

const d: IndustryData = {
  crumb: "AUTO INSURANCE",
  title: "Auto Insurance",
  heroDesc: "Close Crew connects advertisers with a vetted publisher network reaching consumers who are actively comparing auto insurance quotes — matched and routed in real time.",
  img: "/images/ind-auto.jpg",
  whyHeading: "Why Auto Insurance Partners Choose Close Crew",
  feats: [
    { title: "High-Intent Rate Shoppers", desc: "Our publisher network reaches consumers actively comparing auto insurance quotes — not passive browsers — so every call carries genuine purchase intent." },
    { title: "State-by-State Licensing Awareness", desc: "Campaigns are built with an understanding of state Department of Insurance requirements, helping route volume to advertisers positioned to write coverage in that market." },
    { title: "Real-Time Call Routing", desc: "Calls are routed the moment intent is captured, connecting shoppers with an available licensed agent instead of a queue." },
  ],
  bandText: "Reach Rate Shoppers the Moment They Compare",
  ctaHeading: "Ready to Scale Your\nAuto Insurance Pipeline?",
  ctaSub: "Tell us your target states and volume goals — we'll show you how the network can help you hit them.",
};

export default function Page() {
  return <IndustryTemplate d={d} />;
}
