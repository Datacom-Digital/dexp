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

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
}
export default config
