import type { SVGProps } from "react";

// Slots for Cande's hand-drawn illustrations.
//
// PROVISIONAL: these are minimal placeholders. To use a real drawing, paste
// the paths of the exported SVG into the matching component, keeping
// `stroke="currentColor"` so it follows the theme colors and can later be
// animated (lines that draw themselves on scroll).
type DrawingProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Fish(props: DrawingProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 32c10-12 30-12 40 0-10 12-30 12-40 0Z" />
      <path d="M48 32l8-8v16l-8-8Z" />
      <circle cx="20" cy="30" r="1.5" />
    </svg>
  );
}

function Crab(props: DrawingProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="32" cy="36" rx="14" ry="9" />
      <path d="M18 34l-8-10m36 10 8-10M22 44l-6 8m26-8 6 8" />
      <path d="M10 24c-2-4 2-8 6-5m38 5c2-4-2-8-6-5" />
    </svg>
  );
}

function Kelp(props: DrawingProps) {
  return (
    <svg {...base} {...props}>
      <path d="M32 60c-6-10 6-18 0-28s6-18 0-28" />
      <path d="M32 44c6-2 10-6 12-12M32 26c-6-2-10-6-12-12" />
    </svg>
  );
}

export const drawings = { fish: Fish, crab: Crab, kelp: Kelp };

export type DrawingName = keyof typeof drawings;

export const isDrawingName = (value: string): value is DrawingName =>
  value in drawings;
