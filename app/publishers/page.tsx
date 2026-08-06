import type { Metadata } from "next";
import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";

export const metadata: Metadata = {
  title: "For Publishers",
  description: "Monetize your traffic with premium advertiser offers, transparent payouts, and dedicated support from the Close Crew publisher network.",
};

const d: SolutionData = {
  variant: "b",
  crumb: "PUBLISHERS",
  title: "For Publishers",
  heroDesc: "Monetize your traffic with premium advertiser offers, transparent payouts, and dedicated support from the Close Crew publisher network.",
  img: "/images/sol-publishers.jpg",
  lead: {
    title: "Monetize Your Traffic With a Network You Can Trust",
    desc: "Close Crew gives publishers access to premium advertiser offers, transparent payouts, and real-time performance data — so you can grow your traffic with confidence.",
  },
  tiles: [
    { icon: "gem", title: "Premium Advertiser Offers", desc: "Access exclusive Pay Per Call, AI Automation, and Digital Marketing offers across Auto Insurance, Medicare, ACA, Final Expense, and more." },
    { icon: "wallet", title: "Transparent, Fast Payouts", desc: "Know exactly what you're earning and when. No hidden fees, no guessing games — just reliable, on-time payments." },
    { icon: "handshake", title: "Dedicated Publisher Support", desc: "Work with a real account team that helps you optimize offers, troubleshoot issues, and grow your traffic sustainably." },
  ],
  stepsHeading: "From Application to Payout",
  steps: [
    { title: "Apply & Get Vetted", desc: "Complete applications get a written answer in 2–3 business days. Approval is per-vertical, with clear traffic standards." },
    { title: "Pick Campaigns & Go Live", desc: "Live campaign categories across four insurance verticals, with payout types, allowed traffic, and caps stated up front." },
    { title: "Track & Get Paid", desc: "Event-level accrual in the portal, written cycle statements, and payments that land on schedule." },
  ],
  fitHeading: "Is the Network Right for Your Traffic?",
  fit: [
    "You run search, social, native, or opted-in owned lists",
    "You can evidence consent for every contact you send",
    "You disclose your traffic sources and creatives",
    "You want payout terms published, not discovered after signing",
  ],
  notFit: [
    "Incentivized or rewarded traffic of any kind",
    "Aged or purchased data re-dialed as fresh",
    "Undisclosed rebrokering of other networks' calls",
  ],
  quote: {
    text: "Payouts land on the schedule they publish, and the portal shows why every call qualified or didn't. That transparency is the reason we kept scaling with them.",
    who: "Priya Raman, Media Buyer · Publisher partner",
  },
  ctaHeading: "Ready to Start\nMonetizing?",
  ctaSub: "Apply to join the Close Crew publisher network and get matched with offers built for your traffic.",
  ctaLabel: "Apply to Join the Network",
  ctaHref: "/publishers/apply",
};

export default function Page() {
  return <SolutionTemplate d={d} />;
}
