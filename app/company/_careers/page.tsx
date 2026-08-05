import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the crew behind Close Crew's performance marketing network.",
};

const TRAITS = [
  { icon: "bolt", title: "Fast-Paced", desc: "We move quickly, ship often, and adjust course based on real performance data." },
  { icon: "dashboard", title: "Data-Driven", desc: "Decisions are grounded in numbers, not guesswork — from routing logic to hiring." },
  { icon: "globe", title: "Remote-Friendly", desc: "We hire great people wherever they are and build our workflows around that." },
];

export default function Page() {
  return (
    <>
      <PageBanner
        crumb="CAREERS"
        title="Join the Crew"
        desc={<>We&apos;re a small, fast-moving team building the infrastructure behind a growing performance marketing network. If that sounds like your kind of work, we&apos;d like to meet you.</>}
      />

      <section className="section cr-sec">
        <div className="container">
          <div className="grid cols-3">
            {TRAITS.map((t, i) => (
              <div className={`val-card vc-${i % 3}`} key={t.title}>
                <span className="val-ic"><Icon name={t.icon} size={62} /></span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="cr-open">
            <div>
              <h2 className="sp-h2">Open Roles</h2>
              <p className="sp-p">No specific openings posted right now — but we&apos;re always interested in people who can help the network grow.</p>
            </div>
            <a className="btn btn-primary btn-lg btn-round" href="/company/contact">Send Us a Note ↗</a>
          </div>
        </div>
      </section>

      <ReadyBand heading={"Think You'd Fit\nthe Crew?"} sub="Send us a note and tell us why you'd like to be part of the crew." />
    </>
  );
}
