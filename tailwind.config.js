/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#050A18',    // Deep Midnight
        'brand-midnight': '#030610',
        'brand-primary': '#4f46e5', // Electric Indigo
        'brand-secondary': '#8b5cf6',
        'brand-accent': '#06b6d4',  
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-infinite': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 5))' }
        }
      }
    },
  },
  plugins: [],
}
