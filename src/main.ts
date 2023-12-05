import "./style.css";
import { WebViewer } from "@rerun-io/web-viewer";

const rrd =
  new URLSearchParams(location.search).get("url") ||
  "https://demo.rerun.io/version/0.11.0/examples/structure_from_motion/data.rrd";
const viewer = new WebViewer();
viewer.start(rrd);

