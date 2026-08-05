import type { Metadata } from "next";
import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";

export const metadata: Metadata = {
  title: "Enterprise Partnerships",
  description: "Custom integrations, dedicated account management, and volume-based programs for large-scale advertisers and publishers.",
};

const d: SolutionData = {
  variant: "c",
  crumb: "ENTERPRISE PARTNERSHIPS",
  title: "Enterprise Partnerships",
  heroDesc: "Custom integrations, dedicated account management, and volume-based programs for large-scale advertisers and publishers.",
  img: "/images/sol-enterprise.jpg",
  lead: {
    title: "Custom Infrastructure for Large-Scale Partners",
    desc: "Plug the network directly into your existing stack with custom API integrations, real-time data feeds, and CRM syncing built around how your team already works.",
  },
  tiles: [
    { icon: "🧑‍💼", title: "Dedicated Account Management", desc: "Enterprise partners get a dedicated account team focused on your goals, not a shared support queue — for strategy, troubleshooting, and ongoing optimization." },
    { icon: "📐", title: "Volume-Based Programs", desc: "Structured, scalable programs designed for high-volume advertisers and publishers, with pricing and terms that grow with your business." },
    { icon: "🗺️", title: "National Compliance Coverage", desc: "Licensed and active across all 50 states, with compliance infrastructure built to support large-scale, multi-market campaigns." },
  ],
  stepsHeading: "How a Partnership Comes Together",
  steps: [
    { title: "Scope the Program", desc: "We align on scale, verticals, and goals — then design the partnership structure to match." },
    { title: "Integrate With Your Stack", desc: "APIs, real-time feeds, and CRM sync configured around how your team already works — sandbox first." },
    { title: "Scale With a Named Team", desc: "A dedicated account team owns your program end to end, from ramp to multi-market scale." },
  ],
  fitHeading: "Built for Programs at Scale",
  fit: [
    "You need custom API or CRM integration into your stack",
    "You run high-volume programs across multiple markets",
    "You want white-label, reseller, or platform partnership models",
    "You need a named account team, not a ticket queue",
  ],
  notFit: [
    "You're testing a first small campaign — start with a standard program",
    "You need traffic outside compliance-first infrastructure",
  ],
  ctaHeading: "Let's Build\nYour Program",
  ctaSub: "Tell us about your scale and goals — we'll design a partnership structure to match.",
};

export default function Page() {
  return <SolutionTemplate d={d} />;
}
