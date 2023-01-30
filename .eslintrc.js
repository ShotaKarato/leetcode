/** @type {import("eslint").ESLint.Options}} */

module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        patterns: ["../../*"],
      },
    ],
  },
};
