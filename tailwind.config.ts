import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Modernized Trendly blue palette
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          // Electric cyan accent for the modern bold look
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        ink: {
          900: '#0b1020',
          800: '#101935',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
        'gradient-mesh':
          'radial-gradient(at 20% 20%, rgba(59,130,246,0.25) 0px, transparent 45%), radial-gradient(at 80% 0%, rgba(34,211,238,0.22) 0px, transparent 50%), radial-gradient(at 70% 90%, rgba(99,102,241,0.18) 0px, transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(37,99,235,0.15), 0 20px 50px -12px rgba(37,99,235,0.35)',
        soft: '0 10px 30px -10px rgba(15, 23, 42, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        // ── New animation keyframes ──────────────────────────────────────
        /** Animated gradient position — use with background-size: 300% 300% */
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        /** Pulsing opacity glow for decorative elements */
        'glow-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        /** SVG path draw-in: pair with strokeDasharray + strokeDashoffset on the path */
        'draw-line': {
          '0%': { strokeDashoffset: '220' },
          '100%': { strokeDashoffset: '0' },
        },
        /** More dramatic slide-up for headings */
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        /** Scale-up entrance for cards and modals */
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.93) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        /** Horizontal ticker for floating badges */
        'ticker': {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-100%)' },
          '40%': { transform: 'translateY(-200%)' },
          '60%': { transform: 'translateY(-200%)' },
          '80%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out both',
        shimmer: 'shimmer 3s linear infinite',
        // ── New animations ───────────────────────────────────────────────
        'gradient-x': 'gradient-x 6s ease infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'draw-line': 'draw-line 1.1s cubic-bezier(0.16,1,0.3,1) 0.4s both',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'scale-in': 'scale-in 0.75s cubic-bezier(0.16,1,0.3,1) both',
        'ticker': 'ticker 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
