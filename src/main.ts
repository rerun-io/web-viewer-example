import "./style.css";
import { WebViewer } from "@rerun-io/web-viewer";

const rrd =
  new URLSearchParams(location.search).get("url") ||
  "https://app.rerun.io/version/nightly/examples/structure_from_motion.rrd";
const viewer = new WebViewer();
await viewer.start(rrd, null, {
  width: "100%",
  height: "100%",
});

const app = document.getElementById("app")! as HTMLDivElement;

const timeline_el = document.createElement("input");
timeline_el.disabled = true;
timeline_el.style.width = "100%";
timeline_el.oninput = (e) => {
  const recording_id = viewer.get_active_recording_id();
  if (!recording_id) {
    return;
  }

  const timeline_name = viewer.get_active_timeline(recording_id);
  if (!timeline_name) {
    return;
  }

  const time = (e.target as HTMLInputElement).valueAsNumber;
  viewer.set_current_time(recording_id, timeline_name, time);
};
app.append(timeline_el);

viewer.on("timelinechange", (timeline_name, time) => {
  const recording_id = viewer.get_active_recording_id();
  if (!recording_id) {
    return;
  }

  console.log("timelinechange", recording_id, timeline_name, time);
  const time_range = viewer.get_time_range(recording_id, timeline_name)!;

  timeline_el.disabled = false;
  timeline_el.type = "range";
  timeline_el.min = time_range.min.toString();
  timeline_el.max = time_range.max.toString();
  timeline_el.step = ((time_range.max - time_range.min) / 100.0).toString();
  timeline_el.value = time.toString();
});

viewer.on("timeupdate", (time) => {
  timeline_el.value = time.toString();
});

