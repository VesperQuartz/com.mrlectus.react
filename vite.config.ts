import { resolve } from "node:path";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";
import mkcert from "vite-plugin-mkcert";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  server: {
    allowedHosts: ["mrlectus.local"],
  },
  plugins: lazyPlugins(() => [
    tanstackRouter({ autoCodeSplitting: true, target: "react" }),
    viteReact(),
    babel({
      presets: [reactCompilerPreset()],
      include: [/\.(ts|tsx|js|jsx)$/],
    }),
    tailwindcss(),
    devtools({
      removeDevtoolsOnBuild: true,
    }),
    mkcert({}),
    removeConsole(),
  ]),
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
});
