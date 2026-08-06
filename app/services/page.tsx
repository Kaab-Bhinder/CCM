import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Services \u2014 Pay Per Call, AI Automation, Digital Marketing",
  description: "CCM's core capabilities: pay-per-call, AI automation, and digital marketing \u2014 plus the integrations that connect them to your stack.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="SERVICES" title={<>Capabilities, not packages.</>} desc={<>Three engines that run together or separately, depending on where your acquisition actually breaks.</>} />

  <section className="section svc-index">
    <div className="container">
      <ol className="svc-rows">
        <li>
          <a href="/services/pay-per-call">
            <span className="sr-n">01</span>
            <h2>Pay Per Call</h2>
            <p>Inbound calls from consumers ready to talk — buffer-qualified, compliantly sourced, billed only on your criteria.</p>
            <span className="sr-go" aria-hidden="true">→</span>
          </a>
        </li>
        <li>
          <a href="/services/ai-automation">
            <span className="sr-n">02</span>
            <h2>AI Automation</h2>
            <p>Qualification, scoring, routing, and follow-up automated — with a diagram of exactly where the machine sits and where humans stay.</p>
            <span className="sr-go" aria-hidden="true">→</span>
          </a>
        </li>
        <li>
          <a href="/services/digital-marketing">
            <span className="sr-n">03</span>
            <h2>Digital Marketing</h2>
            <p>Search, social, native, display, and email run against one metric: your cost per acquired customer.</p>
            <span className="sr-go" aria-hidden="true">→</span>
          </a>
        </li>
      </ol>
    </div>
  </section>


  {/* Where each engine fits — concrete comparison, not another card grid */}
  <section className="section svc-fit">
    <div className="container">
      <div className="sp-center-head">
        <h2>Which engine fits which problem</h2>
        <p>Most partners start with one and add the others as the funnel tightens.</p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Engine</th><th>Best when</th><th>What you get</th><th>Typical ramp</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Pay Per Call</strong></td>
              <td>Your closers convert on the phone and you need volume they can actually work</td>
              <td>Buffer-qualified inbound calls routed by geo, licensing, and capacity</td>
              <td>5–10 business days</td>
            </tr>
            <tr>
              <td><strong>AI Automation</strong></td>
              <td>Agents waste hours on contacts that were never going to convert</td>
              <td>Scoring, matching, and routing that filter before a human is involved</td>
              <td>2–3 weeks</td>
            </tr>
            <tr>
              <td><strong>Digital Marketing</strong></td>
              <td>You need first-party demand rather than shared or resold supply</td>
              <td>Search, social, and native campaigns run against your CPA target</td>
              <td>3–4 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  {/* How we work — old-site process, sticky heading beside the steps */}
  <section className="section svc-process">
    <div className="container proc-grid">
      <div className="proc-aside">
        <span className="eyebrow">How We Work</span>
        <h2>The same four steps on every engagement.</h2>
        <p>No mystery onboarding, whichever engine you start with.</p>
      </div>
      <ol className="proc-steps">
        <li>
          <span className="ps-n">01</span>
          <h3>Discovery &amp; Onboarding</h3>
          <p>We align on your goals, target verticals, and compliance requirements before a single call is routed.</p>
        </li>
        <li>
          <span className="ps-n">02</span>
          <h3>Network Matching</h3>
          <p>Our AI matching engine connects you with the right publishers or advertisers for your specific vertical and volume needs.</p>
        </li>
        <li>
          <span className="ps-n">03</span>
          <h3>Launch &amp; Track</h3>
          <p>Campaigns go live with real-time call and lead tracking, so you see performance as it happens.</p>
        </li>
        <li>
          <span className="ps-n">04</span>
          <h3>Optimize &amp; Scale</h3>
          <p>We continuously optimize routing and creative based on live data, then scale what&apos;s working.</p>
        </li>
      </ol>
    </div>
  </section>

  {/* Verticals the engines run in */}
  <section className="section svc-verts">
    <div className="container">
      <div className="sp-center-head">
        <h2>Running in four regulated verticals</h2>
        <p>Every engine is tuned to the rules and seasonality of the market it operates in.</p>
      </div>
      <div className="vert-row">
        <a href="/industries/auto-insurance"><span>01</span> Auto Insurance</a>
        <a href="/industries/medicare"><span>02</span> Medicare</a>
        <a href="/industries/aca"><span>03</span> ACA</a>
        <a href="/industries/final-expense"><span>04</span> Final Expense</a>
      </div>
    </div>
  </section>

  <Testimonials
    heading="What Partners Say"
    sub="Feedback from advertisers and publishers running on the network."
    start={1}
    count={6}
    perView={3}
    scribble={false}
  />

      <ReadyBand heading={"Not sure which engine you need?"} />
    </>
  );
}
