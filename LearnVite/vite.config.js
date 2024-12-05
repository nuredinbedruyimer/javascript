import Inspect from "vite-plugin-inspect";
import checker from "vite-plugin-checker";

export default {
  publicDir: "public",
  plugins: [
    Inspect(),
    checker({
      typescript: true,
    }),
  ],
  esbuild: {
    jsxFactory: "create",
    jsxInject: "import { create } from '/src/jsx/create.js'",
  },
};
