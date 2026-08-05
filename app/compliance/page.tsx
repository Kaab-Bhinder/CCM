import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Compliance",
  description: "How TCPA, DNC, publisher vetting, and real-time tracking are built into every campaign on the Close Crew network.",
};

const PILLARS = [
  { n: "01", tone: "cp-mint", icon: "🛡️", title: "TCPA & DNC Compliant", desc: "Every campaign runs on compliance-first infrastructure, with Do Not Call scrubbing and TCPA safeguards applied before a call or lead ever reaches an advertiser. Consent and call handling are treated as first-class requirements, not an afterthought." },
  { n: "02", tone: "cp-lav", icon: "⚡", title: "Real-Time Tracking & API", desc: "Advertisers and publishers see call and lead activity as it happens, not in a next-day report. API integrations plug directly into existing CRM and dialer stacks, so performance data flows into the systems your team already uses." },
  { n: "03", tone: "cp-cream", icon: "✅", title: "Vetted Publisher Network", desc: "Publishers go through a review process before they're allowed to route traffic, and quality is monitored continuously after onboarding. Underperforming or non-compliant sources are addressed quickly to protect advertiser spend." },
  { n: "04", tone: "cp-sky", icon: "🗺️", title: "National Coverage", desc: "The network is active across all 50 states, with publishers who bring local market expertise in the verticals that matter most. That combination lets advertisers scale nationally while still reaching consumers with regionally relevant messaging." },
];

const DEEPER = [
  { title: "Consent & TCPA Practices", desc: "Capture methodology, disclosure handling, call recording, DNC scrubbing, and record retention.", href: "/compliance/consent" },
  { title: "Publisher Vetting", desc: "How publishers are approved, monitored, and removed — the process behind the network.", href: "/compliance/publisher-vetting" },
  { title: "Data & Privacy", desc: "Data handling, consumer rights requests, and our security posture.", href: "/compliance/privacy" },
  { title: "Lead & Call Quality", desc: "Duplicate detection, call scoring, fraud signals, and the return policy in plain language.", href: "/advertisers/lead-quality" },
];

export default function Page() {
  return (
    <>
      <PageBanner
        crumb="COMPLIANCE"
        title="Compliance Built Into the Network, Not Bolted On"
        desc={<>Trust is the foundation of a performance marketing network. Here&apos;s how we keep advertisers, publishers, and consumers protected at every step.</>}
      />

      {/* Pillars — alternating full-width bands */}
      <section className="section cp-sec">
        <div className="container">
          {PILLARS.map((p) => (
            <article className={`cp-row ${p.tone}`} key={p.n}>
              <div className="cp-mark">
                <span className="cp-ic">{p.icon}</span>
                <span className="cp-n">{p.n}</span>
              </div>
              <div className="cp-body">
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Deeper documentation */}
      <section className="section cp-deep">
        <div className="container">
          <div className="sp-center-head">
            <h2><img className="svc-scribble" src="/assets/border.png" alt="" />Read the Detail</h2>
            <p>Written for the person doing diligence on us — compliance officers, in-house counsel, and audit teams.</p>
          </div>
          <div className="grid cols-4 cp-deep-grid">
            {DEEPER.map((d) => (
              <a className="cp-doc" href={d.href} key={d.href}>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <span className="discover">Read</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ReadyBand heading={"Have Compliance\nQuestions?"} sub="Talk to our team about how TCPA, DNC, and publisher vetting apply to your specific program." />
    </>
  );
}
