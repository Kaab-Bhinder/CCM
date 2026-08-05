import type { Metadata } from "next";
import IndustryTemplate, { type IndustryData } from "@/components/IndustryTemplate";

export const metadata: Metadata = {
  title: "ACA",
  description: "Reach ACA Marketplace shoppers through Close Crew's vetted publisher network — matched and routed in real time during Open and Special Enrollment Periods.",
};

const d: IndustryData = {
  crumb: "ACA",
  title: "ACA",
  heroDesc: "Close Crew connects advertisers with a vetted publisher network reaching consumers shopping for ACA Marketplace coverage — matched and routed in real time during Open and Special Enrollment Periods.",
  img: "/images/ind-aca.jpg",
  whyHeading: "Why ACA Partners Choose Close Crew",
  feats: [
    { title: "Open & Special Enrollment Intent", desc: "Shopper intent spikes during Open Enrollment and Special Enrollment Periods — our network is built to capture that demand the moment it appears." },
    { title: "Marketplace-Ready Consumers", desc: "Publishers reach consumers actively researching Health Insurance Marketplace coverage, not cold or unqualified traffic." },
    { title: "Licensed Agent Handoff", desc: "Every qualified call or lead is handed off to an available licensed agent in real time, keeping the enrollment moving." },
  ],
  bandText: "Capture Marketplace Demand the Moment It Appears",
  timelineHeading: "The OEP Calendar",
  timeline: [
    { when: "Aug – Sep", what: "Planning window: staffing curves and volume targets agreed." },
    { when: "Oct", what: "Pre-OEP ramp: campaigns proven live before the rush." },
    { when: "Nov 1 – Jan 15", what: "OEP peak: daily pacing to agent capacity, deadline surges planned." },
    { when: "Year-round", what: "SEP qualifying events keep a steady baseline of enrollments." },
  ],
  ctaHeading: "Ready to Scale Your\nACA Pipeline?",
  ctaSub: "Tell us your target enrollment periods and volume goals — we'll show you how the network can help you hit them.",
};

export default function Page() {
  return <IndustryTemplate d={d} />;
}
