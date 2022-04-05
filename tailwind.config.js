const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        primary: colors.cyan,
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        sans: ["Sans", ...defaultTheme.fontFamily.sans],
        raleway: ["Dela Gothic One", ...defaultTheme.fontFamily.sans],
        cantarell: ["Cantarell", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: "Montserrat",
            color: theme("colors.gray.800"),
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "2",
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.600")} !important`,
              },
              code: { color: theme("colors.primary.400") },
            },
            "h1,h2,h3,h4,h5,h6": {
              fontFamily: "Montserrat",
              margin: "30px 0px 10px 0px",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h1: {
              fontWeight: "700",
              fontSize: "32px",
            },
            h2: {
              fontWeight: "600",
              fontSize: "28px",
            },
            h3: {
              fontWeight: "800",
              fontSize: "22px",
            },
            "h4,h5,h6": {
              fontSize: "18px",
              fontWeight: "800",
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            details: {
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.400")} !important`,
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            details: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li::marker": {
              color: theme("colors.gray.400"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};
