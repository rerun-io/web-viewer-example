import "./style.css";
import { WebViewer } from "@rerun-io/web-viewer";

async function main() {
  const viewer = new WebViewer();
  await viewer.start(undefined, document.getElementById("app"), { allow_fullscreen: true });

  globalThis._viewer = viewer;
}

declare global {
  var _viewer: WebViewer | null;
}

main();

