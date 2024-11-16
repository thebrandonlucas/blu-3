import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
        'dmserifdisplay': ['DM Serif Display', 'serif']
      }
    },
  },

  plugins: [typography]
} satisfies Config;
