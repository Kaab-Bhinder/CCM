import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Compliance",
  description: "How TCPA, DNC, publisher vetting, and real-time tracking are built into every campaign on the Close Crew network.",
};

const PILLARS = [
  { n: "01", title: "TCPA & DNC Compliant", desc: "Every campaign runs on compliance-first infrastructure, with Do Not Call scrubbing and TCPA safeguards applied before a call or lead ever reaches an advertiser. Consent and call handling are treated as first-class requirements, not an afterthought." },
  { n: "02", title: "Real-Time Tracking & API", desc: "Advertisers and publishers see call and lead activity as it happens, not in a next-day report. API integrations plug directly into existing CRM and dialer stacks, so performance data flows into the systems your team already uses." },
  { n: "03", title: "Vetted Publisher Network", desc: "Publishers go through a review process before they're allowed to route traffic, and quality is monitored continuously after onboarding. Underperforming or non-compliant sources are addressed quickly to protect advertiser spend." },
  { n: "04", title: "National Coverage", desc: "The network is active across all 50 states, with publishers who bring local market expertise in the verticals that matter most. That combination lets advertisers scale nationally while still reaching consumers with regionally relevant messaging." },
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
            <article className="cp-entry" key={p.n}>
              <span className="cp-index">{p.n}</span>
              <div className="cp-body">
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      <ReadyBand heading={"Have Compliance\nQuestions?"} sub="Talk to our team about how TCPA, DNC, and publisher vetting apply to your specific program." />
    </>
  );
}
