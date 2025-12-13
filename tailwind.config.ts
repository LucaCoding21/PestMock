import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium brand palette inspired by NoPests/Orkin
        brand: {
          900: '#0A2528', // Darkest - footer, nav
          800: '#0D3B3F', // Dark teal
          700: '#115E54', // Primary dark
          600: '#147D6F', // Primary
          500: '#1A9C8B', // Primary light
          400: '#3DB5A6', // Accent
          300: '#6BCEC2', // Light accent
          200: '#A8E4DC', // Very light
          100: '#E0F5F2', // Lightest
          50: '#F0FAF8',  // Background tint
        },
        // Warm accents like Orkin's khaki
        warm: {
          900: '#4A3728',
          800: '#6B503A',
          700: '#8C6A4D',
          600: '#A8835F',
          500: '#C49B72',
          400: '#D4B08A',
          300: '#E4C9A8',
          200: '#F0DCC5',
          100: '#F7EDE0',
          50: '#FBF6F0',
        },
        // Semantic colors
        background: '#FAFBFC',
        heading: '#0A2528',
        muted: '#5A6B70',
        success: '#16A34A',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Dramatic size scale
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.25', fontWeight: '700' }],
        'heading': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'card': '20px',
        'button': '14px',
        'large': '28px',
        'xl': '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(10,37,40,0.06), 0 1px 3px rgba(10,37,40,0.04)',
        'card-hover': '0 12px 40px rgba(10,37,40,0.12), 0 4px 12px rgba(10,37,40,0.08)',
        'button': '0 4px 14px rgba(20,125,111,0.35)',
        'button-hover': '0 6px 20px rgba(20,125,111,0.45)',
        'badge': '0 2px 8px rgba(10,37,40,0.1)',
        'elevated': '0 20px 60px rgba(10,37,40,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
