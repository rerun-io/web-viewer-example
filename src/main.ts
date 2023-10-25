import "./style.css";
import { WebViewer } from "@rerun-io/web-viewer";

const viewer = new WebViewer();
await viewer.start("https://demo.rerun.io/version/nightly/examples/structure_from_motion/data.rrd");

