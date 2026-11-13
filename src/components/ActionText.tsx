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

// Parts 2 and 3 are "la cultura oceánica" / "ocean culture": the emphasis.
const isAccent = (i: number) => i === 2 || i === 3;

// Groups the parts that must stay on one line: "la cultura oceánica" is
// parts 2 and 3 together.
function groupParts(parts: string[]) {
  const groups: number[][] = [];
  parts.forEach((_, i) => {
    if (i > 0 && isAccent(i) && isAccent(i - 1)) {
      groups[groups.length - 1].push(i);
    } else {
      groups.push([i]);
    }
  });
  return groups;
}

export function ActionText({ text, parts }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // The animation plays every time the section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="accion"
      ref={ref}
      data-in={inView}
      className="act-section scroll-mt-8"
    >
      <p className="sr-only">{text}</p>

      <div aria-hidden="true" className="act-inner">
        <span className="act-vline act-vline-top" />
        <p className="act-name">{parts[0]}</p>
        <p className="act-text">
          {groupParts(parts)
            .slice(1)
            .map((group) => (
              <span key={group[0]}>
                <span className="act-group">
                  {group.map((i, k) => (
                    <span key={i}>
                      {k > 0 && " "}
                      <span
                        className={`act-fade ${isAccent(i) ? "act-accent" : ""}`}
                        style={cssVars({ "--i": i - 1 })}
                      >
                        {parts[i]}
                      </span>
                    </span>
                  ))}
                </span>{" "}
              </span>
            ))}
        </p>
        <span className="act-vline act-vline-bottom" />
      </div>
    </section>
  );
}
