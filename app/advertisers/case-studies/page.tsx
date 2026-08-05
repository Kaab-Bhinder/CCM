import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReadyBand from "@/components/ReadyBand";

export const metadata: Metadata = {
  title: "Advertiser Case Studies",
  description: "Results CCM has delivered for advertisers: lower CPA, higher connect rates, and compliant scale across insurance verticals.",
};

export default function Page() {
  return (
    <>

  <PageBanner crumb="CASE STUDIES" title={<>Advertiser results.</>} desc={<>Advertiser-side stories only. The full library — including publisher stories — lives in <a href="/resources/case-studies">Resources → Case studies</a>.</>} />

  <section className="section">
    <div className="container">
      <div className="grid cols-3">
        <a className="card" href="/resources/case-studies">
          <span className="badge">Medicare</span>
          <h3 style={{ marginTop: "12px" }}>−42% cost per enrollment</h3>
          <p>National carrier, one AEP season. Warm transfers + AI pre-qualification matched to licensed-agent capacity.</p>
          <span className="card-link">Read study</span>
        </a>
        <a className="card" href="/resources/case-studies">
          <span className="badge">Auto Insurance</span>
          <h3 style={{ marginTop: "12px" }}>2.7× ROAS on inbound calls</h3>
          <p>Regional agency network. State-level filtering and buffer tuning against underwriting appetite.</p>
          <span className="card-link">Read study</span>
        </a>
        <a className="card" href="/resources/case-studies">
          <span className="badge">ACA</span>
          <h3 style={{ marginTop: "12px" }}>+31% connect rate in OEP</h3>
          <p>Enrollment platform. Dayparting rebuilt around agent staffing and consumer response curves.</p>
          <span className="card-link">Read study</span>
        </a>
      </div>
    </div>
  </section>
      <ReadyBand heading={"Get similar results."} />
    </>
  );
}
