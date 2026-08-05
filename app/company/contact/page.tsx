import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Close Crew to talk about advertising, publishing, or enterprise partnerships.",
};

const CALENDLY_URL = "https://calendly.com/iamwahajshah/partnering-for-success";

export default function Page() {
  return (
    <>
      {/* Hero — paper, breadcrumb pill, old-site title/description */}
      <PageBanner crumb="CONTACT US" title="Let&apos;s Talk Business" desc={<>Whether you&apos;re looking to scale advertiser demand, grow as a publisher, or explore an enterprise partnership, we&apos;re ready to talk about what fits your goals.</>} />

      {/* Photo + message form */}
      <section className="section contact-main">
        <div className="container contact-grid">
          <div className="contact-photo">
            <span className="cp-blob cp-top" aria-hidden="true"></span>
            <span className="cp-blob cp-bottom" aria-hidden="true"></span>
            <span className="ph-hint"><span className="glyph">🖼</span>images/hero-1.jpg</span>
            <SmartImage src="/images/hero-1.jpg" alt="Close Crew team reviewing a campaign" />
          </div>
          <div className="contact-form-col">
            <h2>Send Us a Message</h2>
            <p className="cf-sub">Tell us what you&apos;re trying to do — a real person replies within one business day.</p>
            <div className="cf-card">
              <form className="js-demo-form" action="#" method="post">
                <label htmlFor="cf-name">Name*</label>
                <input id="cf-name" type="text" placeholder="First Name" required />
                <label htmlFor="cf-mail">Your E-Mail*</label>
                <input id="cf-mail" type="email" placeholder="Enter E-Mail" required />
                <label htmlFor="cf-msg">Comment*</label>
                <textarea id="cf-msg" placeholder="Write Comment" required></textarea>
                <button className="btn btn-primary btn-round cf-submit" type="submit">Submit Now</button>
                <div className="form-success">Received — we&apos;ll reply within one business day. <em>(Demo form — no backend wired yet.)</em></div>
              </form>
            </div>
            <p className="cf-note">Publisher looking to join the network? <a href="/publishers/apply">Apply directly →</a></p>
          </div>
        </div>
      </section>

      {/* Book a call — old-site Calendly */}
      <section className="book-strip">
        <div className="container book-inner">
          <div>
            <h2>Book a Call</h2>
            <p>Pick a time that works and let&apos;s talk partnerships live.</p>
          </div>
          <a className="btn btn-primary btn-lg btn-round" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Schedule on Calendly ↗
          </a>
        </div>
      </section>

      {/* Reach us directly — dark band, old-site details */}
      <section className="contact-band">
        <span className="cb-spark" aria-hidden="true">✳</span>
        <div className="container">
          <div className="grid cols-3 cb-grid">
            <a className="cb-card" href="mailto:contact@closecrewmarketing.com">
              <span className="cb-ic">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#171130" strokeWidth="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="3" /><path d="M3,6 l9,7 9,-7" /></svg>
              </span>
              <div>
                <span className="cb-label">Email Us</span>
                <span className="cb-value">contact@<wbr />closecrewmarketing.com</span>
              </div>
            </a>
            <a className="cb-card" href="https://www.linkedin.com/company/closecrewmarketing/" target="_blank" rel="noopener noreferrer">
              <span className="cb-ic">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#171130"><path d="M5 3.5A2 2 0 1 1 5 7.6a2 2 0 0 1 0-4.1zM3.2 9h3.6v12H3.2V9zm6 0h3.5v1.8h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.2V9z" /></svg>
              </span>
              <div>
                <span className="cb-label">LinkedIn</span>
                <span className="cb-value">closecrewmarketing</span>
              </div>
            </a>
            <div className="cb-card">
              <span className="cb-ic">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#171130" strokeWidth="1.8"><path d="M12 21s-7-6.5-7-11.5a7 7 0 0 1 14 0C19 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.6" /></svg>
              </span>
              <div>
                <span className="cb-label">Visit Us</span>
                <span className="cb-value">Lake Forest Drive, Round Rock, Texas 78665 USA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
