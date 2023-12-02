/** @type {import('tailwindcss').Config} */
import colors, { green, yellow } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        // 'dots-pattern': "url('/images/bg-dots.svg')",
      },
      screens: {
        ...defaultTheme.screens,
        'xs': '480px',
      },
      colors: {
        ...colors,
        current: 'currentColor',
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        background: 'hsl(var(--background) / 1)',
        base: {
          50: 'hsl(var(--base) / 0.05)',
          100: 'hsl(var(--base) / 0.1)',
          200: 'hsl(var(--base) / 0.2)',
          300: 'hsl(var(--base) / 0.3)',
          400: 'hsl(var(--base) / 0.4)',
          500: 'hsl(var(--base) / 0.5)',
          600: 'hsl(var(--base) / 0.6)',
          700: 'hsl(var(--base) / 0.7)',
          800: 'hsl(var(--base) / 0.8)',
          900: 'hsl(var(--base) / 1)',
        },
        primary: {
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
        },
        secondary: {
          50: 'hsl(var(--secondary-50))',
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          300: 'hsl(var(--secondary-300))',
          400: 'hsl(var(--secondary-400))',
          500: 'hsl(var(--secondary-500))',
          600: 'hsl(var(--secondary-600))',
          700: 'hsl(var(--secondary-700))',
          800: 'hsl(var(--secondary-800))',
          900: 'hsl(var(--secondary-900))',
        },
        tertiary: {
          50: 'hsl(var(--tertiary-50))',
          100: 'hsl(var(--tertiary-100))',
          200: 'hsl(var(--tertiary-200))',
          300: 'hsl(var(--tertiary-300))',
          400: 'hsl(var(--tertiary-400))',
          500: 'hsl(var(--tertiary-500))',
          600: 'hsl(var(--tertiary-600))',
          700: 'hsl(var(--tertiary-700))',
          800: 'hsl(var(--tertiary-800))',
          900: 'hsl(var(--tertiary-900))',
        },
        success: {
          50: 'hsl(var(--success-50))',
          100: 'hsl(var(--success-100))',
          200: 'hsl(var(--success-200))',
          300: 'hsl(var(--success-300))',
          400: 'hsl(var(--success-400))',
          500: 'hsl(var(--success-500))',
          600: 'hsl(var(--success-600))',
          700: 'hsl(var(--success-700))',
          800: 'hsl(var(--success-800))',
          900: 'hsl(var(--success-900))',
        },
        highlight: {
          50: 'hsl(var(--highlight-50))',
          100: 'hsl(var(--highlight-100))',
          200: 'hsl(var(--highlight-200))',
          300: 'hsl(var(--highlight-300))',
          400: 'hsl(var(--highlight-400))',
          500: 'hsl(var(--highlight-500))',
          600: 'hsl(var(--highlight-600))',
          700: 'hsl(var(--highlight-700))',
          800: 'hsl(var(--highlight-800))',
          900: 'hsl(var(--highlight-900))',
        },
        warning: {
          50: 'hsl(var(--warning-50))',
          100: 'hsl(var(--warning-100))',
          200: 'hsl(var(--warning-200))',
          300: 'hsl(var(--warning-300))',
          400: 'hsl(var(--warning-400))',
          500: 'hsl(var(--warning-500))',
          600: 'hsl(var(--warning-600))',
          700: 'hsl(var(--warning-700))',
          800: 'hsl(var(--warning-800))',
          900: 'hsl(var(--warning-900))',
        }
      },
    },
  },
  plugins: [],
}

// gridTemplateRows: {
//   'layout': 'auto 1fr auto'
// }