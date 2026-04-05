# Implementation Plan: Mobile Language Switcher Styling

## Phase 1: Research and Setup [checkpoint: c5987e6]
- [x] Task: Analyze current Header implementation for language switcher [ ]
    - [x] Inspect `src/components/Header.tsx` to identify language switcher logic and classes.
    - [x] Identify the exact CSS classes and styles used for the "Contacts" button in `public/webflow/css/tourismgovua.webflow.css`.
- [x] Task: Set up testing environment for Header component [ ]
    - [x] Ensure Vitest and React Testing Library are configured.
    - [x] Create a base test file `src/components/__tests__/Header.test.tsx` if it doesn't exist.
- [x] Task: Conductor - User Manual Verification 'Research and Setup' (Protocol in workflow.md) [ ]

## Phase 2: Core Implementation (TDD) [checkpoint: c230d39]
- [x] Task: Write failing tests for mobile language switcher styling [ ]
    - [x] Add tests to verify horizontal layout.
    - [x] Add tests to verify active language button styles (background color, text color, font weight).
    - [x] Add tests to verify non-active language button styles (color, font weight).
    - [x] Add tests to verify no underlines/shadows.
- [x] Task: Implement mobile language switcher styling [ ]
    - [x] Update `src/components/Header.tsx` with Tailwind classes to match specification.
    - [x] Use `!no-underline` and `!shadow-none` to override Webflow defaults.
    - [x] Ensure `Tablet & Mobile (<1024px)` visibility logic is applied.
- [x] Task: Verify implementation with tests [ ]
    - [x] Run tests and ensure they pass.
    - [x] Refactor if necessary.
- [x] Task: Conductor - User Manual Verification 'Core Implementation' (Protocol in workflow.md) [ ]

## Phase 3: Verification and Polishing [checkpoint: ae801f0]
- [x] Task: Manual verification on different screen sizes [ ]
    - [x] Check layout on mobile (375px) and tablet (768px).
    - [x] Verify active language styling matches "Contacts" button.
- [x] Task: Final code review and cleanup [ ]
    - [x] Check for any redundant styles or console logs.
    - [x] Ensure WCAG AA compliance for the new button styles (contrast).
- [x] Task: Conductor - User Manual Verification 'Verification and Polishing' (Protocol in workflow.md) [ ]

## Phase: Review Fixes
- [x] Task: Commit track artifacts 133ac29
