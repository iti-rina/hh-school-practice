const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["js/**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      }
    }
  }
];
