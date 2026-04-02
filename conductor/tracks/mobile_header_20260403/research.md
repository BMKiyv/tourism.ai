# Research: Header Component and Breakpoints

## Current Implementation
- **File:** `src/components/Header.tsx`
- **Logic:** 
  - Uses `useState` for `mobileOpen`, `aboutOpen`, `activityOpen`, `searchOpen`.
  - Toggles `mobileOpen` via a button with class `.tab-link-menu`.
  - Inline style `display: mobileOpen ? "block" : "none"` controls visibility of `.nav-hide-block.alt-nav-hide`.
  - `useEffect` manages `paddingTop` of `.header-trigger` based on menu states.

## Breakpoints (from legacy Webflow CSS)
- **Desktop:** > 991px
- **Tablet:** <= 991px (Trigger for hamburger menu)
- **Mobile Landscape:** <= 767px
- **Mobile Portrait:** <= 479px

## Findings
- The component currently relies on legacy Webflow CSS classes (`.nav-tab`, `.strucutre-list`, `.alt-nav-wrap`) for layout switching.
- Tailwind 4 is integrated but not yet fully utilized for responsive layout in this component.
- The mobile menu implementation is basic (toggle visibility only) and lacks accessibility features like focus trapping or slide animations.
