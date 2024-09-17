const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    require.resolve("@vercel/style-guide/eslint/next"),
    "turbo",
  ],
  plugins: ["simple-import-sort", "only-warn"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prefer-const": "error",
    quotes: ["error", "double", { avoidEscape: true }],
    curly: ["error", "all"],
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
    node: true,
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
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
