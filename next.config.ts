import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // /company has no index page — About is the section landing.
      { source: "/company", destination: "/company/about", permanent: false },
      // One integrations URL, two nav entry points (per IA spec).
      { source: "/services/integrations", destination: "/advertisers/integrations", permanent: false },
      // Old Close Crew site URLs → new structure (bookmarks + SEO).
      { source: "/contact", destination: "/company/contact", permanent: true },
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
