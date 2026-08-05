# CCM Website — Framework v1

Static site framework built from the v2 information architecture. Dark theme with the purple-gradient CCM brand. No build step, no dependencies.

## Run it

Open `index.html` directly in a browser, **or** serve the folder (recommended):

```bash
cd /home/kaab/Desktop/ccm
python3 -m http.server 8000
# → http://localhost:8000
```

## Structure

```
index.html                  Home (8 sections per IA spec)
portal.html                 Login router placeholder (point at real portal URLs)
sitemap.html                Human-readable sitemap
advertisers/                Overview, how-it-works, lead-quality, pricing, integrations, case-studies
publishers/                 Overview, campaigns, payouts, requirements, apply
services/                   Overview, pay-per-call, ai-automation, digital-marketing
                            (services→Integrations links to advertisers/integrations.html — one URL, two nav entries, per spec)
industries/                 Overview, auto-insurance, medicare, aca, final-expense
compliance/                 Framework, consent, publisher-vetting, privacy
resources/                  Thin landing, case-studies (filterable), insights, faqs, glossary
company/                    About, enterprise-partnerships, partners, careers, contact (3-path router)
legal/                      7 individually-named legal scaffolds
assets/css/style.css        Entire design system (edit brand tokens in :root)
assets/js/main.js           Header/nav/footer rendered from ONE place + mobile menu, forms, reveal
assets/img/logo.svg         Recreated CCM mark — replace with the original vector file
```

## How the shared chrome works

Every page contains `<div id="site-header"></div>` and `<div id="site-footer"></div>`; `assets/js/main.js` renders the utility bar, nav (with dropdowns + mobile menu), and the 6-column footer + legal row into them. **To change navigation or footer links, edit `main.js` only.** Each page declares its depth via `<body data-root="../">` so links work from any folder, on `file://` or any server.

## Placeholders to replace before launch

- **Proof-band numbers** on the homepage (marked with HTML comments) — use real reporting or delete the band
- **Case studies** — all six are invented; swap in client-approved stories
- **Leadership names/photos, trust signals** on `company/about.html`
- **Partner names** on `company/partners.html`; platform lists on integrations
- **Phone/email/address** on `company/contact.html`
- **Payout table values** on `publishers/payouts.html` — must match the real publisher agreement
- **Legal pages** — scaffolds only; counsel must draft final text (notices embedded in each file)
- **Compliance pages** — counsel review + recurring review date (comments embedded)
- **Portal links** — `portal.html` buttons point at `#`; set real portal URLs
- **Forms** — demo-only (`js-demo-form` shows a success note); wire `action` to a real backend/CRM and remove the demo note
- **Logo** — `assets/img/logo.svg` and the inline copy in `main.js` are recreations; drop in the original vector

## Brand tokens (assets/css/style.css `:root`)

| Token | Value | Use |
|---|---|---|
| `--purple` | `#8B5CF6` | Primary accent |
| `--purple-deep` | `#6D28D9` | Gradient end, buttons |
| `--grad-brand` | white→lavender→purple | Logo, headline highlights, stat numbers |
| `--bg` / `--bg-alt` | `#0A0711` / `#0F0B1A` | Page / alternate sections |
| `--surface` / `--surface-2` | `#151021` / `#1C1530` | Cards / elevated |
| `--text` / `--text-2` / `--text-3` | light→muted | Type hierarchy |

## IA compliance notes

- Advertisers & Publishers are top-level nav; login links in the utility bar on every page
- Publishers get an application (`publishers/apply.html`) + login, not a contact form; contact page's publisher tab redirects to the application
- Payout terms are published, not gated
- Compliance is top-level, reachable without Resources; compliance pages carry a single "talk to us" CTA and no sales copy
- Every legal document is individually named in the footer legal row
- Cross-linking rules implemented: services ↔ industries both directions, advertiser pages → lead-quality/compliance, case studies → service + industry
