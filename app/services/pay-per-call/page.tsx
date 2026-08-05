import type { Metadata } from "next";
import ServiceTemplate, { type ServiceData } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Pay Per Call",
  description: "Performance-based call campaigns that connect advertisers directly with consumers ready to buy.",
};

const d: ServiceData = {
  variant: "a",
  crumb: "PAY PER CALL",
  title: "Pay Per Call",
  intro: {
    img: "/images/service-ppc.jpg",
    heading: "Performance Calls, Connected to Ready Buyers",
    p1: "Performance-based call campaigns that connect advertisers directly with consumers ready to buy.",
    p2: "Calls are routed the moment they connect, matched against advertiser capacity, buying windows, and geography so every dial reaches a partner who can actually take it.",
  },
  whatHeading: "What We Do For Pay Per Call",
  whatSub: "The infrastructure behind every qualified conversation the network delivers.",
  features: [
    { icon: "📞", title: "Real-Time Call Routing", desc: "Calls are routed the moment they connect, matched against advertiser capacity, buying windows, and geography so every dial reaches a partner who can actually take it." },
    { icon: "🎯", title: "Call Verification & Scoring", desc: "Every call is scored on duration, intent signals, and source quality before it's billed, so advertisers only pay for conversations that meet their bar." },
    { icon: "🛡️", title: "Compliance-First Infrastructure", desc: "TCPA and DNC scrubbing run on every call before it's connected, with full consent tracking and call recording built into the pipeline from day one." },
    { icon: "📊", title: "Transparent Reporting", desc: "Live dashboards show call volume, source performance, and cost per qualified call, so there's never a question about where spend is going." },
  ],
  offersHeading: "How a Campaign Comes Together",
  offersSub: "From first alignment call to optimized volume — the same process on every campaign.",
  offers: [
    { img: "/images/ppc-step-1.jpg", title: "Define Campaign Parameters", desc: "We align on target verticals, call quality thresholds, geography, and buying hours before launch." },
    { img: "/images/ppc-step-2.jpg", title: "Route to Vetted Publishers", desc: "Live inventory is matched against our vetted publisher network using real-time routing logic." },
    { img: "/images/ppc-step-3.jpg", title: "Verify, Score & Optimize", desc: "Calls are scrubbed for compliance and scored for quality before they're delivered and billed — then routing keeps improving from live results." },
  ],
  faqs: [
    { q: "What counts as a billable call?", a: "A call becomes billable only after it passes the agreed connected-time buffer and meets the qualification criteria set at campaign launch. Short calls and wrong numbers cost nothing." },
    { q: "Do you do warm transfers or direct inbound?", a: "Both. Warm transfers include an agent-to-agent handoff with the consumer already qualified; direct inbound routes the consumer straight to your team from the ad." },
    { q: "How is call quality policed?", a: "Publisher vetting up front, per-call scoring and fraud monitoring in flight, and a plain-language return policy when something slips through." },
    { q: "Can we cap volume by day or hour?", a: "Yes — daily, hourly, and concurrency caps per campaign, aligned to your staffing. Calls outside caps don't route and don't bill." },
  ],
  testiHeading: "What Pay Per Call Partners Say",
  testiStart: 0,
  ctaHeading: "Ready to Launch a\nPay Per Call Campaign?",
  ctaSub: "Let's talk about your target verticals, volume goals, and how our network can start delivering qualified calls.",
};

export default function Page() {
  return <ServiceTemplate d={d} />;
}
