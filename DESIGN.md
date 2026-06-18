---
name: Technical Ether
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#333535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#cac4d5'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#938e9f'
  outline-variant: '#484553'
  surface-tint: '#cbbeff'
  primary: '#cbbeff'
  on-primary: '#330794'
  primary-container: '#6d54cf'
  on-primary-container: '#ede6ff'
  inverse-primary: '#6248c3'
  secondary: '#cbbeff'
  on-secondary: '#33275f'
  secondary-container: '#493e77'
  on-secondary-container: '#b9aced'
  tertiary: '#c8c4d7'
  on-tertiary: '#302f3d'
  tertiary-container: '#696777'
  on-tertiary-container: '#ebe7fa'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cbbeff'
  on-primary-fixed: '#1d0061'
  on-primary-fixed-variant: '#4a2daa'
  secondary-fixed: '#e7deff'
  secondary-fixed-dim: '#cbbeff'
  on-secondary-fixed: '#1d1049'
  on-secondary-fixed-variant: '#493e77'
  tertiary-fixed: '#e4e0f3'
  tertiary-fixed-dim: '#c8c4d7'
  on-tertiary-fixed: '#1b1a28'
  on-tertiary-fixed-variant: '#474554'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#333535'
  background-deep: '#0F0E17'
  surface-glass: rgba(38, 37, 51, 0.6)
  white: '#FFFFFF'
  vibrant-accent: '#A389FF'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max-width: 1200px
  gutter: 24px
---

## Brand & Style

The design system is crafted for a Web Full Stack & Automatización Developer, emphasizing technical mastery, precision, and modern sophistication. The brand personality is "The Architect in the Machine"—highly competent, professional, yet possessing a creative edge through vibrant accents. 

The visual style follows a **Modern Corporate Glassmorphism** approach. It utilizes a deep, multi-layered dark theme to provide a canvas for vibrant violet accents that signify energy and automation. Backgrounds are treated with subtle gradients and "frost" layers to create depth without sacrificing the clean, professional information density required for a technical portfolio. The focus is on clarity, smooth transitions, and a premium feel that differentiates the developer from standard "template" portfolios.

## Colors

The palette centers on a sophisticated dark spectrum. The primary color, a vibrant violet, is reserved for interactive elements, call-to-actions, and highlights of technical expertise. Secondary and tertiary tones (deep purples and charcoals) build the structural foundation of the UI, creating a sense of infinite depth.

- **Primary:** High-energy violet for key interactions.
- **Secondary/Tertiary:** Subdued purples for containers and section grouping.
- **Neutral:** Cool-toned silver/gray for body text and secondary information.
- **Background:** An ultra-dark charcoal-black to ensure the vibrant accents "pop" and the glass effects remain legible.

## Typography

This design system uses a high-contrast typographic pairing to balance modern aesthetics with technical readability. 

- **Headings:** Montserrat provides a bold, geometric, and authoritative voice. It is used for all major section titles and display text.
- **Body:** Hanken Grotesk is chosen for its exceptional clarity and modern feel, ensuring long-form content about technical projects remains highly readable.
- **Technical/Labels:** JetBrains Mono is used for labels, tags, and snippets of code to reinforce the "Automation Developer" identity, providing a functional, monospaced contrast to the sans-serif body text.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. Professionalism is conveyed through generous white space (vertical rhythm), allowing technical content "room to breathe."

- **Desktop:** 120px vertical gap between major sections.
- **Mobile:** 64px vertical gap. 
- **Containers:** Content is centered in a 1200px max-width container to maintain focus on larger displays.
- **Rhythm:** All spacing (padding, margins) follows an 8px base unit to ensure mathematical harmony across the system.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Surface Level 0 (Background):** Solid `#0F0E17`.
- **Surface Level 1 (Sections):** Subtle radial gradients of `#262533` to add organic depth.
- **Surface Level 2 (Cards):** Semi-transparent glass (`rgba(38, 37, 51, 0.6)`) with a 1px border of `rgba(255, 255, 255, 0.1)` and a 16px backdrop-blur. 
- **Interactions:** Hovering over glass elements increases the border opacity and adds a soft, deep-purple outer glow (`0 8px 32px rgba(109, 84, 207, 0.2)`).

## Shapes

The shape language is "Soft-Modern." Elements use a consistent 0.5rem (8px) radius to feel approachable yet precise. 

- **Buttons & Small UI:** 8px rounded corners.
- **Cards & Large Containers:** 16px (rounded-lg) to emphasize the glass effect.
- **Pills:** Full roundedness is reserved only for status indicators or technical tags (e.g., programming languages).

## Components

### Buttons
- **Primary:** Solid `#6D54CF` with white text. High-contrast, no shadow, subtle scale-up on hover.
- **Secondary:** Outlined with 1.5px border of `#6D54CF`. Transparent background that fills on hover.
- **Ghost:** Text-only in `#A389FF` with a JetBrains Mono label style.

### Cards (Project/Service)
Cards use the "Surface Level 2" glass effect. They should include a subtle top-left light leak gradient to simulate a physical glass edge. Project titles use Montserrat SemiBold; descriptions use Hanken Grotesk.

### Technical Tags (Chips)
Small, monospaced labels using JetBrains Mono. Background is a dark tint of the primary color (`rgba(109, 84, 207, 0.1)`) with a subtle border.

### Input Fields
Dark, recessed fields with `#262533` background and a 1px border. On focus, the border glows with the primary violet color.

### Progress/Automation Indicators
Use thin, high-contrast lines. If showing automation flows, use "Technical Ether" animated paths—thin violet lines with a moving "spark" to denote data flow.