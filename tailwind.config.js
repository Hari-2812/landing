/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(99, 102, 241, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.35), transparent 38%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.2), transparent 45%)',
      },
    },
  },
  plugins: [],
}
