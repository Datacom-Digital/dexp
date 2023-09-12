// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "all",
  semi: false,
  singleAttributePerLine: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.ts",
}
