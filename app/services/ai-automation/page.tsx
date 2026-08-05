import type { Metadata } from "next";
import ServiceTemplate, { type ServiceData } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "AI Automation",
  description: "AI-driven matching, scoring, and optimization that gets every lead to the right partner, faster.",
};

const d: ServiceData = {
  variant: "b",
  crumb: "AI AUTOMATION",
  title: "AI Automation",
  intro: {
    img: "/images/service-ai.jpg",
    heading: "Smarter Matching, Faster Outcomes",
    p1: "AI-driven matching, scoring, and optimization that gets every lead to the right partner, faster — so quality goes up while manual overhead goes down.",
    p2: "Models trained on historical conversion data score every lead the moment it enters the network, so quality is assessed before it ever reaches a partner.",
  },
  whatHeading: "What We Do For AI Automation",
  whatSub: "Four jobs, automated end to end — with humans kept where they close.",
  features: [
    { icon: "🧠", title: "Predictive Lead Scoring", desc: "Models trained on historical conversion data score every lead the moment it enters the network, so quality is assessed before it ever reaches a partner." },
    { icon: "🤝", title: "Automated Publisher Matching", desc: "Advertiser demand is matched to the right publishers automatically, based on vertical, geography, and past performance rather than manual guesswork." },
    { icon: "🔀", title: "Dynamic Call/Lead Routing", desc: "Routing decisions adjust in real time as capacity, quality, and buying windows shift, keeping every call and lead moving toward the best available outcome." },
    { icon: "📈", title: "Continuous Model Optimization", desc: "Every conversion feeds back into the system, so scoring and routing models keep improving without requiring a manual rebuild." },
  ],
  offersHeading: "Where the Machine Sits in Your Flow",
  offersSub: "Automation handles the repetitive work — licensed humans handle the selling.",
  offers: [
    { img: "/images/ai-step-1.jpg", title: "Pre-Qualification", desc: "Intent, state, and eligibility confirmed in seconds before an agent's time is spent — sub-threshold contacts filter out unbilled." },
    { img: "/images/ai-step-2.jpg", title: "Smart Routing", desc: "Scores plus licensing, geography, and live capacity decide the destination in milliseconds — no round-robin waste." },
    { img: "/images/ai-step-3.jpg", title: "Automated Follow-Up", desc: "Missed calls recovered, appointments scheduled, and re-engagement sequenced — always within consent scope and quiet hours." },
  ],
  faqs: [
    { q: "Does AI talk to consumers?", a: "Only in pre-qualification and follow-up, with clear disclosure, and never to sell a regulated product. The handoff to a licensed human happens before any plan discussion." },
    { q: "Is this compliant with TCPA and industry rules?", a: "Automation operates inside the same consent scope as everything else the network runs — consent tracking, DNC scrubbing, and recording are built into the pipeline." },
    { q: "Can we use scoring without the voice automation?", a: "Yes. The jobs are modular — many advertisers start with scoring and routing on existing call flow, then add pre-qualification later." },
  ],
  testiHeading: "What Partners Say About Automation",
  testiStart: 3,
  ctaHeading: "Ready to Automate\nYour Matching?",
  ctaSub: "Let's talk about where AI scoring and routing can remove manual overhead from your funnel.",
};

export default function Page() {
  return <ServiceTemplate d={d} />;
}
