/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        anj: {
          linen:     '#F6F4EE',
          ivory:     '#FCF9EB',
          navy:      '#2B5573',
          navydark:  '#1A374D',
          charcoal:  '#383735',
          dark:      '#1C1B1A',
          gold:      '#C5A059',
          goldlight: '#DFBA73',
          border:    '#BFBFBF',
          card:      '#ECE9DF',
        },
        dlife: {
          purple:      '#7B337D',
          purpleDark:  '#632665',
          purpleLight: '#9A469D',
          purpleMuted: '#F5ECF6',
          charcoal:    '#222222',
          gray:        '#555555',
          border:      '#E5E5E5',
          offwhite:    '#F9F9F9',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'sans-serif'],
        mono:  ['var(--font-inter)', 'monospace'],
      },
      animation: {
        'marquee':         'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'fade-up':         'fadeUp 0.7s ease both',
        'fade-in':         'fadeIn 0.5s ease both',
        'scale-in':        'scaleIn 0.4s ease both',
        'bounce-slow':     'bounce 3s ease-in-out infinite',
        'pulse-slow':      'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow-navy': '0 0 30px -8px rgba(43, 85, 115, 0.4)',
        'glow-gold':  '0 0 30px -8px rgba(197, 160, 89, 0.4)',
        '3xl':        '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
