import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: [
          'Playfair Display',
          'Georgia',
          ...defaultTheme.fontFamily.serif,
        ], // For "BE IN" logo style
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // For "HAIR DESIGN" logo style
      },
      colors: {
        primary: {
          // BE IN HAIR DESIGN salon colors
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)', // Main salon color #5C3A3A
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        accent: {
          silver: 'rgb(var(--color-accent-silver) / <alpha-value>)', // #C0C0C0
          gold: 'rgb(var(--color-accent-gold) / <alpha-value>)', // #D4AF37
          white: 'rgb(var(--color-accent-white) / <alpha-value>)', // #FFFFFF
        },
        neutral: {
          dark: 'rgb(var(--color-neutral-dark) / <alpha-value>)', // #2C2C2C
          medium: 'rgb(var(--color-neutral-medium) / <alpha-value>)', // #666666
          light: 'rgb(var(--color-neutral-light) / <alpha-value>)', // #F5F5F5
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
