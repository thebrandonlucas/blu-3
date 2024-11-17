import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
        'dmserifdisplay': ['DM Serif Display', 'serif']
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            blockquote: { 'border-inline-start-color': 'white' },
            h1: { color: 'white' },
            h2: { color: 'white' },
            h3: { color: 'white' },
            h4: { color: 'white' },
            em: { color: 'white' },
            p: { color: 'white' },
            hr: { 'border-color': 'white' }
          }
        }
      }
    },
  },

  plugins: [typography]
} satisfies Config;
