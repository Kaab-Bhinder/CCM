import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteFx from "@/components/SiteFx";
import StructuredData from "@/components/StructuredData";

/* Self-hosted fonts: Kumbh Sans (body, variable) + Clash Display (headings). */
const kumbh = localFont({
  src: "./fonts/KumbhSans-Variable.woff2",
  weight: "100 900",
  variable: "--font-kumbh",
  display: "swap",
});
const clash = localFont({
  src: [
    { path: "./fonts/ClashDisplay-400.woff2", weight: "400" },
    { path: "./fonts/ClashDisplay-500.woff2", weight: "500" },
    { path: "./fonts/ClashDisplay-600.woff2", weight: "600" },
    { path: "./fonts/ClashDisplay-700.woff2", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Close Crew — Performance Marketing Network",
    template: "%s | Close Crew",
  },
  description:
    "Close Crew is a performance marketing network connecting advertisers with high-intent calls and leads through a vetted publisher network — Pay Per Call, AI Automation, and Digital Marketing across Auto Insurance, Medicare, ACA, and Final Expense.",
  metadataBase: new URL("https://www.closecrewmarketing.com"),
  alternates: { canonical: "/" },
  keywords: [
    "performance marketing", "pay per call", "publisher network",
    "AI automation", "lead generation", "insurance leads",
  ],
  openGraph: {
    type: "website",
    siteName: "Close Crew",
    locale: "en_US",
    url: "https://www.closecrewmarketing.com",
    title: "Close Crew — Performance Marketing Network",
    description:
      "Connecting advertisers to high-intent consumers through a vetted publisher network.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Close Crew — Performance Marketing Network",
    description:
      "Connecting advertisers to high-intent consumers through a vetted publisher network.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kumbh.variable} ${clash.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteFx />
        <StructuredData />
      </body>
    </html>
  );
}
