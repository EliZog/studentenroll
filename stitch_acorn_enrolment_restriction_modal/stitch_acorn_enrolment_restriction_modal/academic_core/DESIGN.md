---
name: Academic Core
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#43474f'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#747780'
  outline-variant: '#c4c6d1'
  surface-tint: '#405e93'
  primary: '#001636'
  on-primary: '#ffffff'
  primary-container: '#002a5c'
  on-primary-container: '#7593cb'
  inverse-primary: '#abc7ff'
  secondary: '#585f67'
  on-secondary: '#ffffff'
  secondary-container: '#dde3ed'
  on-secondary-container: '#5e656d'
  tertiary: '#2f0c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f1b02'
  on-tertiary-container: '#ce7f5d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#264679'
  secondary-fixed: '#dde3ed'
  secondary-fixed-dim: '#c1c7d1'
  on-secondary-fixed: '#161c23'
  on-secondary-fixed-variant: '#41474f'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb597'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#723519'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
  warning-bg: '#FFF3D1'
  warning-text: '#854D0E'
  success-green: '#166534'
  background-alt: '#F1F5F9'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  section-gap: 40px
  sidebar-width: 280px
---

## Brand & Style

The design system is engineered for high-stakes academic environments, prioritizing clarity, authority, and cognitive ease. It serves a diverse university population—students, faculty, and administrators—who require a reliable interface for complex administrative tasks. 

The aesthetic follows a **Corporate / Modern** approach with a focus on **Information Density Management**. It balances the prestigious heritage of the institution with contemporary usability standards. The visual tone is scholarly yet accessible, utilizing generous white space to reduce the "administrative burden" typically associated with university portals. Every design decision is aimed at fostering a sense of organized calm and institutional trust.

## Colors

The palette is anchored by a deep institutional Navy Blue (`#002A5C`), which provides a high-contrast foundation for navigation and primary actions. This is supported by a range of cool grays and soft blues to create a layered, "dashboard" feel without overwhelming the user.

- **Primary:** Reserved for global navigation, primary buttons, and critical active states.
- **Secondary:** Used for sidebar backgrounds, inactive tabs, and subtle grouping containers.
- **Warning/Status:** A specialized "Soft Yellow" background is used for financial alerts or academic deadlines, paired with a high-contrast dark gold text to ensure AA accessibility.
- **Success:** A conservative dark green used sparingly for grade confirmations and successful course enrollments.

## Typography

The design system utilizes **Inter** exclusively to ensure maximum legibility across data-heavy tables and complex forms. 

- **Hierarchy:** Headlines use a semi-bold weight (600) in the primary Navy Blue to anchor page sections. 
- **Readability:** Body copy uses a standard 16px base for optimal reading comfort. 
- **Utility:** Small labels and captions use a slightly increased letter-spacing and medium weights to remain legible even at 12px.
- **Tone:** The choice of Inter replaces the legacy Arial/Helvetica with a more modern, systematic grotesque that feels "designed" rather than just "default."

## Layout & Spacing

The layout employs a **fixed-fluid hybrid grid**. The main content area lives within a max-width container (1440px) to prevent line lengths from becoming unreadable on ultra-wide monitors, while the sidebar remains fixed at 280px.

- **Grid:** 12-column layout for desktop with 16px gutters.
- **Margins:** 24px page margins on tablet/desktop; 16px on mobile.
- **Rhythm:** An 8px linear scale is used for all internal component padding and margins, ensuring a consistent vertical rhythm.
- **Mobile:** On mobile devices, the sidebar collapses into a bottom navigation bar or a hamburger menu, and the 12-column grid reflows into a single column with full-width cards.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** supplemented by **Ambient Shadows**. 

- **Surface 0:** The main page background uses the neutral `background-alt` (`#F1F5F9`) to provide contrast for white cards.
- **Surface 1:** White containers (`#FFFFFF`) used for content blocks, featuring a subtle 1px border (`#E3E9F3`) and a soft, low-blur shadow (Y: 2px, Blur: 4px, Opacity: 5%).
- **Surface 2:** Popovers, dropdowns, and modals use a higher elevation with a more pronounced shadow (Y: 10px, Blur: 20px, Opacity: 10%) to draw focus.
- **Interaction:** Buttons and interactive cards use a subtle "lift" effect on hover (shadow deepens slightly) to indicate clickability without being distracting.

## Shapes

The design system utilizes a **Rounded** shape language to soften the institutional feel and make the portal feel more modern.

- **Standard Components:** Buttons, input fields, and cards utilize a `0.5rem` (8px) corner radius.
- **Large Containers:** Modals and main content cards may use `1rem` (16px) to create a clear "container within a container" visual logic.
- **Status Pills:** Badges and status indicators are fully rounded (Pill-shaped) to distinguish them from interactive buttons.

## Components

- **Buttons:** Primary buttons are solid Navy Blue with white text. Secondary buttons are ghost-style with a Navy border or a Light Gray fill.
- **Input Fields:** Use a 1px border (`#E3E9F3`) that thickens and changes to Primary Blue on focus. Labels sit clearly above the field in `label-md` style.
- **Cards:** The primary vehicle for information. Cards must have a white background, 8px rounded corners, and a subtle shadow. They should include 24px of internal padding.
- **Badges:** Small, high-contrast indicators for "Enrolled," "Waitlisted," or "Completed." Use the Pill-shaped rounding.
- **Icons:** Use **Lucide** icons. Line weight should be consistent (2px) and color should match the surrounding text or be slightly muted to a medium gray.
- **Data Tables:** Clean, borderless rows with a light gray hover state and a subtle horizontal separator. Header cells should use the `label-sm` typography style for clarity.