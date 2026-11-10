"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

// TEMPORARY diagnostic: open any page with `?debug` to see, on the page
// itself, what the browser does with each video (useful on a phone, where
// there is no console). Delete this file once the phone issue is solved.

const noop = () => () => {};

type Row = {
  label: string;
  file: string;
  ready: number;
  network: number;
  paused: boolean;
  muted: boolean;
  time: string;
  error: string;
  playError: string;
};

function readVideos(): Row[] {
  return [...document.querySelectorAll("video")].map((video, i) => ({
    label:
      video.closest("section")?.querySelector("h2")?.textContent ?? `#${i}`,
    file: video.currentSrc.split("/").pop() || "(no source yet)",
    ready: video.readyState,
    network: video.networkState,
    paused: video.paused,
    muted: video.muted,
    time: video.currentTime.toFixed(1),
    error: video.error ? `${video.error.code} ${video.error.message}` : "-",
    playError: video.dataset.playError ?? "-",
  }));
}

export function VideoDebug() {
  const enabled = useSyncExternalStore(
    noop,
    () => window.location.search.includes("debug"),
    () => false,
  );
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => setRows(readVideos()), 1000);
    return () => clearInterval(id);
  }, [enabled]);

  if (!enabled) return null;

  const probe = document.createElement("video");
  const info = [
    `screen ${window.innerWidth}x${window.innerHeight}`,
    `portrait ${window.matchMedia("(orientation: portrait)").matches}`,
    `reduced-motion ${window.matchMedia("(prefers-reduced-motion: reduce)").matches}`,
    `mp4 ${probe.canPlayType('video/mp4; codecs="avc1.640028"') || "no"}`,
    `webm ${probe.canPlayType('video/webm; codecs="vp9"') || "no"}`,
    navigator.userAgent,
  ];

  return (
    <div className="fixed inset-x-2 top-2 z-[100] max-h-[60svh] overflow-auto rounded-lg bg-black/85 p-3 font-mono text-[10px] leading-tight text-white">
      <p className="mb-1 font-bold">
        DEBUG videos (ready 4 = loaded, paused false = playing)
      </p>
      {info.map((line) => (
        <p key={line} className="break-all opacity-80">
          {line}
        </p>
      ))}
      <hr className="my-2 opacity-30" />
      {rows.map((row, i) => (
        <p key={i} className="mb-1 break-all">
          {row.label}: {row.file} | ready {row.ready} net {row.network} |{" "}
          {row.paused ? "PAUSED" : "playing"} | muted {String(row.muted)} | t{" "}
          {row.time} | err {row.error} | play() {row.playError}
        </p>
      ))}
    </div>
  );
}
