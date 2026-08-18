// src/constants/designTokens.ts
// Centralized design token system for Dhikr Tracker
// Implements 60-30-10 color rule and Material Design design language

/**
 * COLOR SYSTEM
 * 60% = Dominant background
 * 30% = Secondary surface/cards
 * 10% = Accent/action
 */

export const COLORS = {
  // 60% - Dominant background (soft neutral)
  background: {
    DEFAULT: '#F8F9FA', // Light mode light gray
    dark: '#0F172A',     // Dark mode deep navy
  },

  // 30% - Secondary surface (cards, containers)
  surface: {
    DEFAULT: '#FFFFFF',  // Light mode white
    dark: '#1E293B',     // Dark mode card gray
    variant: '#252525',  // For elevated surfaces
  },

  // 10% - Accent (primary action)
  accent: {
    DEFAULT: '#10B981',  // Emerald green (primary)
    dark: '#059669',     // Emerald dark
    alternative: '#6366F1', // Indigo (secondary action)
    danger: '#EF4444',   // Red for destructive actions
    success: '#10B981',  // Green for success
  },

  // Text colors
  text: {
    primary: '#111827',  // Light mode primary text
    secondary: '#6B7280', // Light mode secondary text
    inverse: '#FFFFFF',  // For dark backgrounds
    disabled: '#9CA3AF',
  },
} as const;

// Typography system (Google Fonts - Inter/Outfit)
export const TYPOGRAPHY = {
  scale: {
    h1: { fontSize: '48px', lineHeight: '56px', fontWeight: 700, letterSpacing: '-0.5px' },
    h2: { fontSize: '36px', lineHeight: '44px', fontWeight: 700, letterSpacing: '-0.25px' },
    h3: { fontSize: '28px', lineHeight: '36px', fontWeight: 600, letterSpacing: '0px' },
    h4: { fontSize: '24px', lineHeight: '32px', fontWeight: 600, letterSpacing: '0px' },
    h5: { fontSize: '20px', lineHeight: '28px', fontWeight: 600, letterSpacing: '0px' },
    h6: { fontSize: '18px', lineHeight: '24px', fontWeight: 600, letterSpacing: '0px' },
    body: { fontSize: '16px', lineHeight: '24px', fontWeight: 400, letterSpacing: '0.5px' },
    sub: { fontSize: '14px', lineHeight: '20px', fontWeight: 400, letterSpacing: '0px' },
    caption: { fontSize: '12px', lineHeight: '16px', fontWeight: 400, letterSpacing: '0.5px' },
    label: { fontSize: '10px', lineHeight: '12px', fontWeight: 500, letterSpacing: '0.25px' },
  },
  fontFamily: {
    sans: "'Inter', 'ui-sans-serif', 'system-ui', sans-serif",
    display: "'Outfit', 'ui-sans-serif', 'system-ui', sans-serif",
  },
} as const;

// SPACING SYSTEM (8px base scale)
export const SPACING = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

// BOARD RADIUS SYSTEM
export const RADIUS = {
  none: '0px',
  sm: '4px',
  default: '8px',
  lg: '12px',
  pill: '999px',
} as const;

// ELEVATION SYSTEM (shadows)
export const ELEVATION = {
  none: '0 0 0 0 rgba(0, 0, 0, 0.00)', // No shadow
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 10px 15px -5px rgba(0, 0, 0, 0.10), 0 4px 6px -12px rgba(0, 0, 0, 0.04)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
  outstanding: '0 25px 50px -12px rgba(0, 0, 0, 0.10), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// RESPONSIVE BREAKPOINTS (Material Design)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// MOTION SYSTEM (Framer Motion)
export const MOTION = {
  // Animation variants
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: -20, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 26 } },
    exit: { x: 20, opacity: 0, transition: { type: 'spring', stiffness: 180, damping: 18 } },
  },
  staggeredList: {
    initial: { opacity: 0 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'stagger', amount: 0.05, delay: i * 0.05 },
    }),
  },
  // Elevation animations
  hoverLift: {
    transition: { type: 'spring', stiffness: 300, damping: 26 },
  },
} as const;

// DESIGN TOKENS EXPORT
export type DesignToken = {
  colors: typeof COLORS;
  typography: typeof TYPOGRAPHY;
  spacing: typeof SPACING;
  radius: typeof RADIUS;
  elevation: typeof ELEVATION;
  breakpoints: typeof BREAKPOINTS;
  motion: typeof MOTION;
};