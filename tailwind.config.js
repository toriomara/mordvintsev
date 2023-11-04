/** @type {import('tailwindcss').Config} */
import colors, { green, yellow } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];

export const theme = {
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
  },
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    gridTemplateRows: {
      'layout': 'auto 1fr auto'
    }
  },
  colors: {
    ...colors,
    primary: green,
    secondary: yellow,
  },
};

export const plugins = [];
