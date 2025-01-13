const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sp': {'max': '767px'},  // SP用
      'tb': {'max': '1023px'}, // タブレット用
      ...defaultTheme.screens, // 既存のブレークポイント
    },
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
      keyframes: {
        textFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        textFadeIn: 'textFadeIn 1s ease-out forwards'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 