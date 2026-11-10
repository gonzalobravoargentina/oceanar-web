"use client";

import "./ActionText.css";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  /** The whole sentence, read by screen readers. */
  text: string;
  /** The sentence in five parts, in reading order. */
  parts: string[];
};

const cssVars = (vars: Record<string, string | number>) =>
  vars as unknown as CSSProperties;

// A horizontal sine-like wave from x0 to x1 (smooth quadratic curves).
function wavePath(x0: number, x1: number, y: number, amp: number, wl: number) {
  let d = `M${x0},${y} Q${x0 + wl / 4},${y - amp} ${x0 + wl / 2},${y}`;
  for (let x = x0 + wl / 2; x < x1; x += wl / 2) {
    d += ` T${x + wl / 2},${y}`;
  }
  return d;
}

const underlinePath = wavePath(0, 400, 20, 9, 100);

// Index of the big accent word, the one that gets the wave underline.
const ACCENT_PART = 3;

export function ActionText({ text, parts }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // The animation plays every time the section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="accion" ref={ref} className="act-section scroll-mt-8">
      <p className="sr-only">{text}</p>

      <div data-in={inView} aria-hidden="true" className="act-root">
        <div className="act">
          {parts.map((part, i) => (
            <span key={i} className="line" style={cssVars({ "--i": i })}>
              <span className={`w w${i}`}>
                {part}
                {i === ACCENT_PART && (
                  <svg
                    className="stroke-under wipe"
                    viewBox="0 0 400 40"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={underlinePath}
                      stroke="currentColor"
                      strokeWidth="7"
                    />
                  </svg>
                )}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
