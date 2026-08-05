import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Industries",
  description: "Close Crew's network is purpose-built around four core insurance-adjacent verticals — each backed by compliance-first infrastructure, vetted publishers, and real-time routing.",
};

const VERTICALS = [
  { n: "01", tone: "iv-mint", name: "Auto Insurance", href: "/industries/auto-insurance", desc: "Connect with active rate shoppers comparing quotes, routed in real time to advertisers ready to close." },
  { n: "02", tone: "iv-ink", name: "Medicare", href: "/industries/medicare", desc: "Reach Medicare Advantage and Supplement shoppers during AEP and other high-intent enrollment windows." },
  { n: "03", tone: "iv-lav", name: "ACA", href: "/industries/aca", desc: "Engage consumers actively enrolling in Marketplace coverage during Open and Special Enrollment Periods." },
  { n: "04", tone: "iv-cream", name: "Final Expense", href: "/industries/final-expense", desc: "Deliver senior-focused final expense conversations built on a respectful, high-trust outreach standard." },
];

export default function Page() {
  return (
    <>
      <PageBanner crumb="INDUSTRIES" title="Industries" desc={<>Close Crew&apos;s network is purpose-built around four core insurance-adjacent verticals — each backed by the same compliance-first infrastructure, vetted publishers, and real-time call and lead routing.</>} />

      <section className="section iv-sec">
        <div className="container">
          <div className="grid cols-2 iv-grid">
            {VERTICALS.map((v) => (
              <a className={`iv-tile ${v.tone}`} href={v.href} key={v.n}>
                <span className="iv-index">{v.n}</span>
                <h2>{v.name}</h2>
                <p>{v.desc}</p>
                <span className="iv-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
