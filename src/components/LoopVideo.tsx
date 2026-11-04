"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** File name in public/videos/loops, without extension. */
  name: string;
  /** Short description for screen readers. */
  label: string;
  className?: string;
};

type Connection = { saveData?: boolean };

// A silent looping clip that only downloads when it gets close to the screen
// and only plays while visible. The poster image shows first, and stays as a
// still image for people who prefer reduced motion or are saving data.
export function LoopVideo({ name, label, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const visible = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const connection = (navigator as Navigator & { connection?: Connection })
      .connection;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      connection?.saveData
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setLoad(true);
          if (video.currentSrc) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Once the source is added, load it and start if still on screen.
  useEffect(() => {
    const video = ref.current;
    if (!load || !video) return;
    video.load();
    if (visible.current) video.play().catch(() => {});
  }, [load]);

  const base = `/videos/loops/${name}`;
  return (
    <video
      ref={ref}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      poster={`${base}.jpg`}
      className={`h-full w-full object-cover ${className}`}
    >
      {load && <source src={`${base}.mp4`} type="video/mp4" />}
    </video>
  );
}
