import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [wasm(), topLevelAwait()],
};

if ("REPOSITORY" in process.env) {
  config.base = `/${process.env.REPOSITORY}/`;
}

export default config;

