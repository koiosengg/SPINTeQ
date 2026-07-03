# Koiostudio — Web Project Master Guide
### SEO, Performance, Google Tag Manager & Production Checklist

> **Version:** 1.1 | **Author:** Koiostudio  
> **Applies to:** All React / Vite SPA Projects  
> **Use this document:** When starting fresh, mid-project, or auditing any existing site.

---

## TABLE OF CONTENTS

1. [Project Setup Foundations](#1-project-setup-foundations)
2. [The index.html Template](#2-the-indexhtml-template)
3. [SEO Essentials](#3-seo-essentials)
4. [Google Tag Manager (GTM) Integration](#4-google-tag-manager-gtm-integration)
5. [Structured Data / JSON-LD Schemas](#5-structured-data--json-ld-schemas)
6. [Routing — 404, Redirects & Canonical URLs](#6-routing--404-redirects--canonical-urls)
7. [Responsive Design Breakpoints](#7-responsive-design-breakpoints)
8. [External Link Security](#8-external-link-security)
9. [Crawler Fallback Content](#9-crawler-fallback-content)
10. [Sitemap, Robots.txt & LLMs.txt](#10-sitemap-robotstxt--llmstxt)
11. [Vercel Deployment Config](#11-vercel-deployment-config)
12. [Google Ads Compliance Checklist](#12-google-ads-compliance-checklist)
13. [Code Quality Checklist](#13-code-quality-checklist)
14. [Final Pre-Launch Checklist](#14-final-pre-launch-checklist)

---

## 1. Project Setup Foundations

### Tech Stack Defaults (Koiostudio)
| Layer | Choice |
|---|---|
| Framework | React 19 + Vite |
| Routing | React Router DOM v7 |
| Styling | Vanilla CSS (no Tailwind) |
| Fonts | Google Fonts (Plus Jakarta Sans preferred) |
| Deployment | Vercel |
| Analytics | Google Tag Manager (GTM) |

### Folder Structure (must follow)
```
/src
  /assets           → images, videos, svgs
  /components       → all UI components
  /structured-data  → schemas.js + index.jsx
  App.jsx           → all route definitions
  main.jsx          → app entry point

/public
  robots.txt
  sitemap.xml
  llms.txt          → for AI crawlers (optional but recommended)
  Logo.png

index.html          → THE most important file for SEO
style.css           → single global stylesheet
vercel.json         → deployment config
```

---

## 2. The index.html Template

This is the **single most important SEO file** in any SPA. Follow this order **exactly**.

```html
<!doctype html>
<html lang="en">

<head>
  <!-- ✅ STEP 1: Charset always first -->
  <meta charset="UTF-8" />

  <!-- ✅ STEP 2: Viewport always second -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- ✅ STEP 3: GTM preconnect BEFORE the GTM script (reduces latency) -->
  <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />

  <!-- ✅ STEP 4: Google Tag Manager script — as high as possible in <head> -->
  <!-- REPLACE GTM-XXXXXXX with the client's actual GTM container ID -->
  <!-- ⚠️ If client has NO GTM yet, leave this commented out — add it later -->
  <!-- ⚠️ TRADE-OFF: placing GTM this early fires tracking sooner but adds a
       parser-blocking 3rd-party request. This marginally reduces Lighthouse
       scores. It is the correct trade-off for analytics accuracy; just be
       aware when optimising Core Web Vitals. -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
  <!-- End Google Tag Manager -->

  <!-- ✅ STEP 5: Favicon -->
  <link rel="icon" type="image/png" href="/Logo.png" />

  <!-- ✅ STEP 6: Canonical URL (static fallback for home page) -->
  <link rel="canonical" href="https://www.YOUR-DOMAIN.com/" />

  <!-- ✅ STEP 7: Title — keyword-rich, under 60 characters -->
  <title>Primary Keyword | Brand Name</title>

  <!-- ✅ STEP 8: Meta description — under 160 characters -->
  <meta name="description" content="One compelling sentence with your primary keyword. What you do, for whom, and why them." />

  <!-- ✅ STEP 9: Open Graph tags (for social media sharing) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.YOUR-DOMAIN.com/" />
  <meta property="og:title" content="Primary Keyword | Brand Name" />
  <meta property="og:description" content="Same or similar to meta description." />
  <meta property="og:image" content="https://www.YOUR-DOMAIN.com/og-image.png" />

  <!-- ✅ STEP 10: Font preconnects (always before font stylesheet) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />

  <!-- ✅ STEP 11: Stylesheet last in head -->
  <link rel="stylesheet" href="./style.css" />
</head>

<body>
  <!-- ✅ GTM noscript — MUST be first thing inside body -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <!-- ✅ Crawler Fallback Content inside root div -->
  <!-- This is what search bots see before JavaScript runs -->
  <div id="root">
    <header style="padding:20px;text-align:center;font-family:sans-serif;">
      <h1 style="color:#030f27;">Primary Service Description — Brand Name</h1>
      <p>One sentence description of what the business does.</p>
    </header>
    <main style="padding:20px;max-width:800px;margin:0 auto;font-family:sans-serif;">
      <section>
        <h2>Our Services</h2>
        <ul>
          <li><strong>Service 1:</strong> Brief description.</li>
          <li><strong>Service 2:</strong> Brief description.</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
        <p><strong>Email:</strong> hello@domain.com</p>
        <p><strong>Address:</strong> Full address here.</p>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
      </section>
    </main>
  </div>

  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

> **Why does order matter?**  
> Browsers and bots parse HTML top-to-bottom. Charset and viewport must come first to properly decode the page. GTM loads immediately after to maximise event capture — this comes with a minor Lighthouse penalty (see Section 4.6). Fonts need preconnects before the stylesheet so connections are established early.

---

## 3. SEO Essentials

### 3.1 SEO Component (Dynamic Per-Page Tags)

Every page in the app must have its own title and description set dynamically. Create a reusable `SEO.jsx` component:

```jsx
// src/components/SEO.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.YOUR-DOMAIN.com";

function SEO({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Set page title
    if (title) document.title = title;

    // 2. Set meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // 3. Set canonical URL dynamically for every route
    const canonicalHref = pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

  }, [title, description, pathname]);

  return null;
}

export default SEO;
```

**Usage on every page:**
```jsx
<SEO
  title="Page Title Under 60 Chars | Brand"
  description="Page-specific description under 160 characters."
/>
```

### 3.2 Title Tag Rules
| Rule | Detail |
|---|---|
| Max length | 60 characters |
| Format | `Primary Keyword | Brand Name` |
| Unique | Every page MUST have a different title |
| Home page | Most keyword-rich title |

### 3.3 Meta Description Rules
| Rule | Detail |
|---|---|
| Max length | 160 characters |
| Must include | Primary keyword naturally |
| Include CTA | "Get a free quote", "Contact us" etc. |
| Unique | Every page MUST have a different description |

### 3.4 Heading Hierarchy
```
H1  → Only ONE per page. Primary keyword.
H2  → Section headings. Support keywords.
H3  → Sub-sections.
```
> ⚠️ Never skip heading levels. Never use multiple H1s.

---

## 4. Google Tag Manager (GTM) Integration

### 4.1 When Adding GTM to an Existing Project

Follow this order in `index.html`:

1. Add `<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />` **before** the GTM script.
2. Place the GTM `<script>` block as the **third or fourth element inside `<head>`** — right after charset, viewport, and the preconnect link.
3. Place the GTM `<noscript>` as the **very first element inside `<body>`**.

> ⚠️ **Common Mistake:** Placing GTM script below fonts, stylesheets, or meta tags. This delays GTM execution and can cause missed events.

### 4.2 GTM vs. Core Web Vitals — The Real Trade-Off

Placing GTM high in `<head>` is correct for **tracking accuracy** but it is not a free win:

| What improves | What gets slightly worse |
|---|---|
| Event capture rate (fires earlier) | Lighthouse performance score |
| First event timing accuracy | Parser blocks slightly earlier |
| GA4 session attribution | Total Blocking Time (TBT) may increase |

**Recommendation:** Keep GTM high in `<head>` for client projects where analytics accuracy matters more than a 2-3 point Lighthouse score difference. If a client specifically requires a 95+ Lighthouse score, consider loading GTM via `gtag.js` with `async` instead, and accept that the first pageview on cold load may be missed.

### 4.3 GTM DataLayer Pageview Tracking for SPAs

React SPAs do NOT automatically fire pageviews when routes change. Fix this by pushing to GTM's dataLayer on every navigation. Add this inside `ScrollToTop.jsx`:

```jsx
// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // ✅ Push pageview event to GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
```

> This makes Google Analytics 4 (inside GTM) correctly count page views for every React route change.

### 4.4 GTM Container Setup Checklist (For Clients)

When the client provides their GTM ID (`GTM-XXXXXXX`):

- [ ] Replace placeholder in `index.html` `<script>` tag
- [ ] Replace placeholder in `index.html` `<noscript>` tag
- [ ] Confirm GTM container is published in the GTM dashboard
- [ ] Verify in browser DevTools → Network tab that `gtm.js` loads

### 4.5 How to Future-Proof for GTM (Client Doesn't Have It Yet)

If the client hasn't set up GTM yet, do NOT add the script. Instead:

1. Leave a clearly labeled comment block in `index.html`:
```html
<!-- ================================================
     GOOGLE TAG MANAGER — ADD WHEN CLIENT IS READY
     Step 1: Add preconnect before this comment
     Step 2: Paste GTM <script> here (Step 3 in head order)
     Step 3: Paste GTM <noscript> as first child of <body>
     GTM Container ID format: GTM-XXXXXXX
     ================================================ -->
```
2. Add `ScrollToTop.jsx` WITH the dataLayer push logic already in place — it will simply push to an empty array and do nothing until GTM is connected.

---

## 5. Structured Data / JSON-LD Schemas

### 5.1 What Schemas to Always Include

| Schema Type | When to Use |
|---|---|
| `Organization` | Every business website |
| `LocalBusiness` | Any business with a physical location |
| `WebSite` | Every website |
| `Service` | Service-based businesses |
| `FAQPage` | If site has an FAQ section |
| `BreadcrumbList` | Every inner page (About, Contact, etc.) |

### 5.2 Schema Constants File

```js
// src/structured-data/schemas.js

const BASE_URL = 'https://www.YOUR-DOMAIN.com'; // ← always use www
const COMPANY_NAME = 'Business Name';
const LOGO_URL = `${BASE_URL}/Logo.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "logo": LOGO_URL,
  "description": "What the business does in one sentence.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Street address",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "XXXXXX",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "Customer Service",
    "email": "hello@domain.com"
  }
};

// Add LocalBusiness, WebSite, Service schemas similarly...

export const getBreadcrumbSchema = (pageName, pagePath) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": pageName, "item": `${BASE_URL}${pagePath}` }
  ]
});
```

### 5.3 Schema Injector Component

Inject schemas into `document.head` (NOT into the body render tree):

```jsx
// src/structured-data/index.jsx
import { useEffect } from "react";

export const JsonLdScript = ({ data }) => {
  // ✅ Crucial: Serialize the object to a string in the render body.
  // Do NOT pass the 'data' object directly into the useEffect dependency array.
  // Because objects are compared by reference, passing an object literal 
  // (<JsonLdScript data={{ ... }} />) would cause the effect to re-run on every render.
  // Using the serialized string primitive ('json') ensures React compares by value.
  const json = JSON.stringify(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = json;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [json]); // ✅ React compares primitive strings by value, preventing redundant mounts.

  return null;
};
```

> ✅ This ensures schemas live in `<head>` (where Google expects them), are stable across re-renders (even when parent components pass inline object literals), and are cleaned up on route changes.

---

## 6. Routing — 404, Redirects & Canonical URLs

### 6.1 The 404 Page (Critical for Google Ads & Spam Score)

**Never** map unknown routes to the home page. This mimics hacked sites.

```jsx
// src/App.jsx
const NotFound = lazy(() => import("./components/NotFound"));

// Inside <Routes>:
<Route path="*" element={<NotFound />} />
```

### 6.2 NotFound Component Template

```jsx
// src/components/NotFound.jsx
import { Link } from "react-router-dom";
import SEO from "./SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Brand Name"
        description="The page you are looking for does not exist."
      />
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "80px", fontWeight: 800 }}>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
```

### 6.3 WWW Redirect (Prevent Duplicate Content)

All traffic must go to ONE canonical domain. Add to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "YOUR-DOMAIN.com" }],
      "destination": "https://www.YOUR-DOMAIN.com/:path*",
      "permanent": true
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

> This permanently redirects `http://domain.com` → `https://www.domain.com` (301 redirect) which prevents Google from indexing two versions of the same site.

---

## 7. Responsive Design Breakpoints

### 7.1 Approach — Desktop-First vs. Mobile-First

Koiostudio projects are currently built **desktop-first** — base CSS targets large screens and `max-width` media queries progressively adjust downward. This is the most common real-world approach for marketing/business sites where designs are handed off from Figma desktop frames.

> **Don't confuse the terms:** "Mobile-first CSS" means using `min-width` queries. "Mobile-first design thinking" (plan the mobile layout first) is a separate concept. Both are valid but they use different media query directions. This guide uses desktop-first CSS (`max-width`).

Use these 5 breakpoints consistently across ALL projects:

```css
/* ─────────────────────────────────────────
   BREAKPOINT SYSTEM (Desktop-First, max-width)
   Use all 5 consistently on every project.
   ───────────────────────────────────────── */

/* 1. Base CSS — no media query → targets large desktops (1440px+) */

/* 2. Laptop / Large Tablet landscape */
@media screen and (max-width: 1200px) {
  /* Reduce multi-column grids, hide desktop-only decorative elements */
}

/* 3. Tablet Portrait */
@media screen and (max-width: 1024px) {
  /* Side-by-side layouts begin stacking, adjust font sizes */
}

/* 4. Mobile Landscape / Large Mobile ← MOST IMPORTANT */
@media screen and (max-width: 768px) {
  /* Major layout shifts. Single column. Hide desktop line breaks. */
}

/* 5. Small Mobile */
@media screen and (max-width: 480px) {
  /* Tightest padding, smallest font sizes, button full-width */
}
```

### Required Responsive Behavior Checklist
| Element | Mobile Behavior |
|---|---|
| Navigation | Hamburger menu |
| Hero/Banner | Stacked, full width |
| Images | `width: 100%; height: auto;` |
| Fonts | Reduce by ~20-30% from desktop |
| Tables | Horizontal scroll or card layout |
| Forms | Full width inputs |
| Videos | `width: 100%; aspect-ratio: 16/9;` |
| Inline `<br>` tags | `br { display: none; }` at ≤768px if used for desktop layout |

### Font Size Scale
```css
/* Desktop → Tablet (≤1024px) → Mobile (≤768px) */
h1: 64px → 48px → 36px
h2: 40px → 32px → 28px
h3: 24px → 20px → 18px
body: 16px → 15px → 14px
```

---

## 8. External Link Security

**Every** link that opens a new tab MUST have:

```html
target="_blank"
rel="noopener noreferrer"
```

**✅ Correct:**
```jsx
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Site
</a>
```

**❌ Wrong (security vulnerability + spam flag):**
```jsx
<a href="https://example.com" target="_blank">Visit Site</a>
```

> `noopener` → prevents the new page from accessing your `window` object (tab-nabbing attack).  
> `noreferrer` → prevents passing referrer info to external sites.

### Exception: Email and Phone links
`mailto:` and `tel:` links should NEVER have `target="_blank"`:
```jsx
<a href="mailto:hello@domain.com">Email Us</a>  ✅
<a href="tel:+919999999999">Call Us</a>         ✅
```

---

## 9. Crawler Fallback Content

> **Nice to have — not a critical fix.** Googlebot is now capable of executing JavaScript and will render the full React app before indexing. This technique was essential circa 2018 and has diminishing SEO returns today. However it is still useful for:
> - Very slow bots and lesser crawlers that don't execute JS.
> - Social media link preview scrapers (LinkedIn, Slack, WhatsApp) that don't run JS.
> - Ensuring something meaningful appears if JS fails to load entirely.

Add real content inside `<div id="root">` in `index.html`. React 18+ **replaces** (unmounts and re-renders) this content when the app mounts — it does not "hydrate" it. Hydration is a server-side rendering (SSR) concept and does not apply to Vite SPAs.

### Rules for Fallback Content
1. Include one `<h1>` with the primary keyword.
2. Include a `<h2>Our Services</h2>` section with bullet points.
3. Include a Contact section with phone, email, and address.
4. Include a link to the Privacy Policy page.
5. Keep styling minimal — inline styles only.
6. React will replace this content when the app mounts.

---

## 10. Sitemap, Robots.txt & LLMs.txt

### robots.txt (at `/public/robots.txt`)
```
User-agent: *
Allow: /

Sitemap: https://www.YOUR-DOMAIN.com/sitemap.xml
```
> Always use the `www` version.

### sitemap.xml (at `/public/sitemap.xml`)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.YOUR-DOMAIN.com/</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add ALL public pages with <loc>, <lastmod>, <changefreq>, <priority> -->
  <url>
    <loc>https://www.YOUR-DOMAIN.com/privacy-policy</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

**Priority Values:**
| Page | Priority |
|---|---|
| Home | 1.0 |
| Service pages | 0.9 |
| About, Projects | 0.8 |
| Contact | 0.8 |
| Privacy, Terms | 0.3 |

### llms.txt (at `/public/llms.txt`) — For AI Crawlers

> ⚠️ **Community convention, not an established standard.** `llms.txt` is a proposed format (mid-2025) for helping AI crawlers understand site content. It is NOT equivalent to `robots.txt` or `sitemap.xml`, which are formal, widely-adopted standards. Include it as a low-effort extra — not as a critical SEO requirement.

```
# Business Name

> Tagline or one sentence description.

Longer description paragraph about the business.

## Services
- [Service Name](https://www.YOUR-DOMAIN.com/services/page): Brief description.

## Pages
- [About Us](https://www.YOUR-DOMAIN.com/about): Description.
- [Contact Us](https://www.YOUR-DOMAIN.com/contact): Description.
- [Privacy Policy](https://www.YOUR-DOMAIN.com/privacy-policy): Legal info.
```

---

## 11. Vercel Deployment Config

**Full `vercel.json` template:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "YOUR-DOMAIN.com" }],
      "destination": "https://www.YOUR-DOMAIN.com/:path*",
      "permanent": true
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

> Security headers prevent common browser exploits and make Google Ads scanners more confident the site is safe.

---

## 12. Google Ads Compliance Checklist

Google Ads rejects sites with these patterns. Check every one:

| # | Issue | Fix |
|---|---|---|
| 1 | Wildcard route returns 200 for unknown paths | Add `<Route path="*" element={<NotFound />} />` |
| 2 | Default boilerplate files in `/public/` | Delete any `vite.svg`, `react.svg`, or template assets |
| 3 | `target="_blank"` without `rel="noopener noreferrer"` | Add rel attribute to ALL external links |
| 4 | Blank HTML body (SPA shell) | Add fallback HTML inside `<div id="root">` |
| 5 | Generic or missing title tag | Set keyword-rich, unique title for every page |
| 6 | GTM script after fonts/stylesheets | Move GTM to top of head, right after charset & viewport |
| 7 | Non-www and www both serving content | Set up 301 redirect in vercel.json |
| 8 | Broken or dead `href="#"` links | Replace with proper routes or `<button>` elements |
| 9 | Email `mailto:` with `target="_blank"` | Remove target attribute from mailto links |
| 10 | Privacy Policy page missing | Create `/privacy-policy` route and component |

---

## 13. Code Quality Checklist

Run `npm run lint` and `npm run build` before every deploy.

### Common React Lint Errors to Fix

**1. Unused imports:**
```jsx
// ❌ Wrong
import React, { useState, useEffect, useRef } from "react";

// ✅ Correct — only import what you use
import React from "react";
```

**2. setState in useEffect (causes cascading renders):**
```jsx
// ❌ Wrong — causes performance issues
useEffect(() => {
  if (index >= count) setIndex(0); // don't call setState here
}, [count]);

// ✅ Correct — compute during render instead
const safeIndex = index >= count ? 0 : index;
```

**3. Missing dependency array:**
```jsx
// ❌ Runs on every render
useEffect(() => { doSomething(); });

// ✅ Runs only when needed
useEffect(() => { doSomething(); }, [dependency]);
```

**4. Keys in lists:**
```jsx
// ❌ Wrong
{items.map(item => <div>{item.name}</div>)}

// ✅ Correct
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

---

## 14. Final Pre-Launch Checklist

Copy this and tick off before every client handover:

### HTML & Meta
- [ ] `index.html` follows the exact head order from Section 2
- [ ] GTM script placed correctly (or placeholder comment added)
- [ ] GTM preconnect link present
- [ ] GTM noscript is first element in `<body>`
- [ ] Static canonical tag present in `<head>` of `index.html`
- [ ] Unique title and description on every page
- [ ] Open Graph tags filled in
- [ ] Crawler fallback content inside `<div id="root">`

### Routing
- [ ] 404 page exists and is wired to `<Route path="*">`
- [ ] Privacy Policy page exists at `/privacy-policy`
- [ ] All routes lazy-loaded with `React.lazy()` and `<Suspense>`

### SEO & Schemas
- [ ] `SEO.jsx` used on every page
- [ ] Dynamic canonical tag set correctly per route
- [ ] `schemas.js` uses `https://www.` URLs
- [ ] `JsonLdScript` injects into `document.head` (not body)
- [ ] Breadcrumb schema added to inner pages

### External Links
- [ ] All `target="_blank"` links have `rel="noopener noreferrer"`
- [ ] No `target="_blank"` on `mailto:` or `tel:` links
- [ ] No `href="#"` dead links

### Public Files
- [ ] `robots.txt` points to www sitemap
- [ ] `sitemap.xml` uses www URLs and covers all public pages
- [ ] `llms.txt` present with correct www URLs
- [ ] No boilerplate files in `/public/` (no `vite.svg` etc.)

### Vercel Config
- [ ] `vercel.json` has non-www → www redirect (permanent: true)
- [ ] `vercel.json` has security headers
- [ ] SPA rewrite rule present

### GTM & Analytics
- [ ] `ScrollToTop.jsx` pushes `page_view` event to dataLayer
- [ ] GTM container ID is published (not just saved as draft)
- [ ] Tested in browser: GTM script loading in Network tab

### Code Quality
- [ ] `npm run lint` → **0 errors, 0 warnings**
- [ ] `npm run build` → **builds successfully**
- [ ] No console errors in browser DevTools
- [ ] Tested on Chrome, Safari, Firefox
- [ ] Tested on real mobile device (not just DevTools)

---

## QUICK REFERENCE — DO's and DON'Ts

### ✅ Always Do
- Use `https://www.` (with www) in ALL URLs — sitemap, schemas, robots, canonical
- Keep one `H1` per page with the primary keyword
- Add Privacy Policy and link it in the footer
- Test on mobile before delivery
- Run lint and build before every deploy

### ❌ Never Do
- Never map `path="*"` to the home page
- Never leave default Vite/Create-React-App boilerplate files in public/
- Never put `target="_blank"` on email or phone links
- Never place GTM script below stylesheets or font tags
- Never duplicate canonical URLs across multiple pages
- Never use `http://` — always `https://`
- Never skip adding the SEO component on a new page

---

*Document maintained by Koiostudio. Update version number when major changes are made.*
