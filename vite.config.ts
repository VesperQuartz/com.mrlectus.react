import { resolve } from "node:path";
import babelPlugin from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["mrlectus.local"],
  },
  plugins: [
    tanstackRouter({ autoCodeSplitting: true, target: "react" }),
    viteReact(),
    babelPlugin({
      presets: [reactCompilerPreset()],
      include: [/\.(ts|tsx|js|jsx)$/],
    }),
    tailwindcss(),
    // devtools({
    //   removeDevtoolsOnBuild: true,
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
