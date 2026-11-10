"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { retryPlayOnTouch } from "@/lib/retryPlayOnTouch";
import { usePortrait } from "@/lib/usePortrait";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type Props = {
  /**
   * File name without extension, inside /public/videos/home. A vertical cut
   * named `<name>-movil` is used when the window is in portrait.
   */
  name: string;
  className?: string;
};

const base = "/videos/home";

// Decorative looping clip. The video only loads once it is near the viewport,
// plays while visible and pauses when it leaves. Visitors who prefer reduced
// motion get the still poster instead. In portrait (phones) the vertical cut
// of the clip is used, so it fills the screen without being cropped.
export function LoopVideo({ name, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();
  const portrait = usePortrait();
  const file = portrait ? `${name}-movil` : name;
  const poster = `${base}/${file}-poster.jpg`;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setNear(true);
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (visible) video.play().catch(() => retryPlayOnTouch(video));
    else video.pause();
  }, [visible, near, portrait]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`overflow-hidden bg-(image:--poster) bg-cover bg-center portrait:bg-(image:--poster-movil) ${className}`}
      style={
        {
          "--poster": `url(${base}/${name}-poster.jpg)`,
          "--poster-movil": `url(${base}/${name}-movil-poster.jpg)`,
        } as CSSProperties
      }
    >
      {near && !reduced && (
        <video
          key={file}
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          className="h-full w-full object-cover"
        >
          <source src={`${base}/${file}.webm`} type="video/webm" />
          <source src={`${base}/${file}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
