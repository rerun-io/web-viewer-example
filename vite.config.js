/** @type {import("vite").UserConfig} */
const config = {
  // https://github.com/rerun-io/rerun/issues/6815
  optimizeDeps: {
    exclude: process.env.NODE_ENV === "production" ? [] : ["@rerun-io/web-viewer"],
  },
  server: {
    port: 5173,
  },
};

// Support deployment to GitHub Pages
if ("REPOSITORY" in process.env) {
  config.base = `/${process.env.REPOSITORY}/`;
}

export default config;

