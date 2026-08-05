import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to the Publisher Network",
  description: "Apply to join the CCM publisher network. Applications reviewed in 2\u20133 business days.",
};

export default function Page() {
  return (
    <>

  <section className="page-hero">
    <div className="container">
      <nav className="breadcrumb"><a href="/">Home</a> / <a href="/publishers">Publishers</a> / <span>Apply</span></nav>
      <span className="eyebrow">Publisher Application</span>
      <h1>Apply to the network.</h1>
      <p className="lead">This goes to the partnerships team, not a general inbox. Complete applications get a written answer in <strong>2–3 business days</strong>; incomplete ones get a question back, which slows everyone down — so fill in the detail.</p>
    </div>
  </section>

  <section className="section">
    <div className="container narrow">
      <div className="form-card">
        <form className="js-demo-form form-grid" action="#" method="post">
          <div className="field"><label htmlFor="p-company">Company / operating name *</label><input id="p-company" type="text" required /></div>
          <div className="field"><label htmlFor="p-site">Website</label><input id="p-site" type="url" placeholder="https://" /></div>
          <div className="field"><label htmlFor="p-name">Contact name *</label><input id="p-name" type="text" required /></div>
          <div className="field"><label htmlFor="p-email">Email *</label><input id="p-email" type="email" required /></div>
          <div className="field full"><label htmlFor="p-sources">Traffic sources *</label>
            <textarea id="p-sources" required placeholder="Channels, creatives, landing flows. Be specific — 'social' alone will get a follow-up question."></textarea>
          </div>
          <div className="field"><label htmlFor="p-volume">Monthly volume *</label>
            <select id="p-volume">
              <option>Under 500 calls/leads</option>
              <option>500 – 2,500</option>
              <option>2,500 – 10,000</option>
              <option>10,000+</option>
            </select>
          </div>
          <div className="field"><label htmlFor="p-platform">Tracking platform</label>
            <select id="p-platform">
              <option>Ringba</option><option>Retreaver</option><option>TrackDrive</option><option>Invoca</option><option>Other / none yet</option>
            </select>
          </div>
          <div className="field full"><label>Verticals of interest *</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "10px", marginTop: "4px" }}>
              <label className="small" style={{ display: "flex", gap: "8px", alignItems: "center" }}><input type="checkbox" style={{ width: "auto" }} /> Auto insurance</label>
              <label className="small" style={{ display: "flex", gap: "8px", alignItems: "center" }}><input type="checkbox" style={{ width: "auto" }} /> Medicare</label>
              <label className="small" style={{ display: "flex", gap: "8px", alignItems: "center" }}><input type="checkbox" style={{ width: "auto" }} /> ACA</label>
              <label className="small" style={{ display: "flex", gap: "8px", alignItems: "center" }}><input type="checkbox" style={{ width: "auto" }} /> Final expense</label>
            </div>
          </div>
          <div className="field full"><label htmlFor="p-refs">Existing network references</label>
            <textarea id="p-refs" placeholder="Networks you currently or previously ran with, and a contact if available. Optional but speeds review."></textarea>
          </div>
          <div className="full">
            <label className="small" style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--text-2)", marginBottom: "16px" }}>
              <input type="checkbox" required style={{ width: "auto", marginTop: "4px" }} />
              I've read the <a href="/publishers/requirements">network requirements</a> and can evidence consent for all traffic I send.
            </label>
            <button className="btn btn-primary btn-lg" type="submit">Submit application</button>
          </div>
          <div className="form-success full">Application received. Expect a written answer in 2–3 business days. <em>(Demo form — no backend wired yet.)</em></div>
        </form>
        <p className="form-note">Review timeline: 2–3 business days for complete applications. Approval is per-vertical; you can request additional verticals later from the portal.</p>
      </div>
    </div>
  </section>
    </>
  );
}
