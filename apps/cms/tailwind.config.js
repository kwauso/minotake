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
        'jp': ['var(--font-genei-gothic)'],  // 日本語フォント
        'en': [                               // 英語フォント
          '"Helvetica Neue"',
          '"Neue Haas Grotesk"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },
      fontWeight: {
        'gothic-thin': '100',
        'gothic-extralight': '200',
        'gothic-light': '300',
        'gothic-semilight': '350',
        'gothic-regular': '400',
        'gothic-medium': '500',
        'gothic-semibold': '600',
        'gothic-bold': '700',
        'gothic-heavy': '800',
      },
      keyframes: {
        textFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        textFadeIn: 'textFadeIn 1s ease-out forwards'
      },
      fontSize: {
        // H1
        'h1': ['40px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h1-tb': ['35px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h1-sp': ['30px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        // H2
        'h2': ['36px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h2-tb': ['32px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h2-sp': ['28px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        // H3
        'h3': ['32px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h3-tb': ['28px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h3-sp': ['24px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        // H4
        'h4': ['28px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h4-tb': ['24px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h4-sp': ['20px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        // H5
        'h5': ['24px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h5-tb': ['20px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h5-sp': ['18px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        // H6
        'h6': ['20px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h6-tb': ['18px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'h6-sp': ['16px', {
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        // Subhead1
        'subhead1': ['24px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead1-tb': ['22px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead1-sp': ['20px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        // Subhead2
        'subhead2': ['20px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead2-tb': ['18px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead2-sp': ['16px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead3': ['18px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead3-tb': ['16px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead3-sp': ['14px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead4': ['16px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead4-tb': ['14px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead4-sp': ['12px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead5': ['14px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead5-tb': ['12px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        'subhead5-sp': ['10px', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '350',
        }],
        // Body1-6
        'body1': ['20px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body1-tb': ['18px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body1-sp': ['16px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body2': ['18px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body2-tb': ['16px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body2-sp': ['14px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body3': ['16px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body3-tb': ['14px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body3-sp': ['12px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body4': ['14px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body4-tb': ['12px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body4-sp': ['10px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body5': ['12px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body5-tb': ['10px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body5-sp': ['9px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body6': ['10px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body6-tb': ['9px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
        'body6-sp': ['8px', {
          lineHeight: '1.7',
          letterSpacing: '0.02em',
          fontWeight: '350',
        }],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 