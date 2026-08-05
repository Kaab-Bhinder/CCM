import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Resources",
  description: "CCM resources: case studies, insights, FAQs, and the performance marketing glossary.",
};

export default function Page() {
  return (
    <>

  {/* Deliberately thin landing (per IA spec) — nav links children directly; this page just routes. */}
  <PageBanner crumb="RESOURCES" title={<>Resources.</>} />

  <section className="section">
    <div className="container">
      <div className="grid cols-4">
        <a className="card" href="/resources/case-studies"><div className="icon"><Icon name="dashboard" size={58} /></div><h3>Case studies</h3><p>Results with numbers, filterable by vertical and audience.</p><span className="card-link">Browse</span></a>
        <a className="card" href="/resources/insights"><div className="icon"><Icon name="palette" size={58} /></div><h3>Insights</h3><p>Analysis on pay-per-call, compliance shifts, and vertical seasons.</p><span className="card-link">Read</span></a>
        <a className="card" href="/resources/faqs"><div className="icon"><Icon name="lightbulb" size={58} /></div><h3>FAQs</h3><p>Grouped by audience: advertiser, publisher, general.</p><span className="card-link">Get answers</span></a>
        <a className="card" href="/resources/glossary"><div className="icon"><Icon name="compass" size={58} /></div><h3>Glossary</h3><p>Buffer, warm transfer, ping-post, connect rate — the industry's language, defined.</p><span className="card-link">Look up</span></a>
      </div>
    </div>
  </section>
    </>
  );
}
