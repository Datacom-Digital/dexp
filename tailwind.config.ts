import type { Config } from "tailwindcss"

/*
--color-datacom-blue-20: #ccd3e2;
--color-datacom-blue-40: #99a7c6;
--color-datacom-blue-60: #667ba9;
--color-datacom-blue-80: #334f8c;
--color-datacom-blue-base: #00125e;
--color-action-blue: #002bfe;
--color-action-blue-hover: #0022cb;
*/

import colors from "tailwindcss/colors"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        dark: {
          DEFAULT: "#151515",
          primary: "#00125e",
          secondary: "#334f8c",
        },
        light: {
          DEFAULT: "#ffffff",
          primary: "#002bfe",
          secondary: "#0022cb",
        },
        ui: colors.stone,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
