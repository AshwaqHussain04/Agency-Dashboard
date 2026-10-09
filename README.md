# [Agency Name] — Design Agency Homepage

A modern, premium design agency homepage built as a frontend developer internship assignment using Next.js 13+ with the App Router, TypeScript, and Tailwind CSS.

---

## Features

- **Hero section** — Animated headline, status badge, floating stat cards, and dual CTAs
- **Services section** — Responsive 4-column grid of interactive service cards with hover effects
- **Portfolio section** — Masonry-style grid with image zoom, category chips, and hover overlays
- **Contact section** — Fully validated contact form with loading, success, and error states
- **Sticky header** — Scroll-aware backdrop blur, accessible mobile hamburger menu
- **Footer** — Social links, navigation, dynamic copyright year
- **SEO** — Next.js Metadata API with Open Graph and Twitter card tags
- **Accessibility** — Semantic HTML, ARIA attributes, visible focus indicators, keyboard navigation
- **Reduced motion** — Respects `prefers-reduced-motion` media query
- **Performance** — Server components for static content, `next/image` for all images

---

## Technology Stack

| Technology | Version |
|---|---|
| Next.js | 15+ (App Router) |
| React | 19+ |
| TypeScript | 5+ |
| Tailwind CSS | 4+ |
| Lucide React | latest |
| next/font | built-in |

---

## Prerequisites

- **Node.js** 18.17 or later
- **npm** 9 or later (or pnpm / yarn / bun)

---

## Installation

```bash
# Clone or download the project
cd design-agency

# Install dependencies
npm install
```

---

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on file changes.

---

## Production Build

```bash
# Build for production
npm run build

# Start the production server
npm run start
```

---

## Linting

```bash
npm run lint
```

---

## Environment Variables

No environment variables are required to run the project in its current state.

The contact form is in **demonstration mode** — submissions are validated and logged to the server console, but no email is sent.

To connect a real email provider, create a `.env.local` file and add your credentials:

```env
# Example with Resend
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=hello@youragency.com
```

Then update `src/app/api/contact/route.ts` to use the SDK of your chosen provider.

> **Never commit `.env.local` to version control.** It is already excluded by `.gitignore`.

---

## Project Structure

```
design-agency/
├── public/
│   └── images/              # Local image assets (if any)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts     # Contact form API handler
│   │   ├── globals.css           # Global styles & animations
│   │   ├── layout.tsx            # Root layout, fonts, metadata
│   │   └── page.tsx              # Homepage (composes all sections)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Sticky nav, mobile menu
│   │   │   └── Footer.tsx        # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── Services.tsx      # Services grid
│   │   │   ├── Portfolio.tsx     # Portfolio grid
│   │   │   └── Contact.tsx       # Contact form section
│   │   └── ui/
│   │       ├── Button.tsx        # Reusable button (primary/secondary/ghost)
│   │       ├── SectionHeading.tsx # Eyebrow + heading + subtitle
│   │       └── ServiceCard.tsx   # Individual service card
│   ├── data/
│   │   ├── services.ts           # Service content data
│   │   └── projects.ts           # Portfolio project data
│   └── types/
│       └── index.ts              # Shared TypeScript interfaces
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Deployment (Vercel)

1. Push the project to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Vercel auto-detects Next.js — no build settings need changing.
5. Add any environment variables under **Settings → Environment Variables**.
6. Click **Deploy**.

Your site will be live on a `*.vercel.app` domain within minutes.

---

## Customisation

All agency-specific placeholders are clearly marked with `[square brackets]`:

| Placeholder | Location |
|---|---|
| `[Agency Name]` | `layout.tsx`, `Header.tsx`, `Footer.tsx` |
| `[Email Address]` | `Footer.tsx`, `Contact.tsx` |
| `[Location]` | `Footer.tsx`, `Contact.tsx` |
| `[Project One]` … `[Project Six]` | `data/projects.ts` |
| Social links | `Footer.tsx` |

---

## Assumptions & Notes

- **Images** — Portfolio images are sourced from Unsplash (free to use for demo purposes). Replace with your own assets before going live.
- **Contact form** — Demo mode only. No email is sent. Connect an email provider to activate real submissions.
- **No client names or testimonials** — All project examples are illustrative placeholders, as specified in the brief.
- **No heavy animation libraries** — Animations use CSS keyframes only, keeping the bundle minimal.
- **Accessibility** — WCAG 2.1 AA colour contrast and keyboard navigation verified across all interactive elements.
