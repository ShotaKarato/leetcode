/** @type {import("eslint").ESLint.Options}} */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      file: ["**./{ts,js}"],
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/comma-dangle": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../*"],
      },
    ],
  },
};
