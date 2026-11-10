"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Second of the hero clip at which the sea lion has moved the kelp. The
// wordmark appears right after that gesture.
const REVEAL_AT_SECONDS = 7.2;
// If the video cannot play (data saver, autoplay blocked), show the text anyway.
const FALLBACK_REVEAL_MS = 4000;
const CONJUGATION_INTERVAL_MS = 3200;

const base = "/videos/home/hero-lobo";

type Props = {
  wordmark: string;
  partOfSpeech: string;
  tagline: string;
  conjugations: string[];
  scrollLabel: string;
};

export function Hero({
  wordmark,
  partOfSpeech,
  tagline,
  conjugations,
  scrollLabel,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const [videoRevealed, setRevealed] = useState(false);
  const [index, setIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  // With reduced motion there is no video to wait for.
  const revealed = videoRevealed || reduced;

  useEffect(() => {
    if (!videoFailed) return;
    const id = setTimeout(() => setRevealed(true), FALLBACK_REVEAL_MS);
    return () => clearTimeout(id);
  }, [videoFailed]);

  useEffect(() => {
    if (!revealed || reduced) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % conjugations.length),
      CONJUGATION_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [revealed, reduced, conjugations.length]);

  return (
    <section className="relative isolate flex h-svh min-h-[32rem] flex-col items-center justify-center overflow-hidden text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${base}-poster.jpg)` }}
      >
        {!reduced && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={`${base}-poster.jpg`}
            className="h-full w-full object-cover"
            onTimeUpdate={(e) => {
              if (e.currentTarget.currentTime >= REVEAL_AT_SECONDS)
                setRevealed(true);
            }}
            onError={() => setVideoFailed(true)}
          >
            <source src={`${base}.webm`} type="video/webm" />
            <source
              src={`${base}.mp4`}
              type="video/mp4"
              onError={() => setVideoFailed(true)}
            />
          </video>
        )}
      </div>
      <div
        aria-hidden="true"
        className="to-ocean-ink absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10"
      />

      <div
        className={`flex flex-col items-center gap-6 px-6 transition-opacity duration-[2500ms] ease-out ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="font-heading text-5xl font-medium tracking-[0.35em] uppercase sm:text-7xl">
          <span className="pl-[0.35em]">{wordmark}</span>
        </h1>
        {reduced ? (
          <div className="flex flex-col items-center gap-2">
            <p className="font-display text-xl italic opacity-90 sm:text-2xl">
              {partOfSpeech}
            </p>
            <p className="max-w-xl text-lg opacity-90">
              {conjugations.join(" · ")}
            </p>
          </div>
        ) : (
          <>
            {/* The part of speech stays fixed on the left of the centre line
                while the conjugation changes on its right. */}
            <div
              aria-hidden="true"
              className="grid h-8 w-[min(calc(100vw-3rem),36rem)] grid-cols-[2fr_3fr] items-baseline gap-x-3 sm:grid-cols-2"
            >
              <p className="font-display text-right text-lg italic opacity-90 sm:text-2xl">
                {partOfSpeech}
              </p>
              <p
                key={index}
                className="animate-[fade-rise_1.4s_ease-out_both] text-left text-lg tracking-wide whitespace-nowrap sm:text-2xl"
              >
                {conjugations[index]}
              </p>
            </div>
            <p className="sr-only">
              {partOfSpeech} {conjugations.join(", ")}
            </p>
          </>
        )}

        <p className="font-heading mt-4 text-xs tracking-[0.3em] uppercase opacity-70 sm:text-sm">
          {tagline}
        </p>
      </div>

      <a
        href="#accion"
        aria-label={scrollLabel}
        className={`absolute bottom-8 transition-opacity duration-[2500ms] ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[drift_3s_ease-in-out_infinite] motion-reduce:animate-none"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
