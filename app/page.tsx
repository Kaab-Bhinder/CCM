import type { Metadata } from "next";
import { Fragment } from "react";
import SmartImage from "@/components/SmartImage";
import ReadyBand from "@/components/ReadyBand";
import Testimonials from "@/components/Testimonials";
import data from "@/public/assets/data.json";
import Icon from "@/components/Icon";

// Services shown in the auto-scrolling marquee under the hero.
const MARQUEE_SERVICES = [
  "Pay Per Call",
  "AI Automation",
  "Digital Marketing",
  "Lead Generation",
  "Call Qualification",
  "Publisher Network",
  "Performance Marketing",
];

export const metadata: Metadata = {
  title: { absolute: "Close Crew — Performance Marketing Network" },
  description: "Close Crew connects advertisers to high-intent consumers through a trusted publisher network, powered by Pay Per Call, AI Automation, and Digital Marketing.",
};

export default function Page() {
  return (
    <>


  {/* 1. Hero — Dexon-style: centered display headline, side cards, decor */}
  <section className="hero hero-home hero-dexon">
    <div className="container hero-stage">

      {/* left card cluster (Canva asset, recolored purple) */}
      <img className="deco l-hero" src="/assets/l-herocard-purple.png" alt="" />

      {/* center */}
      <div className="hero-center">
        <h1>
          <span className="l1">
            Connecting Advertisers
            <span className="avatars" aria-hidden="true">
              <span className="avatar"><SmartImage src="/images/avatar-1.jpg" alt="" /></span>
              <span className="avatar"><SmartImage src="/images/avatar-2.jpg" alt="" /></span>
              <span className="avatar"><SmartImage src="/images/avatar-3.jpg" alt="" /></span>
            </span>
          </span>
          <span className="l2">
            <span className="pill-arrow">
              <span className="sp">✦</span>
              <svg viewBox="0 0 44 12" width="44" height="12" className="arr" aria-hidden="true"><path d="M0,6 H40 M33,1 L41,6 L33,11" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            </span>
            to High-Intent Consumers
          </span>
        </h1>
        <div className="rule-arrow" aria-hidden="true"></div>
        <p className="lead">A performance marketing network built on Pay Per Call, AI Automation, and Digital Marketing — matching advertisers with vetted publishers who deliver real results.</p>
        <a className="btn-ink" href="/company/contact">Get started <span className="up">↗</span></a>
      </div>

      {/* dashed loop arrow + right card cluster (Canva assets) */}
      <img className="deco arrow-loop" src="/assets/arrow.png" alt="" />
      <a className="deco r-hero" href="/resources/case-studies" aria-label="Get to know our work">
        <img src="/assets/r-herocard-purple.png" alt="" />
      </a>
    </div>
    <span className="edge-chip" aria-hidden="true">✳</span>
  </section>

  {/* 4. Core services — scribble heading + white cards on warm paper */}
  <section className="section services-paper">
    <div className="container">
      <div className="svc-head">
        <h2 className="svc-title">
          <img className="svc-scribble" src="/assets/border.png" alt="" />
          Growing your Revenue<br />using Close Crew Services
        </h2>
        <img className="svc-spark" src="/assets/flower1-purple.png" alt="" aria-hidden="true" />
      </div>
      <div className="grid cols-3 svc-grid">
        <a className="svc-card" href="/services/pay-per-call">
          <span className="svc-icon"><span className="fallback"><Icon name="phone" size={70} /></span><SmartImage src="/assets/s2.png" alt="" /></span>
          <h3>Pay Per Call</h3>
          <p>Performance-based call campaigns that connect advertisers directly with consumers ready to buy.</p>
        </a>
        <a className="svc-card" href="/services/ai-automation">
          <span className="svc-icon"><span className="fallback"><Icon name="layers" size={70} /></span><SmartImage src="/assets/s1.png" alt="" /></span>
          <h3>AI Automation</h3>
          <p>AI-driven matching, scoring, and optimization that gets every lead to the right partner, faster.</p>
        </a>
        <a className="svc-card" href="/services/digital-marketing">
          <span className="svc-icon"><span className="fallback"><Icon name="trending" size={70} /></span><SmartImage src="/assets/s3.png" alt="" /></span>
          <h3>Digital Marketing</h3>
          <p>Full-funnel campaigns that drive qualified traffic into the network from day one.</p>
        </a>
      </div>
    </div>
  </section>

  {/* About + stats — quality pitch with collage (card1 asset) */}
  <section className="section about-paper">
    <span className="about-spark" aria-hidden="true">✳</span>
    <div className="container">
      <div className="about-grid">
        <div className="about-media">
          <img src="/assets/card1.png" alt="CCM network results collage" />
        </div>
        <div className="about-copy">
          <h2 className="about-title">How the Network Works</h2>
          <p className="about-lead">Close Crew sits at the center of a performance marketplace, matching advertiser demand with publisher supply in real time. Our AI-driven matching engine routes every call and lead to the partner best positioned to convert it — so advertisers get quality and publishers get paid for it.</p>
          <hr className="about-rule" />
          <ul className="about-checks">
            <li>TCPA &amp; DNC compliant infrastructure, built in</li>
            <li>Real-time tracking with API integrations for your stack</li>
            <li>Vetted publisher network — reviewed and monitored</li>
            <li>National coverage, licensed across all 50 states</li>
          </ul>
          <a className="learn-more" href="/advertisers/lead-quality">Learn More <span>↗</span></a>
        </div>
      </div>
      <div className="about-stats">
        {data.stats.map((s) => (
          <div className="astat" key={s.label}><div className="n">{s.value}</div><div className="l">{s.label}</div></div>
        ))}
      </div>
    </div>
  </section>

  {/* Featured case studies — dark purple bento (Dexon layout, old-site content) */}
  <section className="section cases-dark">
    <svg className="cd-rings" viewBox="0 0 300 300" aria-hidden="true">
      <circle cx="220" cy="80" r="120" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.4" strokeDasharray="5 8" />
      <circle cx="150" cy="190" r="70" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1.4" strokeDasharray="5 8" />
    </svg>
    <div className="container">
      <div className="cases-grid">
        <div className="cases-col">
          <div className="cases-intro">
            <span className="intro-avatar">
              <svg className="rays" viewBox="0 0 40 30" aria-hidden="true"><path d="M6,26 L1,20 M12,12 L8,5 M22,8 L21,1" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" fill="none" /></svg>
              <SmartImage src="/images/avatar-1.jpg" alt="" />
            </span>
            <h2>Featured Case<br />Studies</h2>
            <img className="cases-spark" src="/assets/flower1.png" alt="" aria-hidden="true" />
            <p>Real network performance, by the numbers.</p>
          </div>
          <article className="ccard ccard-lav">
            <span className="tag">Auto Insurance</span>
            <h3>22% Lower Cost Per Qualified Call</h3>
            <p>State-level filtering and buffer tuning brought acquisition cost down while volume held steady.</p>
            <a className="read-more" href="/resources/case-studies">Read More <span>↗</span></a>
            <div className="mock-list" aria-hidden="true">
              <div className="mrow"><span className="mic mic-p">✆</span><span className="mlines"><i /><i /></span><span className="mpill mp-lav" /></div>
              <div className="mrow"><span className="mic mic-g">✆</span><span className="mlines"><i /><i /></span><span className="mpill mp-gray" /></div>
              <div className="mrow"><span className="mic mic-c">✆</span><span className="mlines"><i /><i /></span><span className="mpill mp-cyan" /></div>
            </div>
          </article>
        </div>
        <div className="cases-col">
          <article className="ccard ccard-mint">
            <span className="tag">Medicare</span>
            <h3>Doubled Publisher Base in Six Months</h3>
            <p>Expanding a Medicare advertiser's supply without loosening the quality bar.</p>
            <a className="read-more" href="/resources/case-studies">Read More <span>↗</span></a>
            <div className="mock-wave" aria-hidden="true">
              <svg viewBox="0 0 520 150" preserveAspectRatio="none"><path d="M0,90 C90,30 180,120 300,70 C390,35 460,60 520,30 L520,150 L0,150 Z" fill="#fff" /></svg>
              <svg className="dash-line" viewBox="0 0 300 60" aria-hidden="true"><path d="M10,50 h150 v-30 h80 M240,20 l14,0 M247,13 l0,14" stroke="#9AA5A0" strokeWidth="1.6" strokeDasharray="4 6" fill="none" /><circle cx="10" cy="50" r="5" fill="none" stroke="#9AA5A0" strokeWidth="1.6" /></svg>
              <span className="chart-dot"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M4,20 V12 M10,20 V7 M16,20 V10 M20,4 l-4,1 M20,4 l-1,4 M20,4 L13,11" stroke="#171130" strokeWidth="2" fill="none" strokeLinecap="round" /></svg></span>
            </div>
          </article>
          <article className="ccard ccard-white">
            <span className="tag">Final Expense</span>
            <h3>88% Call Qualification Rate</h3>
            <p>Tightening call verification to deliver consistently sales-ready conversations.</p>
            <a className="read-more" href="/resources/case-studies">Read More <span>↗</span></a>
            <div className="mock-bars" aria-hidden="true">
              <span className="bar b1"><i /></span>
              <span className="bar b2"><i /></span>
              <span className="bar b3"><i /></span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  {/* 2. Two-door audience split */}
  <section className="section">
    <div className="container">
      <div className="two-door">
        <div className="door">
          <span className="eyebrow">For Advertisers</span>
          <h3>Buy qualified calls and leads</h3>
          <p>Get connected with vetted publishers delivering qualified, high-intent calls and leads across your target verticals.</p>
          <ul>
            <li>Pay only for billable, qualified events</li>
            <li>Vetted traffic with full source disclosure</li>
            <li>TCPA-aware consent capture and audit trail</li>
          </ul>
          <div className="cta-row">
            <a className="btn btn-primary" href="/advertisers">Explore advertiser solutions</a>
            <a className="btn btn-ghost" href="/advertisers/how-it-works">How it works →</a>
          </div>
        </div>
        <div className="door">
          <span className="eyebrow">For Publishers</span>
          <h3>Monetize traffic with vetted offers</h3>
          <p>Monetize your traffic with premium advertiser offers, transparent payouts, and real-time performance data.</p>
          <ul>
            <li>Live campaigns across four insurance verticals</li>
            <li>Transparent payout terms, published openly</li>
            <li>Real-time reporting and dedicated support</li>
          </ul>
          <div className="cta-row">
            <a className="btn btn-primary" href="/publishers/apply">Apply to the network</a>
            <a className="btn btn-ghost" href="/publishers/campaigns">See campaigns →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Testimonials heading="What Our Partners Say" sub="Real relationships on both sides of the network — advertisers buying quality and publishers getting paid for it." start={0} count={6} perView={3} />

  {/* Network reach — circle collage (old-site audience overview data) */}
  <section className="section channels-sec">
    <div className="container channels-grid">
      <div className="channels-copy">
        <h2>Built for Every Side<br />of the Network</h2>
        <p>Whichever seat you're in, we've built the infrastructure to help you win — advertisers, publishers, and enterprise partners.</p>
        <div className="ch-stats">
          <div className="chstat"><span className="n">22%</span><span className="l">Lower cost per<br />qualified call</span></div>
          <div className="chstat"><span className="n">2x</span><span className="l">Publisher base<br />growth</span></div>
        </div>
        <a className="learn-more" href="/advertisers">Learn More <span>↗</span></a>
      </div>
      <div className="circle-asset">
        <img src="/assets/card2.png" alt="Close Crew network highlights" />
      </div>
    </div>
  </section>

  <ReadyBand />

    </>
  );
}
