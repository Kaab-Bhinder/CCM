import { CONTACT } from "@/lib/site";

const BASE = "https://www.closecrewmarketing.com";

/* JSON-LD so Google understands who Close Crew is: name, logo, contact
   details, and services. Feeds the knowledge panel and rich results. */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "Close Crew",
        alternateName: "Close Crew Marketing",
        url: BASE,
        logo: { "@type": "ImageObject", url: `${BASE}/icon.svg`, width: 512, height: 512 },
        description:
          "Close Crew is a performance marketing network connecting advertisers to high-intent consumers through a vetted publisher network — powered by Pay Per Call, AI Automation, and Digital Marketing.",
        email: CONTACT.email,
        telephone: CONTACT.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "804 Boulders Springs Drive",
          addressLocality: "Richmond",
          addressRegion: "VA",
          postalCode: "23225",
          addressCountry: "US",
        },
        sameAs: [CONTACT.linkedin],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: CONTACT.phone,
            email: CONTACT.email,
            contactType: "sales",
            areaServed: "US",
            availableLanguage: "English",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "Close Crew",
        publisher: { "@id": `${BASE}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        name: "Pay Per Call",
        url: `${BASE}/services/pay-per-call`,
        provider: { "@id": `${BASE}/#organization` },
        description:
          "Performance-based call campaigns that connect advertisers directly with consumers ready to buy.",
        areaServed: "US",
      },
      {
        "@type": "Service",
        name: "AI Automation",
        url: `${BASE}/services/ai-automation`,
        provider: { "@id": `${BASE}/#organization` },
        description:
          "AI-driven matching, scoring, and optimization that gets every lead to the right partner, faster.",
        areaServed: "US",
      },
      {
        "@type": "Service",
        name: "Digital Marketing",
        url: `${BASE}/services/digital-marketing`,
        provider: { "@id": `${BASE}/#organization` },
        description:
          "Full-funnel campaigns that drive qualified traffic into the network from day one.",
        areaServed: "US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
