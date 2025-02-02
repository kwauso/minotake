const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tb: { max: "1023px" }, // タブレット用
      sp: { max: "767px" }, // SP用（最後に記述）
    },
    extend: {
      maxWidth: {
        content: "1312px",
      },
      borderRadius: {
        max: "999px",
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          '"Neue Haas Grotesk"',
          "var(--font-genei-gothic)",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      fontWeight: {
        "gothic-thin": "100",
        "gothic-extralight": "200",
        "gothic-light": "300",
        "gothic-semilight": "350",
        "gothic-regular": "400",
        "gothic-medium": "500",
        "gothic-semibold": "600",
        "gothic-bold": "700",
        "gothic-heavy": "800",
      },
      keyframes: {
        textFadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        textFadeIn: "textFadeIn 1s ease-out forwards",
      },
      fontSize: {
        // H1
        "h1-ja": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h1-en": [
          "42px",
          {
            lineHeight: "48px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h1-ja-tb": [
          "35px",
          {
            lineHeight: "43px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h1-en-tb": [
          "37px",
          {
            lineHeight: "43px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h1-ja-sp": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h1-en-sp": [
          "32px",
          {
            lineHeight: "38px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // H2
        "h2-ja": [
          "36px",
          {
            lineHeight: "48px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h2-en": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h2-ja-tb": [
          "32px",
          {
            lineHeight: "43px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h2-en-tb": [
          "35px",
          {
            lineHeight: "43px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h2-ja-sp": [
          "28px",
          {
            lineHeight: "38px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h2-en-sp": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // H3
        "h3-ja": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h3-en": [
          "34px",
          {
            lineHeight: "40px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h3-ja-tb": [
          "28px",
          {
            lineHeight: "36px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h3-en-tb": [
          "30px",
          {
            lineHeight: "36px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h3-ja-sp": [
          "25px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h3-en-sp": [
          "27px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // H4
        "h4-ja": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "h4-en": [
          "26px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h4-ja-tb": [
          "23px",
          {
            lineHeight: "30px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "h4-en-tb": [
          "25px",
          {
            lineHeight: "30px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h4-ja-sp": [
          "22px",
          {
            lineHeight: "29px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "h4-en-sp": [
          "24px",
          {
            lineHeight: "29px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // H5
        "h5-ja": [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h5-en": [
          "21px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h5-ja-tb": [
          "19px",
          {
            lineHeight: "26px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h5-en-tb": [
          "20px",
          {
            lineHeight: "26px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h5-ja-sp": [
          "18px",
          {
            lineHeight: "25px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "h5-en-sp": [
          "19px",
          {
            lineHeight: "25px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // H6
        "h6-ja": [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "h6-en": [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h6-ja-tb": [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "h6-en-tb": [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "h6-ja-sp": [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "h6-en-sp": [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // Subhead1
        "subhead1-ja": [
          "18px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead1-en": [
          "19px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead1-ja-tb": [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead1-en-tb": [
          "17px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead1-ja-sp": [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead1-en-sp": [
          "17px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // Subhead2
        "subhead2-ja": [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead2-en": [
          "17px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead2-ja-tb": [
          "15px",
          {
            lineHeight: "15px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead2-en-tb": [
          "16px",
          {
            lineHeight: "15px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead2-ja-sp": [
          "15px",
          {
            lineHeight: "15px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead2-en-sp": [
          "16px",
          {
            lineHeight: "15px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // Subhead3
        "subhead3-ja": [
          "13px",
          {
            lineHeight: "13px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead3-en": [
          "14px",
          {
            lineHeight: "13px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead3-ja-tb": [
          "13px",
          {
            lineHeight: "13px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead3-en-tb": [
          "14px",
          {
            lineHeight: "13px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead3-ja-sp": [
          "13px",
          {
            lineHeight: "13px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead3-en-sp": [
          "14px",
          {
            lineHeight: "13px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // Subhead4
        "subhead4-ja": [
          "12px",
          {
            lineHeight: "12px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead4-en": [
          "13px",
          {
            lineHeight: "12px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead4-ja-tb": [
          "12px",
          {
            lineHeight: "12px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead4-en-tb": [
          "13px",
          {
            lineHeight: "12px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead4-ja-sp": [
          "12px",
          {
            lineHeight: "12px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead4-en-sp": [
          "13px",
          {
            lineHeight: "12px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // Subhead5
        "subhead5-ja": [
          "11px",
          {
            lineHeight: "11px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead5-en": [
          "12px",
          {
            lineHeight: "11px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead5-ja-tb": [
          "11px",
          {
            lineHeight: "11px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead5-en-tb": [
          "12px",
          {
            lineHeight: "11px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "subhead5-ja-sp": [
          "11px",
          {
            lineHeight: "11px",
            letterSpacing: "0",
            fontWeight: "350",
          },
        ],
        "subhead5-en-sp": [
          "12px",
          {
            lineHeight: "11px",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        // Body1
        body1: [
          "15px",
          {
            lineHeight: "48px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body1-tb": [
          "14px",
          {
            lineHeight: "48px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body1-sp": [
          "13px",
          {
            lineHeight: "48px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        // Body2
        body2: [
          "15px",
          {
            lineHeight: "32px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body2-tb": [
          "14px",
          {
            lineHeight: "32px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body2-sp": [
          "13px",
          {
            lineHeight: "32px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        // Body3
        body3: [
          "14px",
          {
            lineHeight: "24px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body3-tb": [
          "13px",
          {
            lineHeight: "24px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body3-sp": [
          "12px",
          {
            lineHeight: "24px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        // Body4
        body4: [
          "13px",
          {
            lineHeight: "24px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body4-tb": [
          "12px",
          {
            lineHeight: "24px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body4-sp": [
          "12px",
          {
            lineHeight: "24px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        // Body5
        body5: [
          "11px",
          {
            lineHeight: "22px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body5-tb": [
          "11px",
          {
            lineHeight: "22px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body5-sp": [
          "11px",
          {
            lineHeight: "22px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        // Body6
        body6: [
          "10px",
          {
            lineHeight: "18px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body6-tb": [
          "10px",
          {
            lineHeight: "18px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
        "body6-sp": [
          "10px",
          {
            lineHeight: "18px",
            letterSpacing: "0.02em",
            fontWeight: "350",
          },
        ],
      },
      spacing: {
        // 3XL
        "3xl": "600px",
        "3xl-sp": "600px",
        "3xl-tb": "600px",

        // 2XL
        "2xl": "120px",
        "2xl-sp": "60px",
        "2xl-tb": "80px",

        // XL
        xl: "60px",
        "xl-sp": "52px",
        "xl-tb": "56px",

        // L
        l: "40px",
        "l-sp": "24px",
        "l-tb": "32px",

        // M
        m: "32px",
        "m-sp": "20px",
        "m-tb": "26px",

        // S
        s: "20px",
        "s-sp": "16px",
        "s-tb": "18px",

        // XS
        xs: "16px",
        "xs-sp": "12px",
        "xs-tb": "14px",

        // 2XS
        "2xs": "8px",
        "2xs-sp": "8px",
        "2xs-tb": "8px",

        // 3XS
        "3xs": "6px",
        "3xs-sp": "6px",
        "3xs-tb": "6px",

        // 4XS
        "4xs": "4px",
        "4xs-sp": "4px",
        "4xs-tb": "4px",

        // Side
        side: "36px",
        "side-sp": "28px",
        "side-tb": "32px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addVariant, e }) {
      addVariant("japanese", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.font-auto:is(:lang(ja), ${rule.selector.slice(1)})`;
        });
      });
      addVariant("english", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.font-auto:is(:not(:lang(ja)), ${rule.selector.slice(1)})`;
        });
      });
    }),
  ],
};
