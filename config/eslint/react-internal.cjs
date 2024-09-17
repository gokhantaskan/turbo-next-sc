const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended", "turbo"],
  plugins: ["simple-import-sort", "only-warn"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prefer-const": "error",
    quotes: ["error", "double", { avoidEscape: true }],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        varsIgnorePattern: "^_", // Ignore unused variables starting with _
        argsIgnorePattern: "^_", // Ignore unused arguments starting with _
        caughtErrors: "none",
      },
    ],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
};
