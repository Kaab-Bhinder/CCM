import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

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

  {/* Why vertical expertise matters — definition rows, not cards */}
  <section className="section ind-why-sec">
    <div className="container">
      <div className="sp-center-head">
        <h2>Why the vertical matters more than the channel</h2>
        <p>The same call flow behaves completely differently across these four markets.</p>
      </div>
      <dl className="def-rows">
        <div>
          <dt>Regulation</dt>
          <dd>Medicare marketing language is prescribed by CMS. ACA consent is under active federal scrutiny after agent-of-record abuse. Auto is governed state by state. Final expense draws senior-market scrutiny. One compliance posture does not cover all four.</dd>
        </div>
        <div>
          <dt>Seasonality</dt>
          <dd>Medicare concentrates most of the year&apos;s volume into a seven-week AEP window. ACA peaks through OEP and holds a baseline on qualifying life events. Auto and final expense run year-round with softer curves.</dd>
        </div>
        <div>
          <dt>Buyer behaviour</dt>
          <dd>A rate shopper comparing auto quotes wants speed. A final expense caller wants patience and plain language. Buffer thresholds, scripts, and dayparting are set per vertical, never copied across.</dd>
        </div>
        <div>
          <dt>Capacity planning</dt>
          <dd>Volume is paced to licensed-agent staffing in each market. Over-delivering into a full queue burns budget and goodwill — so caps are agreed before launch, not negotiated after.</dd>
        </div>
      </dl>
    </div>
  </section>

  {/* Enrollment calendar */}
  <section className="section ind-cal">
    <div className="container">
      <div className="sp-center-head">
        <h2>The calendar that moves the volume</h2>
        <p>Plan capacity against these windows — we lock pacing before each one opens.</p>
      </div>
      <div className="cal-wrap">
        <div className="cal-months" aria-hidden="true">
          {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <div className="cal-bars">
          <div className="cal-row">
            <span className="cal-label">Medicare AEP</span>
            <div className="cal-track"><span className="cal-band band-a" style={{ left: "78%", width: "18%" }}>Oct 15 – Dec 7</span></div>
          </div>
          <div className="cal-row">
            <span className="cal-label">Medicare OEP</span>
            <div className="cal-track"><span className="cal-band band-b" style={{ left: "0%", width: "24%" }}>Jan 1 – Mar 31</span></div>
          </div>
          <div className="cal-row">
            <span className="cal-label">ACA OEP</span>
            <div className="cal-track"><span className="cal-band band-c" style={{ left: "83%", width: "17%" }}>Nov 1 – Jan 15</span></div>
          </div>
          <div className="cal-row">
            <span className="cal-label">Auto &amp; Final Expense</span>
            <div className="cal-track"><span className="cal-band band-d" style={{ left: "0%", width: "100%" }}>Year-round</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <ReadyBand
    heading={"Ready to Scale in\nYour Vertical?"}
    sub="Tell us which market you're in and what volume you need — we'll show you how the network performs there."
  />

    </>
  );
}
