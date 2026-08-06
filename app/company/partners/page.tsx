import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";
import Testimonials from "@/components/Testimonials";
import data from "@/public/assets/data.json";

export const metadata: Metadata = {
  title: "Partners",
  description: "How advertisers, publishers, and enterprise partners plug into the Close Crew network.",
};

const SEATS = [
  {
    n: "01",
    name: "Advertisers",
    href: "/advertisers",
    desc: "Get connected with vetted publishers delivering qualified, high-intent calls and leads across your target verticals.",
    fit: ["You buy calls or leads in insurance", "You need consent evidence you can audit", "You have agent capacity to fill"],
    cta: "Explore advertiser solutions",
  },
  {
    n: "02",
    name: "Publishers",
    href: "/publishers",
    desc: "Monetize your traffic with premium advertiser offers, transparent payouts, and real-time performance data.",
    fit: ["You run search, social, native, or owned lists", "You can evidence consent for every contact", "You disclose your traffic sources"],
    cta: "See publisher offers",
  },
  {
    n: "03",
    name: "Enterprise",
    href: "/company/enterprise-partnerships",
    desc: "Custom integrations, dedicated account management, and volume-based programs for large-scale partners.",
    fit: ["You need API or CRM integration", "You run high-volume, multi-market programs", "You want a named account team"],
    cta: "Discuss a program",
  },
];

const STANDARDS = [
  { t: "TCPA & DNC compliant", d: "Safeguards run on every campaign before a single call or lead is routed — not bolted on afterwards." },
  { t: "Real-time tracking & API", d: "Live call and lead data, with integrations that plug straight into the stack your team already uses." },
  { t: "Vetted on both sides", d: "Every partner is reviewed and monitored for quality before they're allowed to route traffic." },
  { t: "National coverage", d: "Active across all 50 states, with publishers who bring local market expertise where it matters." },
];

export default function Page() {
  return (
    <>
      <PageBanner
        crumb="PARTNERS"
        title="Three Ways to Join the Network"
        desc={<>Whether you&apos;re generating demand, driving traffic, or running a large-scale program, there&apos;s a seat for you in the Close Crew partner network.</>}
      />

      {/* Seats — editorial columns with a fit list, not pastel tiles */}
      <section className="section seats-sec">
        <div className="container">
          <div className="seats-grid">
            {SEATS.map((s) => (
              <article className="seat" key={s.n}>
                <span className="seat-n">{s.n}</span>
                <h2>{s.name}</h2>
                <p className="seat-desc">{s.desc}</p>
                <ul className="seat-fit">
                  {s.fit.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="seat-cta" href={s.href}>
                  {s.cta} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standards — hairline list */}
      <section className="section pt-std">
        <div className="container">
          <div className="std-grid">
            <div className="std-aside">
              <span className="eyebrow">Shared Standards</span>
              <h2>What every partner gets, whichever seat you take.</h2>
              <p>The network only works if both sides can trust the same rules.</p>
            </div>
            <ol className="std-list">
              {STANDARDS.map((s, i) => (
                <li key={s.t}>
                  <span className="std-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Network at a glance */}
      <section className="section pt-stats">
        <div className="container">
          <div className="about-stats">
            {data.stats.map((s) => (
              <div className="astat" key={s.label}>
                <div className="n">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        heading="What Partners Say"
        sub="From both sides of the network."
        start={2}
        count={6}
        perView={3}
        scribble={false}
      />

      <ReadyBand
        heading={"Ready to Partner\nWith Us?"}
        sub="Tell us which seat fits you best, and we'll get you plugged into the network."
      />
    </>
  );
}
