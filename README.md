# CCM Website — Next.js

Marketing site for CCM (performance marketing marketplace), built from the v2 information architecture. Next.js 15 (App Router, TypeScript, React 19), dark theme with the purple-gradient CCM brand. All 44 routes are statically prerendered.

## Run it

```bash
npm install        # first time only
npm run dev        # development → http://localhost:3000
npm run build      # production build (all pages static)
npm run start      # serve the production build
```

## Structure

```
app/
  layout.tsx            Root layout: Header + <main> + Footer + SiteFx, metadata template
  globals.css           Entire design system — edit brand tokens in :root
  icon.svg              Favicon (C-mark)
  page.tsx              Home (8 sections per IA spec)
  portal/               Login router placeholder (point buttons at real portal URLs)
  sitemap/              Human-readable sitemap page
  advertisers/          + how-it-works, lead-quality, pricing, integrations, case-studies
  publishers/           + campaigns, payouts, requirements, apply
  services/             + pay-per-call, ai-automation, digital-marketing
  industries/           + auto-insurance, medicare, aca, final-expense
  compliance/           + consent, publisher-vetting, privacy
  resources/            + case-studies, insights, faqs, glossary
  company/              about, enterprise-partnerships, partners, careers, contact
  legal/                7 individually-named legal scaffolds
components/
  Header.tsx            Utility bar + nav with dropdowns + mobile menu (client)
  Footer.tsx            6-column footer + individually-named legal row
  Logo.tsx              Recreated CCM mark (SVG) — swap for the original vector
  SiteFx.tsx            Demo-form handling + scroll-reveal, re-runs per route (client)
  CaseStudyFilter.tsx   Filter pills on /resources/case-studies (client)
  ContactTabs.tsx       Three-door router on /company/contact (client)
lib/
  site.ts               Nav + footer data — edit navigation HERE, one place
public/logo.svg         Standalone copy of the logo
next.config.ts          Redirects: /company → /company/about, /services/integrations → /advertisers/integrations
static-site-v1/         The original no-build HTML version, kept for reference (not part of the app)
```

## Conventions

- **Navigation/footer links** live in [lib/site.ts](lib/site.ts); Header/Footer render from it.
- **URLs** match the IA spec (`/advertisers/lead-quality`, `/industries/medicare`, …). `/services/integrations` redirects to `/advertisers/integrations` — one page, two nav entry points, per spec.
- **Page content** is JSX against the class system in `globals.css` (`.section`, `.card`, `.steps`, `.faq`, `.checklist`, `.stat-band`, `.two-door`, …). Pages are server components; interactivity comes from the small client components above.
- **Metadata** per page via `export const metadata` (title template `%s | CCM` in the layout).

## Placeholders to replace before launch

- Proof-band numbers on the homepage (marked with JSX comments) — real reporting or delete the band
- All six case studies (invented), leadership names/photos + trust signals on About, partner names
- Phone/email/address on Contact; portal button URLs on /portal
- Payout table values on /publishers/payouts — must match the real publisher agreement
- Legal pages are scaffolds; counsel must draft final text (notices embedded in each page)
- Forms are demo-only (`js-demo-form` → success note). Wire them to a real backend via a route handler or server action and remove the demo note
- Logo is a recreation — replace [components/Logo.tsx](components/Logo.tsx) paths and [public/logo.svg](public/logo.svg) with the original vector

## Brand tokens (app/globals.css `:root`)

| Token | Value | Use |
|---|---|---|
| `--purple` / `--purple-deep` | `#8B5CF6` / `#6D28D9` | Accent, buttons, gradient end |
| `--grad-brand` | white→lavender→purple | Logo, headline highlights, stat numbers |
| `--bg` / `--bg-alt` | `#0A0711` / `#0F0B1A` | Page / alternate sections |
| `--surface` / `--surface-2` | `#151021` / `#1C1530` | Cards / elevated surfaces |
| `--text` / `--text-2` / `--text-3` | light → muted | Type hierarchy |
# CCM
