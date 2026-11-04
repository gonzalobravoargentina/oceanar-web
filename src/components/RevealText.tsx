"use client";

import { useEffect, useRef } from "react";

type Props = { text: string; className?: string };

// Words light up one after another as the paragraph crosses the screen
// (reference: 1ocean.org). The full text is always in the page and readable
// by screen readers; with reduced motion it simply shows at full strength.
export function RevealText({ text, className = "" }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      // 0 when the paragraph enters at the bottom, 1 when it reaches 35% from the top.
      const progress = (viewport - top) / (viewport * 0.65 + height * 0.5);
      element.style.setProperty(
        "--p",
        String(Math.min(1, Math.max(0, progress))),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p
      ref={ref}
      className={className}
      style={{ "--p": 0 } as React.CSSProperties}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={
            {
              "--i": index / words.length,
              opacity: `calc(0.18 + 0.82 * clamp(0, (var(--p) - var(--i)) * 8, 1))`,
              transition: "opacity 200ms linear",
            } as React.CSSProperties
          }
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
