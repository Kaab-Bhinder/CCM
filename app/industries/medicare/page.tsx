import type { Metadata } from "next";
import IndustryTemplate, { type IndustryData } from "@/components/IndustryTemplate";

export const metadata: Metadata = {
  title: "Medicare",
  description: "Reach Medicare Advantage and Supplement shoppers through Close Crew's vetted publisher network, built for seasonal enrollment intent and licensed agent routing.",
};

const d: IndustryData = {
  crumb: "MEDICARE",
  title: "Medicare",
  heroDesc: "Reach Medicare Advantage and Supplement shoppers through Close Crew's vetted publisher network, built for seasonal enrollment intent and licensed agent routing.",
  img: "/images/ind-medicare.jpg",
  whyHeading: "Why Medicare Partners Choose Close Crew",
  feats: [
    { title: "Seasonal High-Intent Demand", desc: "The Annual Enrollment Period and other Medicare enrollment windows drive concentrated, time-boxed shopper intent — our network is built to scale volume up and down with it." },
    { title: "Medicare Advantage & Supplement Coverage", desc: "Publishers and advertisers across both Medicare Advantage and Medicare Supplement products, matched to the shopper's specific interest." },
    { title: "Licensed Agent Routing", desc: "Calls and leads are routed in real time to available, licensed agents so seasonal demand doesn't outpace your team's capacity." },
  ],
  bandText: "Reach Medicare Shoppers at Their Highest-Intent Moments",
  timelineHeading: "The AEP Calendar",
  timeline: [
    { when: "Jul – Aug", what: "Planning window: volume targets, routing, and creative locked." },
    { when: "Sep", what: "Pre-AEP ramp: campaigns proven live at low volume." },
    { when: "Oct 15 – Dec 7", what: "AEP peak: daily pacing matched to licensed-agent staffing." },
    { when: "Jan 1 – Mar 31", what: "MA OEP: lower volume, high-intent switch window." },
    { when: "Year-round", what: "T65 and SEP events keep a steady baseline flowing." },
  ],
  ctaHeading: "Ready to Scale Your\nMedicare Pipeline?",
  ctaSub: "Tell us your target enrollment periods and volume goals — we'll show you how the network can help you hit them.",
};

export default function Page() {
  return <IndustryTemplate d={d} />;
}
