/* ============================================================
   CCM — Shared site chrome
   Renders the header (utility bar + nav) and footer on every
   page. Edit navigation and footer links HERE, in one place.
   Each page sets <body data-root="../"> so links resolve from
   any folder depth (works on file:// and any static server).
   ============================================================ */

(function () {
  "use strict";

  var body = document.body;
  var root = body.getAttribute("data-root") || "";
  var section = body.getAttribute("data-section") || "";

  /* ---------- Logo (recreated from brand mark — swap for the
     real SVG at assets/img/logo.svg when available) ---------- */
  var LOGO =
    '<svg viewBox="0 0 430 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CCM">' +
    '<defs><linearGradient id="ccmg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="430" y2="160">' +
    '<stop offset="0" stop-color="#FFFFFF"/><stop offset=".38" stop-color="#DCD2FF"/>' +
    '<stop offset=".68" stop-color="#A78BFA"/><stop offset="1" stop-color="#6D28D9"/>' +
    "</linearGradient></defs>" +
    '<g fill="url(#ccmg)" stroke="#0A0711" stroke-width="7" paint-order="stroke">' +
    '<path d="M150,4 L80,4 A76,76 0 0 0 80,156 L150,156 L150,122 L80,122 A42,42 0 0 1 80,38 L150,38 Z"/>' +
    '<path d="M262,4 L192,4 A76,76 0 0 0 192,156 L262,156 L262,122 L192,122 A42,42 0 0 1 192,38 L262,38 Z"/>' +
    '<path d="M254,156 L254,4 L288,4 L332,66 L376,4 L410,4 L410,156 L376,156 L376,62 L332,124 L288,62 L288,156 Z"/>' +
    "</g></svg>";

  /* ---------- Navigation data ---------- */
  // Login/portal links point at portal.html until real portal URLs exist.
  var NAV = [
    {
      key: "advertisers", label: "Advertisers", href: "advertisers/index.html",
      children: [
        { label: "Overview", href: "advertisers/index.html" },
        { label: "How it works", href: "advertisers/how-it-works.html" },
        { label: "Lead & call quality", href: "advertisers/lead-quality.html" },
        { label: "Pricing model", href: "advertisers/pricing.html" },
        { label: "Integrations", href: "advertisers/integrations.html" },
        { label: "Case studies", href: "advertisers/case-studies.html" }
      ]
    },
    {
      key: "publishers", label: "Publishers", href: "publishers/index.html",
      children: [
        { label: "Overview", href: "publishers/index.html" },
        { label: "Campaign categories", href: "publishers/campaigns.html" },
        { label: "Payouts & terms", href: "publishers/payouts.html" },
        { label: "Requirements", href: "publishers/requirements.html" },
        { label: "Apply", href: "publishers/apply.html" },
        { sep: true },
        { label: "Publisher login", href: "portal.html", external: true }
      ]
    },
    {
      key: "services", label: "Services", href: "services/index.html",
      children: [
        { label: "Pay per call", href: "services/pay-per-call.html" },
        { label: "AI automation", href: "services/ai-automation.html" },
        { label: "Digital marketing", href: "services/digital-marketing.html" },
        { label: "Integrations", href: "advertisers/integrations.html" }
      ]
    },
    {
      key: "industries", label: "Industries", href: "industries/index.html",
      children: [
        { label: "Overview", href: "industries/index.html" },
        { label: "Auto insurance", href: "industries/auto-insurance.html" },
        { label: "Medicare", href: "industries/medicare.html" },
        { label: "ACA", href: "industries/aca.html" },
        { label: "Final expense", href: "industries/final-expense.html" }
      ]
    },
    {
      key: "compliance", label: "Trust & Compliance", href: "compliance/index.html",
      children: [
        { label: "Compliance framework", href: "compliance/index.html" },
        { label: "Consent & TCPA practices", href: "compliance/consent.html" },
        { label: "Publisher vetting", href: "compliance/publisher-vetting.html" },
        { label: "Lead & call quality", href: "advertisers/lead-quality.html" },
        { label: "Data & privacy", href: "compliance/privacy.html" }
      ]
    },
    {
      key: "resources", label: "Resources", href: "resources/index.html",
      children: [
        { label: "Case studies", href: "resources/case-studies.html" },
        { label: "Insights", href: "resources/insights.html" },
        { label: "FAQs", href: "resources/faqs.html" },
        { label: "Glossary", href: "resources/glossary.html" }
      ]
    },
    {
      key: "company", label: "Company", href: "company/about.html",
      children: [
        { label: "About", href: "company/about.html" },
        { label: "Enterprise partnerships", href: "company/enterprise-partnerships.html" },
        { label: "Partners", href: "company/partners.html" },
        { label: "Careers", href: "company/careers.html" },
        { label: "Contact", href: "company/contact.html" }
      ]
    }
  ];

  var CARET =
    '<svg class="caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">' +
    '<path d="M1 1l4 4 4-4" stroke="currentColor" fill="none" stroke-width="1.6" stroke-linecap="round"/></svg>';

  /* ---------- Header ---------- */
  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;

    var navItems = NAV.map(function (item) {
      var drop = item.children.map(function (c) {
        if (c.sep) return '<div class="sep"></div>';
        return '<a href="' + root + c.href + '"' + (c.external ? ' class="external"' : "") + ">" + c.label + "</a>";
      }).join("");
      var active = section === item.key ? " active" : "";
      return (
        '<div class="nav-item' + active + '">' +
        '<a href="' + root + item.href + '">' + item.label + CARET + "</a>" +
        '<div class="dropdown">' + drop + "</div>" +
        "</div>"
      );
    }).join("");

    el.innerHTML =
      '<div class="utility-bar"><div class="container">' +
      '<a href="' + root + 'portal.html">Publisher login</a>' +
      '<a href="' + root + 'portal.html">Advertiser login</a>' +
      '<a class="btn btn-primary" href="' + root + 'company/contact.html">Get started</a>' +
      "</div></div>" +
      '<header class="site-header"><div class="container">' +
      '<a class="logo" href="' + root + 'index.html" aria-label="CCM home">' + LOGO + "</a>" +
      '<nav class="main-nav" id="main-nav" aria-label="Primary">' + navItems + "</nav>" +
      '<button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>' +
      "</div></header>";

    // Mobile behavior: hamburger opens panel; parent links toggle their submenu.
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("main-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var mq = window.matchMedia("(max-width: 980px)");
    nav.querySelectorAll(".nav-item > a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (mq.matches) {
          e.preventDefault();
          a.parentElement.classList.toggle("open");
        }
      });
    });
  }

  /* ---------- Footer ---------- */
  var FOOTER_COLS = [
    { title: "Solutions", links: [
      { label: "For advertisers", href: "advertisers/index.html" },
      { label: "For publishers", href: "publishers/index.html" },
      { label: "Lead quality", href: "advertisers/lead-quality.html" },
      { label: "Pricing", href: "advertisers/pricing.html" }
    ]},
    { title: "Services", links: [
      { label: "Pay per call", href: "services/pay-per-call.html" },
      { label: "AI automation", href: "services/ai-automation.html" },
      { label: "Digital marketing", href: "services/digital-marketing.html" },
      { label: "Integrations", href: "advertisers/integrations.html" }
    ]},
    { title: "Industries", links: [
      { label: "Auto insurance", href: "industries/auto-insurance.html" },
      { label: "Medicare", href: "industries/medicare.html" },
      { label: "ACA", href: "industries/aca.html" },
      { label: "Final expense", href: "industries/final-expense.html" }
    ]},
    { title: "Resources", links: [
      { label: "Case studies", href: "resources/case-studies.html" },
      { label: "Insights", href: "resources/insights.html" },
      { label: "FAQs", href: "resources/faqs.html" },
      { label: "Glossary", href: "resources/glossary.html" }
    ]},
    { title: "Company", links: [
      { label: "About", href: "company/about.html" },
      { label: "Enterprise partnerships", href: "company/enterprise-partnerships.html" },
      { label: "Partners", href: "company/partners.html" },
      { label: "Careers", href: "company/careers.html" }
    ]},
    { title: "Connect", links: [
      { label: "Contact", href: "company/contact.html" },
      { label: "Advertiser login", href: "portal.html" },
      { label: "Publisher login", href: "portal.html" },
      { label: "Apply as publisher", href: "publishers/apply.html" }
    ]}
  ];

  var LEGAL_LINKS = [
    { label: "Privacy policy", href: "legal/privacy-policy.html" },
    { label: "Terms of service", href: "legal/terms.html" },
    { label: "Publisher agreement", href: "legal/publisher-agreement.html" },
    { label: "Advertiser terms", href: "legal/advertiser-terms.html" },
    { label: "Consent & disclosure policy", href: "legal/consent-disclosure.html" },
    { label: "DNC policy", href: "legal/dnc-policy.html" },
    { label: "Accessibility", href: "legal/accessibility.html" },
    { label: "Sitemap", href: "sitemap.html" }
  ];

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;

    var cols = FOOTER_COLS.map(function (col) {
      var links = col.links.map(function (l) {
        return "<li><a href=\"" + root + l.href + "\">" + l.label + "</a></li>";
      }).join("");
      return '<div class="footer-col"><h4>' + col.title + "</h4><ul>" + links + "</ul></div>";
    }).join("");

    var legal = LEGAL_LINKS.map(function (l) {
      return '<a href="' + root + l.href + '">' + l.label + "</a>";
    }).join("");

    el.innerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' + cols + "</div>" +
      '<div class="footer-brand">' + LOGO +
      "<p>Performance marketing that connects advertisers with high-intent consumers.</p></div>" +
      '<div class="legal-row">' + legal +
      '<span style="margin-left:auto">© <span id="y"></span> CCM. All rights reserved.</span></div>' +
      "</div></footer>";

    document.getElementById("y").textContent = new Date().getFullYear();
  }

  /* ---------- Favicon ---------- */
  function setFavicon() {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#C4B5FD"/><stop offset="1" stop-color="#6D28D9"/></linearGradient></defs>' +
      '<rect width="64" height="64" rx="14" fill="#0A0711"/>' +
      '<path d="M44,12 L26,12 A20,20 0 0 0 26,52 L44,52 L44,42 L26,42 A10,10 0 0 1 26,22 L44,22 Z" fill="url(#g)"/></svg>';
    var link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = "data:image/svg+xml," + encodeURIComponent(svg);
    document.head.appendChild(link);
  }

  /* ---------- Demo forms (no backend wired yet) ---------- */
  function initForms() {
    document.querySelectorAll("form.js-demo-form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var ok = form.querySelector(".form-success");
        if (ok) ok.style.display = "block";
        form.querySelectorAll("input, select, textarea, button").forEach(function (f) {
          f.disabled = true;
        });
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    var targets = document.querySelectorAll(".card, .step, .stat, .door, .spotlight");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) {
      t.classList.add("reveal");
      io.observe(t);
    });
  }

  renderHeader();
  renderFooter();
  setFavicon();
  initForms();
  initReveal();
})();
