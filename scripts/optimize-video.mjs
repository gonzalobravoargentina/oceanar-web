// Cuts and compresses short, silent video loops for the web, plus a poster
// image for each one (shown first, and instead of the video for people who
// prefer reduced motion or are saving data).
//
// Usage: node scripts/optimize-video.mjs <path to material-oceanar>
// Needs ffmpeg: set FFMPEG=/path/to/ffmpeg, or install ffmpeg-static in
// ~/.oceanar-tools (see docs/pendientes.md).
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const source = process.argv[2];
if (!source) {
  console.error("Usage: node scripts/optimize-video.mjs <material-oceanar>");
  process.exit(1);
}

const ffmpeg =
  process.env.FFMPEG ??
  path.join(os.homedir(), ".oceanar-tools/node_modules/ffmpeg-static/ffmpeg");

// file → output name, start second, length in seconds.
const videos = {
  "2023_08_26_14_02_10.mp4": ["whale-calf-aerial", 0, 12],
  "Secuencia 01.mp4": ["reef-fish-school", 0, 11],
  "VID_20230607_192038908.mp4": ["dome-projection", 1, 9],
};

const out = "public/videos/loops";
fs.mkdirSync(out, { recursive: true });

for (const [file, [name, start, length]] of Object.entries(videos)) {
  const input = path.join(source, "Fotos y videos", file);
  const mp4 = path.join(out, `${name}.mp4`);
  const poster = path.join(out, `${name}.jpg`);
  // 960 px wide H.264 without audio: plays everywhere and stays light.
  execFileSync(ffmpeg, [
    "-loglevel",
    "error",
    "-y",
    "-ss",
    String(start),
    "-t",
    String(length),
    "-i",
    input,
    "-an",
    "-vf",
    "scale=960:-2,fps=30",
    "-c:v",
    "libx264",
    "-profile:v",
    "main",
    "-preset",
    "slow",
    "-crf",
    "28",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    mp4,
  ]);
  execFileSync(ffmpeg, [
    "-loglevel",
    "error",
    "-y",
    "-ss",
    String(start + 1),
    "-i",
    input,
    "-frames:v",
    "1",
    "-vf",
    "scale=960:-2",
    "-q:v",
    "5",
    poster,
  ]);
  const kb = (f) => Math.round(fs.statSync(f).size / 1024);
  console.log(`${name}.mp4 ${kb(mp4)} KB · ${name}.jpg ${kb(poster)} KB`);
}
