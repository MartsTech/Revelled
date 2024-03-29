const Theme = {
  fontFamily: {
    sans: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    mono: ["Menlo", "Monaco", "Courier New", "monospace"],
  },
  fontSize: {
    tiny: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "5rem",
  },
  colors: {
    button: "var(--color-button-text)",
    transparent: "transparent",
    primary: {
      100: "var(--color-primary-100)",
      200: "var(--color-primary-200)",
      300: "var(--color-primary-300)",
      600: "var(--color-primary-600)",
      700: "var(--color-primary-700)",
      800: "var(--color-primary-800)",
      900: "var(--color-primary-900)",
    },
    secondary: {
      DEFAULT: "var(--color-secondary)",
      "washed-out": "var(--color-secondary-washed-out)",
    },
    accent: {
      DEFAULT: "var(--color-accent)",
      hover: "var(--color-accent-hover)",
      disabled: "var(--color-accent-disabled)",
    },
    black: "#000",
  },
  boxShadow: {
    outlineLg: "0 0 0 4pt var(--color-primary-800)",
    outlineMd: "0 0 0 2pt var(--color-primary-800)",
    outlineSm: "0 0 0 1pt var(--color-primary-800)",
  },
  borderColor: {
    "color-800": "var(--color-primary-800)",
  },
};

export default Theme;
