const defaultTheme = require("tailwindcss/defaultTheme");

const regex = new RegExp(/production/);
const production = process.argv.some((e) => regex.test(e));

const plugin = require("tailwindcss/plugin");

// Config files
const settings = require("./webpack.settings.js");

const colors = {
  black: "var(--color-black)",
  primary: {
    100: "var(--color-primary-100)",
    200: "var(--color-primary-200)",
    300: "var(--color-primary-300)",
    400: "var(--color-primary-400)",
    500: "var(--color-primary-500)",
    600: "var(--color-primary-600)",
    700: "var(--color-primary-700)",
    800: "var(--color-primary-800)",
    900: "var(--color-primary-900)",
  },
  secondary: {
    100: "var(--color-secondary-100)",
    200: "var(--color-secondary-200)",
    300: "var(--color-secondary-300)",
    400: "var(--color-secondary-400)",
    500: "var(--color-secondary-500)",
    600: "var(--color-secondary-600)",
    700: "var(--color-secondary-700)",
    800: "var(--color-secondary-800)",
    900: "var(--color-secondary-900)",
  },

  gray: {
    100: "var(--color-gray-100)",
    200: "var(--color-gray-200)",
    300: "var(--color-gray-300)",
    400: "var(--color-gray-400)",
    500: "var(--color-gray-500)",
    600: "var(--color-gray-600)",
    700: "var(--color-gray-700)",
    800: "var(--color-gray-800)",
    900: "var(--color-gray-900)",
  },

  success: {
    100: "var(--color-success-100)",
    200: "var(--color-success-200)",
    300: "var(--color-success-300)",
    400: "var(--color-success-400)",
    500: "var(--color-success-500)",
    600: "var(--color-success-600)",
    700: "var(--color-success-700)",
    800: "var(--color-success-800)",
    900: "var(--color-success-900)",
  },
};

const fontSize = {
  xxs: "var(--text-2xs)",
  xs: "var(--text-xs)",
  sm: "var(--text-sm)",
  base: "var(--text-base)",
  lg: "var(--text-lg)",
  xl: "var(--text-xl)",
  "2xl": "var(--text-2xl)",
  "3xl": "var(--text-3xl)",
  "4xl": "var(--text-4xl)",
  "5xl": "var(--text-5xl)",
  "6xl": "var(--text-6xl)",
};

const fontFamily = {
  sans: [
    "var(--font-family-primary)",
    ...defaultTheme.fontFamily.sans,
  ],
  headline: [
    "var(--font-family-secondary)",
    ...defaultTheme.fontFamily.sans,
  ],
};

const screens = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1920px",
}

const truncate = {
  lines: {
    1: "1",
    2: "2",
    3: "3",
  }
}

const height = {
  "screen-55": "55vh",
  "screen-85": "85vh",
  "screen-90": "90vh",
}

const inset = {
  "1/2": "50%",
}

module.exports = {
  target: "ie11",
  purge: {
    enabled: false, // To enable purge add variable 'production'
    content: settings.purgeCssConfig.paths,
  },
  theme: {
    screens,
    extend: {
      colors,
      fontFamily,
      fontSize,
      truncate,
      height,
      inset,
    },
    customForms: theme => ({
      default: {
        input: {
          borderColor: theme("colors.gray.500"),
          padding: theme("spacing.1"),
          fontSize: theme("fontSize.sm"),
        },
        select: {
          padding: `${theme("spacing.1")} ${theme("spacing.8")} ${theme("spacing.1")} ${theme("spacing.3")}`,
          borderColor: theme("colors.gray.500"),
          iconColor: theme("colors.black"),
          fontSize: theme("fontSize.sm"),
        },
        checkbox: {
          color: theme("colors.black"),
          borderColor: theme("colors.gray.500"),
        }
      }
    })
  },
  plugins: [
    require("tailwindcss-truncate-multiline")(),
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-object-fit")(["responsive"]),
    require("tailwindcss-object-position")(["responsive"]),
    require("tailwindcss-tables")(),
    require("tailwind-css-variables")(
      {
        colors: "color",
        screens: "screen",
        fontFamily: false,
        fontSize: false,
        fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: "spacing",
        margin: false,
        boxShadow: false,
        zIndex: false,
        opacity: false,
      },
      {}
    ),
    plugin(function({ addComponents, theme }) {
      const buttons = {
        ".btn": {
          padding: `${theme("spacing.2")}`,
          borderRadius: theme("borderRadius.full"),
          width: theme("width.11/12"),
          maxWidth: theme("maxWidth.sm"),
          fontSize: theme("fontSize.sm"),
          boxShadow: theme("boxShadow.md"),
          textTransform: "uppercase",
        },
        
        ".btn-black": {
          backgroundColor: theme("colors.black"),
          color: theme("colors.white"),
          fontWeight: "700",
        },

        ".btn-border": {
          borderWidth: theme("spacing.px"),
          borderColor: theme("colors.black"),
        },

        ".btn-white": {
          backgroundColor: theme("colors.white"),
          borderColor: theme("colors.black"),
          color: theme("colors.black"),
        },

        ".btn-coupon": {
          padding: `${theme("spacing.6")}`,
          borderRadius: theme("borderRadius.sm"),
        },

        ".btn-round-sm": {
          borderRadius: theme("borderRadius.sm"),
        },

        ".btn-secondary": {
          backgroundColor: theme("colors.secondary.500"),
          color: theme("colors.black"),
          fontWeight: "700",
        }
      }

      addComponents(buttons)
    })
  ],
};
