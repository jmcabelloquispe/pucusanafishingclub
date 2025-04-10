// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-arena',
    'text-arena',
    'bg-mar-pucusana',
    'text-mar-pucusana'
  ],
  theme: {
    extend: {
      colors: {
        'arena': '#f6e05e',
        'mar-pucusana': '#1e3a8a',
      }
    }
  },
  plugins: []
}
