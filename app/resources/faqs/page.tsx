import type { Metadata } from "next";
import ReadyBand from "@/components/ReadyBand";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to the questions advertisers and publishers ask most about the Close Crew network.",
};

const FAQS: { q: string; a: string }[] = [
  { q: "How quickly can we see results?", a: "Most advertisers start seeing qualified calls or leads within the first few weeks of launch, once campaign parameters and publisher matching are dialed in. Timelines vary by vertical and volume goals, but our team works to get you live and optimizing as fast as possible." },
  { q: "Do you work with startups and small businesses?", a: "Yes. We work with advertisers and publishers at every stage, from early-stage teams testing a new channel to established brands scaling nationally. Campaigns are structured around your goals and budget, not a one-size-fits-all minimum." },
  { q: "What makes Close Crew different?", a: "We combine a vetted publisher network, AI-driven matching, and compliance-first infrastructure in one place. That means advertisers get quality and transparency, and publishers get consistent demand and fair payouts, without juggling multiple disconnected vendors." },
  { q: "How does publisher payout work?", a: "Publishers are paid based on verified, qualified performance, calls or leads that meet the agreed quality bar for a given campaign. Payout terms and cadence are set per partnership, and performance is visible in real time so there are no surprises." },
  { q: "What compliance measures are in place?", a: "Every campaign runs through TCPA and DNC scrubbing, consent tracking, and publisher vetting before traffic goes live. Compliance is built into the routing infrastructure itself, not handled as a manual afterthought. See our Compliance page for more detail." },
  { q: "Which industries do you support?", a: "We currently focus on Auto Insurance, Medicare, ACA, and Final Expense, verticals where high-intent calls and leads drive real advertiser value. We evaluate new verticals on an ongoing basis as the network grows." },
  { q: "How do we get started?", a: "Reach out through our contact page and our team will walk through your goals, whether you're looking to buy calls and leads as an advertiser or monetize traffic as a publisher. From there, we align on parameters and move toward launch." },
  { q: "Is there a minimum spend or volume commitment?", a: "Requirements vary based on vertical and program type. Some campaigns are designed for testing at smaller volume before scaling, while enterprise partnerships involve larger, structured commitments. We'll walk you through what makes sense for your goals." },
  { q: "Can Close Crew integrate with our existing systems?", a: "Yes. Our platform supports real-time API integrations so call and lead data can flow directly into the CRM, dialer, or reporting tools your team already uses, rather than requiring you to adopt a new system." },
  { q: "What channels does the network cover?", a: "The network operates across Pay Per Call, AI Automation, and Digital Marketing, so advertisers can diversify how they acquire consumers while publishers can monetize traffic across multiple formats." },
];

export default function Page() {
  return (
    <>
      <PageBanner crumb="FAQ" title="Faq" />

      <section className="section sp-faq faqx">
        <div className="container">
          <div className="sp-center-head">
            <h2><img className="svc-scribble" src="/assets/border.png" alt="" />Questions We Hear Most</h2>
            <img className="mini-flower" src="/assets/flower1-purple.png" alt="" aria-hidden="true" />
            <p>Answers for advertisers and publishers evaluating whether Close Crew is the right fit.</p>
          </div>
          <div className="sp-faq-grid">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="book-strip">
        <div className="container book-inner">
          <div>
            <h2>Still Have Questions?</h2>
            <p>Our team is happy to walk through anything specific to your vertical, volume, or goals.</p>
          </div>
          <a className="btn btn-primary btn-lg btn-round" href="/company/contact">Talk to Us ↗</a>
        </div>
      </section>

      <ReadyBand />
    </>
  );
}
