# Specification: Implement Responsive Mobile Navigation

## Goal
Transform the existing `Header` component into a fully responsive element that provides an optimal experience across mobile, tablet, and desktop devices.

## Requirements
- **Mobile Menu Toggle:** A visible "hamburger" menu button on screens smaller than 1024px.
- **Drawer/Overlay:** A slide-in or fade-in menu for mobile links.
- **Accessibility:** 
  - Proper ARIA attributes (`aria-expanded`, `aria-label`).
  - Focus trapping when the mobile menu is open.
  - Keyboard escape support to close the menu.
- **Performance:** CSS-based animations using Tailwind CSS 4.
- **Localization:** Support for both UA and EN versions in the mobile view.

## Acceptance Criteria
- [ ] Menu icon is displayed instead of the desktop menu on screens < 1024px.
- [ ] Clicking the icon opens the menu.
- [ ] Clicking outside or on a close button closes the menu.
- [ ] All navigation links are accessible and functional in mobile view.
- [ ] Accessibility audit passes for mobile navigation.
