import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteFx from "@/components/SiteFx";

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
    "Close Crew connects advertisers to high-intent consumers through a trusted publisher network, powered by Pay Per Call, AI Automation, and Digital Marketing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kumbh.variable} ${clash.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteFx />
      </body>
    </html>
  );
}
