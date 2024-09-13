import config from "@repo/tailwindcss-config";
import { Config } from "tailwindcss";

export default <Config>{
  presets: [config],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
