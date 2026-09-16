# Helios Grid Infra — Solar EPC Website

A modern, responsive Solar EPC / electrical infrastructure company website built with React, Vite and React Router.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What's included

- **Config-driven content** (`src/config/`): company info, navigation, all six
  service pages' content, the solar calculator's assumptions, and the featured
  projects list. Edit these files to update site content without touching
  components.
- **Fully functional Solar Calculator** (`src/components/SolarCalculator.jsx`)
  with live results, based on configurable assumptions in
  `src/config/calculatorConfig.js`.
- **Generic ServicePage** (`src/pages/ServicePage.jsx`) that renders all six
  service routes (`/services/:serviceSlug`) from `src/config/services.js`, so
  each page has distinct content without duplicating layout code.
- **Sticky, animated navbar** with dropdowns (Solar Solutions, Services) and a
  mobile hamburger menu.
- **Contact form** (`src/components/ContactForm.jsx`) with client-side
  validation. The submit handler is a placeholder — wire it to your backend
  API or an email service (e.g. a `/api/contact` endpoint) to actually receive
  enquiries.
- Scroll-reveal animations, animated stat counters, and a horizontal (desktop)
  / vertical (mobile) EPC process timeline — all built with plain
  `IntersectionObserver` + CSS, no animation library dependency required
  (Framer Motion is listed as a dependency if you want to extend animations
  further).

## Before going live

- Replace placeholder company details in `src/config/siteConfig.js`
  (address, phone, email, stats, social links).
- Replace Unsplash placeholder images throughout `src/pages/` and
  `src/components/Hero.jsx` with your own licensed photography.
- Wire `ContactForm.jsx`'s `handleSubmit` to a real backend endpoint.
- Add real project data to `src/config/projects.js`.
- Update `index.html` meta description / Open Graph tags per page as needed
  (currently a single site-wide description is set).

## Notes on scope

This delivers the full site architecture, routing, all six service pages,
both solar solution pages, About, Contact, Solar Calculator, and Home with
every section from the brief (hero, stats, about, solutions, services,
projects, why-choose-us, EPC process, calculator CTA, sustainability, contact
CTA). A standalone Node.js backend for the contact form was intentionally
left as an integration point rather than built out, since the destination
(email service, CRM, database) determines its shape — the frontend is ready
to POST to whatever endpoint you stand up.
