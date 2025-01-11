/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'content': '1312px',
      },
      borderRadius: {
        'max': '999px',
      },
      fontFamily: {
        'genei-gothic': ['var(--font-genei-gothic)'],
        'en': [
          '"Helvetica Neue"',
          '"Neue Haas Grotesk"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        'jp': [
          '"GenEi Gothic M"',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 