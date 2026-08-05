import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Services \u2014 Pay Per Call, AI Automation, Digital Marketing",
  description: "CCM's core capabilities: pay-per-call, AI automation, and digital marketing \u2014 plus the integrations that connect them to your stack.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="SERVICES" title={<>Capabilities, not packages.</>} desc={<>Three engines that run together or separately, depending on where your acquisition actually breaks.</>} />

  <section className="section">
    <div className="container">
      <div className="grid cols-3">
        <a className="card" href="/services/pay-per-call">
          <div className="icon"><Icon name="phone" size={58} /></div>
          <h3>Pay Per Call</h3>
          <p>Inbound calls from consumers ready to talk — buffer-qualified, compliantly sourced, billed only on your criteria.</p>
          <span className="card-link">Explore pay per call</span>
        </a>
        <a className="card" href="/services/ai-automation">
          <div className="icon"><Icon name="layers" size={58} /></div>
          <h3>AI Automation</h3>
          <p>Qualification, scoring, routing, and follow-up automated — with a diagram of exactly where the machine sits and where humans stay.</p>
          <span className="card-link">Explore AI automation</span>
        </a>
        <a className="card" href="/services/digital-marketing">
          <div className="icon"><Icon name="trending" size={58} /></div>
          <h3>Digital Marketing</h3>
          <p>Search, social, native, display, and email run against one metric: your cost per acquired customer.</p>
          <span className="card-link">Explore digital marketing</span>
        </a>
      </div>
    </div>
  </section>
      <ReadyBand heading={"Not sure which engine you need?"} />
    </>
  );
}
