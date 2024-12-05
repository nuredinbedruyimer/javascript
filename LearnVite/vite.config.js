import Inspect from "vite-plugin-inspect";
import path from "path";

export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/assets/images"),
      nuredin: path.resolve(__dirname, "./src/json"),
    },
  },
  envPrefix: "NUREDIN",
  publicDir: "public",
  plugins: [Inspect()],
  esbuild: {
    jsxFactory: "create",
    jsxInject: "import { create } from '/src/jsx/create.js'",
  },
};
