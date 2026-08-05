/* ============================================================
   CCM — site-wide navigation & footer data.
   Edit navigation and footer links HERE, in one place.
   ============================================================ */

// Utility-bar contact info — REPLACE with real details (shown on every page).
export const CONTACT = {
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "contact@closecrewmarketing.com",
  address: "Lake Forest Drive, Round Rock, Texas 78665 USA",
};

// Social links — point at real profiles (utility bar, every page).
export const SOCIALS: { label: string; href: string }[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/closecrewmarketing/" },
  { label: "X", href: "#" },
];

export type NavChild = { label: string; href: string; external?: boolean } | { sep: true };

export type NavItem = {
  key: string;
  label: string;
  href: string;
  children?: NavChild[];
};

// Navigation mirrors the previous Close Crew site, mapped onto this build's routes.
export const NAV: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "solutions",
    label: "Solutions",
    href: "/advertisers",
    children: [
      { label: "Advertisers", href: "/advertisers" },
      { label: "Publishers", href: "/publishers" },
      { label: "Enterprise Partnerships", href: "/company/enterprise-partnerships" },
    ],
  },
  {
    key: "services",
    label: "Services",
    href: "/services",
    children: [
      { label: "Pay Per Call", href: "/services/pay-per-call" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    key: "industries",
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Overview", href: "/industries" },
      { label: "Auto Insurance", href: "/industries/auto-insurance" },
      { label: "Medicare", href: "/industries/medicare" },
      { label: "ACA", href: "/industries/aca" },
      { label: "Final Expense", href: "/industries/final-expense" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Insights", href: "/resources/insights" },
      { label: "Compliance", href: "/compliance" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
  {
    key: "company",
    label: "Company",
    href: "/company/about",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Partners", href: "/company/partners" },
    ],
  },
  { key: "contact", label: "Contact", href: "/company/contact" },
];

export const FOOTER_COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "For advertisers", href: "/advertisers" },
      { label: "For publishers", href: "/publishers" },
      { label: "Lead quality", href: "/advertisers/lead-quality" },
      { label: "Pricing", href: "/advertisers/pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Pay per call", href: "/services/pay-per-call" },
      { label: "AI automation", href: "/services/ai-automation" },
      { label: "Digital marketing", href: "/services/digital-marketing" },
      { label: "Integrations", href: "/advertisers/integrations" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Auto insurance", href: "/industries/auto-insurance" },
      { label: "Medicare", href: "/industries/medicare" },
      { label: "ACA", href: "/industries/aca" },
      { label: "Final expense", href: "/industries/final-expense" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case studies", href: "/resources/case-studies" },
      { label: "Insights", href: "/resources/insights" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Glossary", href: "/resources/glossary" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Enterprise partnerships", href: "/company/enterprise-partnerships" },
      { label: "Partners", href: "/company/partners" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/company/contact" },
      { label: "Advertiser login", href: "/portal" },
      { label: "Publisher login", href: "/portal" },
      { label: "Apply as publisher", href: "/publishers/apply" },
    ],
  },
];

export const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Privacy policy", href: "/legal/privacy-policy" },
  { label: "Terms of service", href: "/legal/terms" },
  { label: "Publisher agreement", href: "/legal/publisher-agreement" },
  { label: "Advertiser terms", href: "/legal/advertiser-terms" },
  { label: "Consent & disclosure policy", href: "/legal/consent-disclosure" },
  { label: "DNC policy", href: "/legal/dnc-policy" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];
