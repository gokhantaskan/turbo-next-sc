import baseConfig from "@repo/tailwindcss-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [baseConfig],
  content: ["./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
