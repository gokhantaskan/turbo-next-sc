import type { Config } from "tailwindcss";

export default <Config>{
  content: [],
  corePlugins: {
    preflight: false,
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};
