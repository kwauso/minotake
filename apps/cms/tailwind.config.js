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
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 