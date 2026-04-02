# Product Guidelines - tourism.gov.ua

## Core Philosophy
The primary objective is a high-fidelity migration from the legacy Webflow environment to a modern Next.js ecosystem, enhancing performance and accessibility while maintaining the official integrity of the State Agency for Tourism Development.

## Visual & Design Standards
- **Modern Tailwind 4:** Leverage the latest Tailwind CSS primitives for a clean, maintainable, and modern UI.
- **Accessibility-First:** Ensure WCAG AA compliance is a foundational requirement, not an afterthought. Use semantic HTML and maintain focus on keyboard navigation.
- **Official Branding:** Maintain a professional and trustworthy visual identity appropriate for a government agency.

## User Experience (UX) Principles
- **Performance & Speed:** Prioritize Core Web Vitals, specifically Largest Contentful Paint (LCP) and interaction latency.
- **Media Richness:** Support engaging content through optimized video sliders and high-quality imagery without compromising performance.
- **Ease of Access:** Structure navigation and search to allow users to find regulatory documents and news with minimal friction.

## Content & Data Standards
- **Optimized Assets:** All media (images/videos) must be processed for web efficiency (Next.js Image component, modern formats like WebP/WebM).
- **Data Integrity:** Ensure that all migrated and new regulatory data (licensing, categorization) is accurate and strictly validated.
- **Terminology Consistency:** Maintain high-quality, professional translations and consistent terminology between the UA and EN versions of the site.

## Development Workflow
- **Component-Based Architecture:** Build reusable, accessible components in React.
- **CMS Integration:** Use Payload CMS as the single source of truth for dynamic content.
- **Localization:** Adhere to established URL-based routing for multi-language support.
