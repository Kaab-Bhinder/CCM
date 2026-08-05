import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Partners",
  description: "How advertisers, publishers, and enterprise partners plug into the Close Crew network.",
};

const SEATS = [
  { n: "01", tone: "iv-mint", name: "Advertisers", href: "/advertisers", desc: "Get connected with vetted publishers delivering qualified, high-intent calls and leads across your target verticals." },
  { n: "02", tone: "iv-lav", name: "Publishers", href: "/publishers", desc: "Monetize your traffic with premium advertiser offers, transparent payouts, and real-time performance data." },
  { n: "03", tone: "iv-ink", name: "Enterprise Partnerships", href: "/company/enterprise-partnerships", desc: "Custom integrations, dedicated account management, and volume-based programs for large-scale partners." },
];

const TRUST = [
  { icon: "shield", title: "TCPA & DNC Compliant", desc: "TCPA and DNC safeguards are built into every campaign before a single call or lead is routed." },
  { icon: "bolt", title: "Real-Time Tracking & API", desc: "Live call and lead data with API integrations that plug straight into your existing stack." },
  { icon: "check-circle", title: "Vetted Partner Network", desc: "Every partner is reviewed and monitored for quality before they're allowed to route traffic." },
];

export default function Page() {
  return (
    <>
      <PageBanner
        crumb="PARTNERS"
        title="Three Ways to Join the Network"
        desc={<>Whether you&apos;re generating demand, driving traffic, or running a large-scale program, there&apos;s a seat for you in the Close Crew partner network.</>}
      />

      <section className="section iv-sec">
        <div className="container">
          <div className="grid cols-3 pt-grid">
            {SEATS.map((s) => (
              <a className={`iv-tile ${s.tone}`} href={s.href} key={s.n}>
                <span className="iv-index">{s.n}</span>
                <h2>{s.name}</h2>
                <p>{s.desc}</p>
                <span className="iv-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-trust">
        <div className="container">
          <div className="sp-center-head">
            <h2><img className="svc-scribble" src="/assets/border.png" alt="" />What Every Partner Gets</h2>
          </div>
          <div className="grid cols-3">
            {TRUST.map((t) => (
              <div className="sp-feat" key={t.title}>
                <span className="fb fb-0"><Icon name={t.icon} size={62} /></span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReadyBand heading={"Ready to Partner\nWith Us?"} sub="Tell us which seat fits you best, and we'll get you plugged into the network." />
    </>
  );
}
