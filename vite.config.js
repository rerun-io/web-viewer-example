import wasm from "vite-plugin-wasm";

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [wasm()],
};

if ("REPOSITORY" in process.env) {
  config.base = `/${process.env.REPOSITORY}/`;
}

export default config;

