import type { Metadata } from "next";
import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";

export const metadata: Metadata = {
  title: "For Advertisers",
  description: "Scale qualified call and lead volume with a vetted publisher network built on compliance-first, performance marketing infrastructure.",
};

const d: SolutionData = {
  variant: "a",
  crumb: "ADVERTISERS",
  title: "For Advertisers",
  heroDesc: "Scale qualified call and lead volume with a vetted publisher network built on compliance-first, performance marketing infrastructure.",
  img: "/images/sol-advertisers.jpg",
  lead: {
    title: "Turn Network Reach Into Qualified Pipeline",
    desc: "Every call and lead is routed through vetted publishers and scored in real time, so your team spends time on consumers who are ready to convert.",
  },
  tiles: [
    { icon: "📊", title: "Transparent, Real-Time Reporting", desc: "See campaign performance as it happens with live call and lead tracking, so you always know exactly what your spend is producing." },
    { icon: "🛡️", title: "Compliance-First Infrastructure", desc: "Built-in TCPA and DNC safeguards, call verification, and publisher vetting protect your brand while your campaigns scale." },
    { icon: "📈", title: "Scalable Spend Across Verticals", desc: "From Auto Insurance to Medicare, ACA, and Final Expense, our network flexes to your volume goals without sacrificing quality." },
  ],
  stepsHeading: "From Signed IO to Scaled Volume",
  steps: [
    { title: "Define Your Campaign", desc: "Verticals, geographies, buffers, filters, and caps agreed in writing before a single call routes." },
    { title: "Ramp With Vetted Supply", desc: "Volume starts controlled and scales as quality proves out against your criteria — a ramp, not a firehose." },
    { title: "Optimize Against Your CPA", desc: "Sources, dayparting, and buffers tuned continuously — and publishers who don't perform get cut." },
  ],
  fitHeading: "Is Close Crew Right for Your Team?",
  fit: [
    "You buy calls or leads in Auto, Medicare, ACA, or Final Expense",
    "You need consent evidence and TCPA safeguards your legal team can audit",
    "You have licensed-agent capacity ready to take qualified volume",
    "You want per-call transparency on what you're billed for",
  ],
  notFit: [
    "You need traffic without consent evidence attached",
    "You want maximum volume with no quality controls",
    "You resell delivered leads onward to other buyers",
  ],
  quote: {
    text: "The call quality held up as we scaled, which is not what we'd seen elsewhere. When a source started slipping, their team flagged it before we did.",
    who: "Marcus Chen, VP of Growth · Regional insurance agency",
  },
  ctaHeading: "Ready to Scale\nQualified Volume?",
  ctaSub: "Tell us your target verticals and volume goals — we'll show you how the network can help you hit them.",
};

export default function Page() {
  return <SolutionTemplate d={d} />;
}
