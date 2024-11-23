import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const tufteWhite = '#fffff8';

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
            color: tufteWhite,
            blockquote: { color: tufteWhite, 'border-inline-start-color': tufteWhite },
            h1: { color: tufteWhite },
            h2: { color: tufteWhite },
            h3: { color: tufteWhite },
            h4: { color: tufteWhite },
            em: { color: tufteWhite },
            p: { color: tufteWhite },
            i: { color: tufteWhite },
            strong: { color: tufteWhite },
            span: { color: tufteWhite },
            a: {
              color: tufteWhite,
              '&:hover': {
                color: 'hsl(50, 90%, 67%)',
                span: {
                  color: 'hsl(50, 90%, 67%)',
                  transition: 'color 0.3s ease, transform 0.3s ease'
                }
              },
              transition: 'color 0.3s ease, transform 0.3s ease'
            },
            hr: { 'border-color': tufteWhite }
          }
        }
      }
    },
  },

  plugins: [typography]
} satisfies Config;
