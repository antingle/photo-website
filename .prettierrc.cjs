/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,

  // prettier-plugin-tailwindcss must come last.
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  tailwindStylesheet: "./src/styles/base.css",

  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
