import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        evergreen: 'var(--evergreen)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        amber: 'var(--amber)',
        teal: 'var(--teal)',
        border: 'var(--border)',
        card: 'var(--card)',
        softgreen: 'var(--soft-green)'
      },
      maxWidth: {
        container: '1240px'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
