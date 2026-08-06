import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // /company has no index page — About is the section landing.
      { source: "/company", destination: "/company/about", permanent: false },
      // Old Close Crew site URLs → new structure (bookmarks + SEO).
      { source: "/contact", destination: "/company/contact", permanent: true },
      // Removed sub-pages → their section landing
      { source: "/resources/glossary", destination: "/resources", permanent: false },
      { source: "/portal", destination: "/company/contact", permanent: false },
      { source: "/advertisers/pricing", destination: "/advertisers", permanent: false },
      { source: "/advertisers/integrations", destination: "/advertisers", permanent: false },
      { source: "/services/integrations", destination: "/services", permanent: false },
      { source: "/publishers/payouts", destination: "/publishers", permanent: false },
      { source: "/solutions", destination: "/advertisers", permanent: true },
      { source: "/solutions/advertisers", destination: "/advertisers", permanent: true },
      { source: "/solutions/publishers", destination: "/publishers", permanent: true },
      { source: "/solutions/enterprise-partnerships", destination: "/company/enterprise-partnerships", permanent: true },
      { source: "/resources/compliance", destination: "/compliance", permanent: true },
      { source: "/legal/privacy", destination: "/legal/privacy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
