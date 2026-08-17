import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'on-error-container': '#93000a',
        'tertiary-fixed-dim': '#b7c9d5',
        'on-tertiary-container': '#a5b6c2',
        'on-primary': '#ffffff',
        'surface-container-lowest': '#ffffff',
        'on-primary-container': '#88b9e3',
        'on-secondary-fixed-variant': '#004f57',
        'on-primary-fixed': '#001e30',
        'tertiary-fixed': '#d3e5f1',
        'surface-dim': '#d2dbe1',
        'on-error': '#ffffff',
        'surface-variant': '#dbe4ea',
        secondary: '#006973',
        'tertiary-container': '#384852',
        'on-surface-variant': '#41474e',
        outline: '#72787f',
        'on-secondary-fixed': '#001f23',
        'inverse-surface': '#293236',
        'surface-container-high': '#e0e9ef',
        'inverse-primary': '#9bccf6',
        'on-tertiary-fixed-variant': '#384953',
        tertiary: '#21323b',
        'error-container': '#ffdad6',
        background: '#f4faff',
        'on-surface-strong': '#0f172a',
        'on-surface': '#141d21',
        'on-primary-fixed-variant': '#0e4b6f',
        'secondary-container': '#62ecff',
        'surface-bright': '#f4faff',
        'surface-container': '#e6eff5',
        'on-background': '#141d21',
        'on-tertiary-fixed': '#0c1e26',
        'primary-fixed': '#cbe6ff',
        error: '#ba1a1a',
        'border-subtle': '#bae6fd',
        'secondary-fixed': '#93f1ff',
        'outline-variant': '#c1c7cf',
        'on-surface-muted': '#475569',
        'surface-container-highest': '#dbe4ea',
        'primary-fixed-dim': '#9bccf6',
        primary: '#00334f',
        'surface-tint': '#2f6388',
        'on-secondary': '#ffffff',
        'inverse-on-surface': '#e9f2f8',
        'primary-container': '#0c4a6e',
        'on-secondary-container': '#006974',
        surface: '#f4faff',
        'on-tertiary': '#ffffff',
        'surface-container-low': '#ecf5fb',
        'secondary-fixed-dim': '#47d8eb',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      spacing: {
        'stack-sm': '12px',
        'stack-md': '24px',
        'container-padding': '32px',
        'stack-lg': '48px',
        base: '8px',
        gutter: '24px',
        // Navbar-specific edge inset, measured directly off the reference
        // screenshot (~133px at a 1920px-wide desktop viewport). The nav's
        // content is full-bleed with no centered max-width — the gutter
        // comes from this padding alone, not from auto-centering.
        'margin-mobile': '20px',
        'margin-desktop': '128px',
      },
      maxWidth: {
        // A generous safety cap so the logo/CTA don't scatter to the literal
        // screen edges on ultra-wide monitors — only engages well past
        // normal desktop widths; at 1920px (where the reference was shot)
        // it doesn't constrain anything, so margin-desktop alone drives it.
        'container-max': '2400px',
      },
      fontFamily: {
        'label-sm': ['Manrope'],
        'headline-lg': ['Manrope'],
        'body-lg': ['Manrope'],
        'body-md': ['Manrope'],
        'display-lg': ['Manrope'],
        'mono-data': ['JetBrains Mono'],
        'headline-md': ['Manrope'],
        'headline-lg-mobile': ['Manrope'],
      },
      fontSize: {
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'mono-data': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '700' }],
      },
    },
  },
  plugins: [forms, containerQueries],
}
