import "./style.css";
import { WebViewer } from "@rerun-io/web-viewer";

const rrd =
  new URLSearchParams(location.search).get("url") ||
  "https://app.rerun.io/version/0.22.0/examples/structure_from_motion.rrd";
const viewer = new WebViewer();
viewer.start(rrd, null, {
  width: "100%",
  height: "100%",
});

