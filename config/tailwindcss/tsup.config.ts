import { defineConfig } from "tsup";

export default defineConfig(options => ({
  clean: true,
  dts: true,
  minify: !options.watch,
  sourcemap: !!options.watch,
  format: ["esm", "cjs"],
  entry: ["src/tailwind.config.ts"],
  tsconfig: "./tsconfig.json",
}));
