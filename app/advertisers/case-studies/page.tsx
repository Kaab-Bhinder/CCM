import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertiser Case Studies",
  description: "Results CCM has delivered for advertisers: lower CPA, higher connect rates, and compliant scale across insurance verticals.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/advertisers">Advertisers</a> / <span>Case studies</span></nav>
      <span className="eyebrow">Proof</span>
      <h1>Advertiser results.</h1>
      <p className="lead">Advertiser-side stories only. The full library — including publisher stories — lives in <a href="/resources/case-studies">Resources → Case studies</a>.</p>
      {/* These are placeholder studies. Replace with real client results (challenge, approach, services used, number) before launch. */}
    </div>
  </section>

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

  <section className="final-cta">
    <div className="container center">
      <h2>Get similar results.</h2>
      <p className="muted" style={{ margin: "12px 0 28px" }}>Every study above started with a controlled pilot.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <a className="btn btn-primary btn-lg" href="/advertisers#proposal">Request campaign proposal</a>
        <a className="btn btn-secondary btn-lg" href="/advertisers/lead-quality">See how quality is controlled</a>
      </div>
    </div>
  </section>
    </>
  );
}
