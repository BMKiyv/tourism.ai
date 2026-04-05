# Specification: Mobile Language Switcher Styling

## Overview
This track involves styling the language switcher within the mobile header menu to have a horizontal layout, no underlines, and a button-like appearance for the active language, matching the style and color scheme of the "Contacts" button.

## Functional Requirements
- Language switcher buttons must be displayed horizontally.
- Active language button must have a background color `#b2e0f9` and text color `#2d5ca6`, matching the "Contacts" button.
- Active language button must be bold.
- Non-active language button must be gray and have a normal font weight.
- Links must not have underlines or shadows.

## Non-Functional Requirements
- Styles must override any default Webflow CSS settings.
- Changes should be visible on Tablet and Mobile screen sizes (<1024px) when the mobile menu is open.
- Transition effects should be minimal or absent (as per user preference).

## Acceptance Criteria
- [ ] Language switcher in mobile menu is horizontal.
- [ ] Active language button looks like a small button (no borders, `#b2e0f9` background, `#2d5ca6` text).
- [ ] No underlines or shadows on language links.
- [ ] Active language is bold; non-active is normal weight.
- [ ] Menu is visible on screen sizes below 1024px.

## Out of Scope
- Desktop language switcher styling.
- Changing the menu logic (open/close).
