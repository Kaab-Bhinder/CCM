import type { Metadata } from "next";
import ServiceTemplate, { type ServiceData } from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "Full-funnel campaigns that drive qualified traffic into the network from day one.",
};

const d: ServiceData = {
  variant: "c",
  crumb: "DIGITAL MARKETING",
  title: "Digital Marketing",
  intro: {
    img: "/images/service-dm.jpg",
    heading: "Full-Funnel Campaigns That Feed the Network",
    p1: "Full-funnel campaigns that drive qualified traffic into the network from day one — built, tested, and optimized to turn clicks into calls and leads that convert.",
    p2: "Campaigns built and managed across search and social platforms, targeting high-intent audiences in each vertical we serve.",
  },
  whatHeading: "What We Do For Digital Marketing",
  whatSub: "Every channel pointed at one outcome: qualified volume into the network.",
  features: [
    { icon: "🔍", title: "Paid Search & Social", desc: "Campaigns built and managed across search and social platforms, targeting high-intent audiences in each vertical we serve." },
    { icon: "🖥️", title: "Landing Page Optimization", desc: "Landing pages are designed and continuously tested to convert traffic into qualified calls and leads, not just clicks." },
    { icon: "🎨", title: "Creative Testing", desc: "Ad creative, copy, and offers are tested in ongoing cycles, with underperformers replaced by what's actually converting." },
    { icon: "🧭", title: "Multi-Channel Attribution", desc: "Every touchpoint is tracked across channels, giving a clear view of which sources are actually driving qualified volume." },
  ],
  offersHeading: "Digital Marketing Strategy for Your Business",
  offersSub: "Built, tested, and optimized in continuous cycles — never set-and-forget.",
  offers: [
    { img: "/images/dm-step-1.jpg", title: "Campaign Working", desc: "Search and social campaigns launched against your CPA target, with budgets that ramp as performance proves out." },
    { img: "/images/dm-step-2.jpg", title: "Content Strategy", desc: "Landing pages and offers designed for the vertical's rules — built to convert traffic into calls and leads, not just clicks." },
    { img: "/images/dm-step-3.jpg", title: "Social Media Boosting", desc: "Creative tested in ongoing cycles across social platforms, with underperformers replaced by what's actually converting." },
  ],
  faqs: [
    { q: "Do you work outside insurance?", a: "Insurance is where the network's data advantage lives. We take select adjacent work when we're confident we can hit the target." },
    { q: "Who owns the ad accounts?", a: "You do, wherever platform rules allow. We operate inside them — if we part ways, your history and pixels stay with you." },
    { q: "What's the minimum engagement?", a: "Enough spend to generate a statistically honest read in your vertical — we size it in the proposal rather than quote a one-size number." },
  ],
  testiHeading: "What Campaign Partners Say",
  testiStart: 2,
  ctaHeading: "Ready to Fuel\nthe Funnel?",
  ctaSub: "Let's talk about how full-funnel digital campaigns can drive qualified traffic into your pipeline.",
};

export default function Page() {
  return <ServiceTemplate d={d} />;
}
