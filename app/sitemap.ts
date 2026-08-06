import type { MetadataRoute } from "next";

const BASE = "https://www.closecrewmarketing.com";

/* XML sitemap for search engines. The human-readable version lives at /sitemap. */
const ROUTES: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, freq: "weekly" },
  { path: "/advertisers", priority: 0.9, freq: "monthly" },
  { path: "/advertisers/how-it-works", priority: 0.7, freq: "monthly" },
  { path: "/advertisers/lead-quality", priority: 0.8, freq: "monthly" },
  { path: "/advertisers/case-studies", priority: 0.6, freq: "monthly" },
  { path: "/publishers", priority: 0.9, freq: "monthly" },
  { path: "/publishers/campaigns", priority: 0.7, freq: "weekly" },
  { path: "/publishers/requirements", priority: 0.6, freq: "monthly" },
  { path: "/publishers/apply", priority: 0.8, freq: "monthly" },
  { path: "/services", priority: 0.9, freq: "monthly" },
  { path: "/services/pay-per-call", priority: 0.9, freq: "monthly" },
  { path: "/services/ai-automation", priority: 0.9, freq: "monthly" },
  { path: "/services/digital-marketing", priority: 0.9, freq: "monthly" },
  { path: "/industries", priority: 0.8, freq: "monthly" },
  { path: "/industries/auto-insurance", priority: 0.8, freq: "monthly" },
  { path: "/industries/medicare", priority: 0.8, freq: "monthly" },
  { path: "/industries/aca", priority: 0.8, freq: "monthly" },
  { path: "/industries/final-expense", priority: 0.8, freq: "monthly" },
  { path: "/compliance", priority: 0.7, freq: "monthly" },
  { path: "/compliance/consent", priority: 0.5, freq: "yearly" },
  { path: "/compliance/publisher-vetting", priority: 0.5, freq: "yearly" },
  { path: "/compliance/privacy", priority: 0.5, freq: "yearly" },
  { path: "/resources", priority: 0.6, freq: "monthly" },
  { path: "/resources/case-studies", priority: 0.7, freq: "monthly" },
  { path: "/resources/insights", priority: 0.6, freq: "weekly" },
  { path: "/resources/faqs", priority: 0.7, freq: "monthly" },
  { path: "/company/about", priority: 0.7, freq: "monthly" },
  { path: "/company/partners", priority: 0.6, freq: "monthly" },
  { path: "/company/enterprise-partnerships", priority: 0.7, freq: "monthly" },
  { path: "/company/contact", priority: 0.8, freq: "monthly" },
  { path: "/sitemap", priority: 0.3, freq: "monthly" },
  { path: "/legal/privacy-policy", priority: 0.3, freq: "yearly" },
  { path: "/legal/terms", priority: 0.3, freq: "yearly" },
  { path: "/legal/publisher-agreement", priority: 0.3, freq: "yearly" },
  { path: "/legal/advertiser-terms", priority: 0.3, freq: "yearly" },
  { path: "/legal/consent-disclosure", priority: 0.3, freq: "yearly" },
  { path: "/legal/dnc-policy", priority: 0.3, freq: "yearly" },
  { path: "/legal/accessibility", priority: 0.3, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
